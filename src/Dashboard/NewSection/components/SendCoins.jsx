import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import greenIcon from "../../../Assets/Balance/Icon-green.png";
import redIcon from "../../../Assets/Balance/icon-red.png";
function SendCoins() {
  const [name, setName] = useState("");
  let loading = false;
  const handleSubmit = () => {
    console.log(name);
  };
  return (
    <Row>
      <Col md={8}>
        <div className="d-flex text-white align-items-center justify-content-center flex-column gap-3">
          <h3 className="" style={{ transform: "translate(-80px)",}}>
            Enter complete ID or Name of the user
          </h3>
          <div className="d-flex align-items-stretch justify-content-center col-12 mb-5">
            <input
              onChange={(e) => setName(e.target.value)}
              className="col-10 border-0 bg-super-grey p-3 rounded-pill"
              id="search"
              type="text"
              placeholder="Enter complete ID of the post ..."
            />
            <Button
              disabled={name === ""}
              onClick={handleSubmit}
              className="rounded-pill bg-primary-grad border-0 col-1 fw-bold text-uppercase"
              style={{
                transform: "translate(-80px)",
                opacity: 1,
                cursor: name === "" ? "not-allowed" : "pointer",
              }}
            >
              Go
            </Button>
          </div>
        </div>
        <div className="d-flex text-white align-items-center justify-content-center flex-column gap-3">
        <h3 className="" style={{ transform: "translate(-80px)",}}>
         Send Coins
          </h3>
        <div className="d-flex align-items-stretch justify-content-center col-12">
          <input
            onChange={(e) => setName(e.target.value)}
            className="col-10 border-0 bg-super-grey p-3 rounded-pill"
            id="search"
            type="text"
            placeholder="Enter complete ID of the post ..."
          />
          <Button
            disabled={name === ""}
            onClick={handleSubmit}
            className="rounded-pill  border-0 col-1 fw-bold text-uppercase"
            style={{
              transform: "translate(-80px)",
              opacity: 1,
              backgroundColor: "#FFB800",
              cursor: name === "" ? "not-allowed" : "pointer",
            }}
          >
            Go
          </Button>
        </div>
        </div>
      </Col>
      <Col
        md={4}
        style={{ backgroundColor: "#212121" }}
        className="p-4 text-white rounded"
      >
        <h5 className="text-center mb-5">Transactions</h5>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <img src={greenIcon} alt="" />
              <div>
                <h6>Transaction</h6>
                <span className="text-grey">26 March 2020, at 05:00 AM</span>
              </div>
            </div>
            <h6 style={{ color: "#01B574" }}>+21554</h6>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <img src={redIcon} alt="" />
              <div>
                <h6>Transaction</h6>
                <span className="text-grey">26 March 2020, at 05:00 AM</span>
              </div>
            </div>
            <h6 style={{ color: "#F04C4D" }}>-21554</h6>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <img src={greenIcon} alt="" />
              <div>
                <h6>Transaction</h6>
                <span className="text-grey">26 March 2020, at 05:00 AM</span>
              </div>
            </div>
            <h6 style={{ color: "#01B574" }}>+21554</h6>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <img src={redIcon} alt="" />
              <div>
                <h6>Transaction</h6>
                <span className="text-grey">26 March 2020, at 05:00 AM</span>
              </div>
            </div>
            <h6 style={{ color: "#F04C4D" }}>-21554</h6>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <img src={greenIcon} alt="" />
              <div>
                <h6>Transaction</h6>
                <span className="text-grey">26 March 2020, at 05:00 AM</span>
              </div>
            </div>
            <h6 style={{ color: "#01B574" }}>+21554</h6>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <img src={redIcon} alt="" />
              <div>
                <h6>Transaction</h6>
                <span className="text-grey">26 March 2020, at 05:00 AM</span>
              </div>
            </div>
            <h6 style={{ color: "#F04C4D" }}>-21554</h6>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default SendCoins;
