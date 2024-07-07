import "./Home.css";
import TopBar from "../../Components/TopBar/TopBar";
import Statics from "../../Components/Statics/Statics";
import Months from "../../Components/Statics/Months";
import AreaChart from "../../Components/charts/AreaChart";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HomeData } from "../../store/actions/HomeSlice";
import { profile } from "../../store/actions/ProfileSlice";
export default function Home() {
  const dispatch = useDispatch();
  const { loading, homeDetails } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(HomeData({ type: "year" }));
  }, []);

  useEffect(() => {
    dispatch(profile())
  } , [])

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <TopBar showSearch={false} />
          <div className="d-flex align-items-stretch flex-wrap row-gap-3">
            <Statics />
            {homeDetails?.active_users && (
              <Months
                mainDetails={homeDetails}
                data={homeDetails?.active_users?.data}
                labels={homeDetails?.active_users?.labels}
              />
            )}
          </div>
          <div className="col-12 mt-3">
            <div className="bg-black-primary py-md-4 py-2 px-md-4 px-2  text-white h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4>Sales overview</h4>
                  <p>
                    <span className="text-green"> (+5) more </span>
                    <span className="text-grey"> Than the last month</span>
                  </p>
                </div>
              </div>
              <AreaChart data={{data:[] , labels:[]}} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
