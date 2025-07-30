import "./Home.css";
import TopBar from "../../Components/TopBar/TopBar";
import Statics from "../../Components/Statics/Statics";
import Months from "../../Components/Statics/Months";
import AreaChart from "../../Components/charts/AreaChart";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { HomeData } from "../../store/actions/HomeSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, homeDetails } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(HomeData({ type: "year" }));
  }, []);



  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div 
            className="d-flex align-items-stretch  flex-wrap row-gap-3"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="col-lg-5  col-12  "  data-aos="slide-right" data-aos-duration="800" data-aos-delay="400">
              <Statics homeDetails={homeDetails} />
            </div>
            {homeDetails?.active_users_trend && (
              <div className="col-lg-7 col-12" data-aos="slide-left" data-aos-duration="800" data-aos-delay="600">
                <Months
                  mainDetails={homeDetails}
                  data={homeDetails?.active_users_trend?.data}
                  labels={homeDetails?.active_users_trend?.labels}
                />
              </div>
            )}
          </div>
          {/* <div className="col-12 mt-3">
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
          </div> */}
        </div>
      )}
    </>
  );
}
