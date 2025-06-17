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
          <div data-aos="fade-down" data-aos-duration="800">
            <SecondTopBar
              status={adsDetails?.ad?.status || "active"}
              title="ADS MANAGER"
            />
          </div>
          {showMoreDetails ? (
            <div 
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <MoreDetails data={adsDetails} />
            </div>
          ) : (
            <div 
              data-aos="fade-up" 
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <AdCard setshowMoreDetails={setshowMoreDetails} data={adsDetails} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SingleAds;
