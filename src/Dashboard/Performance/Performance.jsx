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

export default function Performance() {
  const [type, setType] = useState(0);

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

  console.log(allCategories)

  return (
    <div className="my-4 position-relative">
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
    </div>
  );
}
