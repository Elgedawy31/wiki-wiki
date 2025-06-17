import { useEffect, useState } from "react";
import "./performance.css";
import LiveDetails from "./components/LiveDetails";
import TargetDetails from "./components/TargetDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  adminLives,
  getAllCategories,
} from "../../store/actions/performanceSlice";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import PerformancePagination from "./components/PerformancePagination";
import Performance2 from "./Perfomance2";
import Performance3 from "./Performance3";
import Performance4 from "./Performance4";
import Performance5 from "./Performance5";
import { baseURL } from "../../Api/Api";
import Axios  from "axios";

export default function Performance() {
  const [type, setType] = useState(0);
  const [activeItem, setActiveItem] = useState(1);
  const [data, setData] = useState([]);
  const [topLoading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (activeItem === 3) {
      const getContent = async () => {
        try {
          setLoading(true);
          const res = await Axios.get(`${baseURL}/admin-searched-tags`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (res?.data) {
            setLoading(false);
            setData(res.data)
          }
        } catch {
          setLoading(false);
        }
      };
      getContent();
    }
  }, [activeItem]);

  const {
    livesDetails: liveData,
    allCategories,
    loading,
  } = useSelector((state) => state.performance);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 0) {
      dispatch(adminLives());
    } else if (type === 1) {
      dispatch(getAllCategories());
    }
  }, [type]);


  return (
    <div className="my-4 position-relative">
      {activeItem === 1 && (
        <>
          <div
            style={{ marginBottom: "6rem" }}
            className="performance-btns gap-5 d-flex align-items-center justify-content-center"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <button
              className={`${type === 0 && "active-performance-btn"}`}
              onClick={() => setType(0)}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              LIVE Details
            </button>

            <button
              className={`${type === 1 && "active-performance-btn"}`}
              onClick={() => setType(1)}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              Target
            </button>
          </div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              {type === 0 && (
                <div data-aos="slide-up" data-aos-duration="800" data-aos-delay="800">
                  <LiveDetails liveData={liveData} />
                </div>
              )}
              {type === 1 && (
                <div data-aos="slide-up" data-aos-duration="800" data-aos-delay="800">
                  <TargetDetails allCategories={allCategories} getAllCategories={getAllCategories} />
                </div>
              )}
            </div>
          )}
        </>
      )}
      {activeItem === 2 && (
        <div >
          <Performance2 />
        </div>
      )}
      {activeItem === 3 && (
        <div >
          <Performance3 loading={topLoading} data={data} />
        </div>
      )}
      {activeItem === 4 && (
        <div >
          <Performance4 />
        </div>
      )}
      {activeItem === 5 && (
        <div >
          <Performance5 />
        </div>
      )}
      <div 
      >
        <PerformancePagination
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />
      </div>
    </div>
  );
}
