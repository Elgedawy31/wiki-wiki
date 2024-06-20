import React from "react";
import message from "../../../Assets/Dashboard/message.png";
import download from "../../../Assets/Dashboard/Download.png";
import duet from "../../../Assets/Dashboard/Duet .png";
import heart from "../../../Assets/Dashboard/heart.png";
import arrow from "../../../Assets/Dashboard/arrow.png";
import { Col, Row } from "react-bootstrap";
import account from "../../../Assets/Dashboard/account.png";
import management from "../../../Assets/Dashboard/Management.png";
function MoreDetails() {
  return (
    <>
      <div className="d-flex align-items-stretch gap-4 mb-5">
        <div className="ad-bg rounded text-white p-4" style={{ flex: 1 }}>
          <div className="flex-main-class mb-4 ">
            <h5>FULL BUDGET</h5>
            <h5>$20</h5>
          </div>
          <div className="mb-4">
            <div className="flex-main-class mb-2">
              <h6>SPENT</h6>
              <h6>$15</h6>
            </div>
            <div
              style={{ backgroundColor: "#B6B6B6", height: "5px" }}
              className="rounded position-relative"
            >
              <span
                style={{ width: "75%", backgroundColor: "#FC155C" }}
                className="position-absolute start-0 top-0 rounded h-100 "
              ></span>
            </div>
          </div>
          <div>
            <div className="flex-main-class mb-2">
              <h6>REMIAINING</h6>
              <h6>$5</h6>
            </div>
            <div
              style={{ backgroundColor: "#B6B6B6", height: "5px" }}
              className="rounded position-relative"
            >
              <span
                style={{ width: "25%", backgroundColor: "#A263FF" }}
                className="position-absolute start-0 top-0 rounded h-100 "
              ></span>
            </div>
          </div>
        </div>
        <div className="ad-bg rounded text-white p-4" style={{ flex: 2 }}>
          <h5 className="mb-4">ENGAGEMENT</h5>
          <div className="flex-main-class">
            <div className="d-flex flex-column align-items-center gap-2">
              <div>454</div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <img src={message} alt="" />
              </div>
              <div>Comments</div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div>800</div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <img src={arrow} alt="" />
              </div>
              <div>Share</div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div>4.531</div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <img src={heart} alt="" />
              </div>
              <div>Like</div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div>55</div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <img src={duet} alt="" />
              </div>
              <div>Duet</div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div>3,561</div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <img src={download} alt="" />
              </div>
              <div>Download</div>
            </div>
          </div>
        </div>
        <div className="ad-bg rounded text-white p-4" style={{ flex: 1 }}>
          <h5 className="mb-4">Profile Details</h5>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Full Name</span>: Mohamed Gad
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>UserName</span>: Elgedawy_31
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Mobile</span>: (+20) 01003095940
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Email</span>: mohamedW@gmail.com
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Location</span>: Egypt
          </div>
        </div>
      </div>

      <Row className="justify-content-center gap-4">
        <Col
          xs={4}
          className="ad-bg rounded justify-content-center text-white p-4 d-flex align-items-center gap-3"
        >
          <h5 className="text-uppercase">Account Balance</h5>
          <img src={account} alt="" />
        </Col>
        <Col
          xs={4}
          className="ad-bg rounded justify-content-center text-white p-4 d-flex align-items-center gap-3"
        >
          <h5 className="text-uppercase">User Management</h5>{" "}
          <img src={management} alt="" />
        </Col>
      </Row>
    </>
  );
}

export default MoreDetails;
