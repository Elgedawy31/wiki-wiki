import { Button } from "react-bootstrap";
import "./System.css";
import SecondTopBar from "../../Components/TopBar/SecondTopBar";
import { useState } from "react";
import SystemPostComponent from "../../Components/System/SystemPostComponent";
import SystemReported from "./SystemReported";
export default function SystemPost() {
  const [changeTable, setChangeTable] = useState(0);
  return (
    <div>
      <SecondTopBar />
      <div className="mt-3 mb-5 d-flex align-items-center justify-content-evenly text-white mb-5">
        <h3
          onClick={() => setChangeTable(0)}
          className={`fw-bold pointer text-grey ${
            changeTable === 0 && "active-table"
          }`}
        >
          Spotted
        </h3>
        <h3
          onClick={() => setChangeTable(1)}
          className={`fw-bold pointer text-grey ${
            changeTable === 1 && "active-table"
          }`}
        >
          Reported by users
        </h3>
        <h3
          onClick={() => setChangeTable(2)}
          className={`fw-bold pointer text-grey ${
            changeTable === 2 && "active-table"
          }`}
        >
          Pick a post
        </h3>
      </div>
      {changeTable === 0 ? (
        <SystemPostComponent />
      ) : changeTable === 2 ? (
        <SystemPostComponent />
      ) : (
        <SystemReported />
      )}
    </div>
  );
}
