import React, { useEffect, useState } from "react";
import SecondTopBar from "../../Components/TopBar/SecondTopBar";
import AdCard from "./components/AdCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAdsDetails, reset } from "../../store/actions/AdsSlice";
import MoreDetails from "./components/MoreDetails";

function SingleAds() {
  const { adsDetails, loading , deleted } = useSelector((state) => state.ads);
  const [showMoreDetails, setshowMoreDetails] = useState(false);
  const navigation = useNavigate()
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAdsDetails(id));
  }, [id]);

  useEffect(() => {
    if(deleted){
      dispatch(reset())
      navigation('/dashboard/ads')
    }
  } , [deleted])

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondTopBar
            status={adsDetails?.ad?.status || "active"}
            title="ADS MANAGER"
     
          />
          {showMoreDetails ? (
            <MoreDetails data={adsDetails} />
          ) : (
            <AdCard setshowMoreDetails={setshowMoreDetails} data={adsDetails} />
          )}
        </>
      )}
    </>
  );
}

export default SingleAds;
