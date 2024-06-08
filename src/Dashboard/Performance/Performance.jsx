import { useState } from "react";
import "./performance.css";
import LiveDetails from "./components/LiveDetails";
import TargetDetails from "./components/TargetDetails";

export default function Performance() {
  const [type, setType] = useState(0);
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
      {type === 0 && <LiveDetails />}
      {type === 1 && <TargetDetails />}
    </div>
  );
}
