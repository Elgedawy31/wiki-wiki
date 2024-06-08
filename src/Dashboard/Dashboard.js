import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";

export default function Dashboard() {
  return (
    <div className="d-flex min-vh-100 position-relative overflow-hidden">
      <img
        className="position-absolute top-0 end-0 z-n1"
        src={require("../Assets/Dashboard/blurRed.png")}
        alt="blurRed"
      />
      <img
        className="position-absolute bottom-0 start-0 z-n1"
        src={require("../Assets/Dashboard/blurBlue.png")}
        alt="blurBlue"
      />
      <div className="col-1 min-vh-100">
        <SideBar />
      </div>
      <div className="col-11 p-5">
        <Outlet />
      </div>
    </div>
  );
}
