import React, { useEffect, useState } from "react";
import SecondTopBar from "../../Components/TopBar/SecondTopBar";
import AdCard from "./components/AdCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { useLocation, useParams } from "react-router-dom";
import { getAdsDetails } from "../../store/actions/AdsSlice";
import MoreDetails from "./components/MoreDetails";

function SingleAds() {
  const { adsDetails, loading } = useSelector((state) => state.ads);
  const [showMoreDetails, setshowMoreDetails] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAdsDetails(id));
  }, [id]);
console.log(adsDetails)
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondTopBar
            status={adsDetails?.ad?.status || "active"}
            title="ADS MANAGER"
            img={require("../../Assets/SideBar/Ads.png")}
          />
          {showMoreDetails ? <MoreDetails/> : <AdCard setshowMoreDetails={setshowMoreDetails} data={adsDetails} />}
        </>
      )}
    </>
  );
}

export default SingleAds;
