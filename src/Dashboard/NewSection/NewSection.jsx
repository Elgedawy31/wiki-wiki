import React, { useState } from "react";
import img from "../../Assets/Balance/coin.png";
import Access from "./components/Access";
import SendCoins from "./components/SendCoins";
function NewSection() {
  const [type, setType] = useState(0);
  const [openTarget, setOpenTarget] = useState(false);

  return (
    <div className="d-flex min-vh-100 position-relative overflow-hidden ">
      <img
        className="position-absolute top-0 end-0 z-n1"
        src={require("../../Assets/Dashboard/blurRed.png")}
        alt="blurRed"
      />
      <img
        className="position-absolute bottom-0 start-0 z-n1"
        src={require("../../Assets/Dashboard/blurBlue.png")}
        alt="blurBlue"
      />
      <div className="p-5" style={{ width: "100%" }}>
        <div className="text-white d-flex align-items-center justify-content-between">
          <h2>Welcome back , username</h2>
          <div className="d-flex align-items-start justify-content-center gap-5">
            <div className="d-flex align-items-center justify-content-center flex-column ">
              <div
                className="d-flex align-items-center justify-content-center gap-4 py-3 px-5 rounded"
                style={{ backgroundColor: "#8B66B7" }}
              >
                <img src={img} style={{ width: "30px" }} alt="" />
                <h4 className="m-0 p-0">20.000/15,000</h4>
              </div>
              <span style={{ color: "#8B66B7" }}>
                Required Coins this Month
              </span>
            </div>

            <div>
              <div
                className="d-flex align-items-center justify-content-center gap-4 py-3 px-5 rounded"
                style={{
                  background:
                    " linear-gradient(95.7deg, #121327 49.37%, rgba(252, 21, 92, 0.8) 87.11%)",
                }}
              >
                <img src={img} style={{ width: "30px" }} alt="" />
                <h4 className="m-0 p-0">20.000</h4>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ marginBottom: "6rem" }}
          className=" mt-5 text-white  gap-5 d-flex align-items-center justify-content-center"
        >
          <h3
            style={{ opacity: type === 0 ? 1 : 0.5, cursor: "pointer" }}
            onClick={() => {
              if (type !== 0) {
                setType(0);
              } else {
                setOpenTarget(false);
              }
            }}
          >
            Access Assigned Targets
          </h3>
          <h3
            style={{ opacity: type === 1 ? 1 : 0.5, cursor: "pointer" }}
            onClick={() => setType(1)}
          >
            Send Coins
          </h3>
        </div>

        {type === 0 && (
          <Access openTarget={openTarget} setOpenTarget={setOpenTarget} />
        )}
        {type === 1 && <SendCoins />}
      </div>
    </div>
  );
}

export default NewSection;
