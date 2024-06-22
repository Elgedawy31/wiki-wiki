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

export default function Performance() {
  const [type, setType] = useState(0);
  const [activeItem, setActiveItem] = useState(1);

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

  console.log(allCategories);

  return (
    <div className="my-4 position-relative">
      {activeItem === 1 && (
        <>
          <div
            style={{ marginBottom: "6rem" }}
            className="performance-btns  gap-5 d-flex align-items-center justify-content-center"
          >
            <button
              className={`${type === 0 && "active-performance-btn"}`}
              onClick={() => setType(0)}
            >
              LIVE Details
            </button>

            <button
              className={`${type === 1 && "active-performance-btn"}`}
              onClick={() => setType(1)}
            >
              Target
            </button>
          </div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              {type === 0 && <LiveDetails liveData={liveData} />}
              {type === 1 && <TargetDetails allCategories={allCategories} />}
            </>
          )}
        </>
      )}
      {activeItem === 2 && <Performance2 />}
      {activeItem === 3 && <Performance3 />}
      {activeItem === 4 && <Performance4 />}
      <PerformancePagination
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </div>
  );
}
