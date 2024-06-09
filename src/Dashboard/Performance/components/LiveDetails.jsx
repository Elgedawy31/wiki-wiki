import React from "react";
import userImg from "../../../Assets/Performance/user.png";
import userImg2 from "../../../Assets/Performance/user2.png";
import CircularChart from "../../../Components/charts/CircualChart";
function LiveDetails({ liveData }) {

  // console.log(liveData)
  return (
    <div>
      <div className=" gap-5 mb-5 d-flex align-items-center justify-content-center">
        <div className="top-users-streaming  py-4 px-5">
          <h5 className="text-white">Top Users</h5>
          <span className="text-white mb-4">streaming</span>
          <div className="users d-flex align-items-center justify-content-center gap-3">
            <div className="user-details text-white">
              <h6>UserName</h6>
              <span>91H:44M</span>
            </div>
            <div className="users-images" style={{ flex: 1 }}>
              <img className="first-img" src={userImg} alt="" />
              <img className="second-img" src={userImg2} alt="" />
              <img className="third-img" src={userImg} alt="" />
            </div>
            <div className="user-details text-white">
              <h6>UserName</h6>
              <span>91H:44M</span>
            </div>
          </div>
          <div className="user-details text-white mt-3">
            <h6>UserName</h6>
            <span>91H:44M</span>
          </div>
        </div>
        <div className="top-users-streaming coins py-4 px-5">
          <h5 className="text-white">Top Users</h5>
          <span className="text-white mb-4">Coins</span>
          <div className="users d-flex align-items-center justify-content-center gap-3">
            <div className="user-details text-white">
              <h6>UserName</h6>
              <span>91H:44M</span>
            </div>
            <div className="users-images" style={{ flex: 1 }}>
              <img className="first-img" src={userImg} alt="" />
              <img className="second-img" src={userImg2} alt="" />
              <img className="third-img" src={userImg} alt="" />
            </div>
            <div className="user-details text-white">
              <h6>UserName</h6>
              <span>91H:44M</span>
            </div>
          </div>
          <div className="user-details text-white mt-3">
            <h6>UserName</h6>
            <span>91H:44M</span>
          </div>
        </div>
        {/* <div className="top-users-coins"></div> */}
      </div>
      <div className=" gap-5 d-flex align-items-center justify-content-center">
        <div className="bottom-sec  p-4 ">
          <h4 className="text-white ">Live</h4>
          <div className="core-bottom d-flex align-items-center justify-content-between">
            <div>
              <div className="first-core mb-3">
                <div>Live Streamed</div>
                <span>{liveData?.live?.live_stream ||0}</span>
              </div>
              <div className="first-core">
                <div>Viewers </div>
                <span>{liveData?.live?.viwers ||0}</span>
              </div>
            </div>
            <div className="main-circural-chart">
              <CircularChart colors={["#FC155C"]} percent={43} />
            </div>
          </div>
        </div>

        <div className="bottom-sec  p-4 ">
          <h4 className="text-white ">Coins</h4>
          <div className="core-bottom  d-flex align-items-center justify-content-between">
            <div>
              <div className="first-core coins mb-3">
                <div>Live Streamed</div>
                <span>145.000</span>
              </div>
              <div className="first-core coins">
                <div>Viewers </div>
                <span>145.000</span>
              </div>
            </div>
            <div className="main-circural-chart">
              <CircularChart colors={["#F0C727"]} percent={54} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveDetails;
