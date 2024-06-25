import React, { useEffect, useState } from "react";
import message from "../../../Assets/Dashboard/message.png";
import download from "../../../Assets/Dashboard/Download.png";
import duet from "../../../Assets/Dashboard/Duet .png";
import heart from "../../../Assets/Dashboard/heart.png";
import arrow from "../../../Assets/Dashboard/arrow.png";
import { Col, Row } from "react-bootstrap";
import account from "../../../Assets/Dashboard/account.png";
import management from "../../../Assets/Dashboard/Management.png";
import { useNavigate } from "react-router-dom";
function MoreDetails({ data }) {
  const [spentPercent, setSpentPercent] = useState(0);
  const [remainingPercent, setRemainingPercent] = useState(0);
  useEffect(() => {
    if (data?.ad) {
      setSpentPercent(data?.ad?.spent / data?.ad?.coins);

      setRemainingPercent(100 - data.ad?.spent / data?.ad?.coins);
    }
  }, [data]);

  const navigation = useNavigate();

  return (
    <>
      <div className="d-flex align-items-stretch gap-4 mb-5">
        <div className="ad-bg rounded text-white p-4" style={{ flex: 1 }}>
          <div className="flex-main-class mb-4 ">
            <h5>FULL BUDGET</h5>
            <h5>${data?.ad?.coins || 0}</h5>
          </div>
          <div className="mb-4">
            <div className="flex-main-class mb-2">
              <h6>SPENT</h6>
              <h6>${data?.ad?.spent || 0}</h6>
            </div>
            <div
              style={{ backgroundColor: "#B6B6B6", height: "5px" }}
              className="rounded position-relative"
            >
              <span
                style={{
                  width: `${spentPercent}%`,
                  backgroundColor: "#FC155C",
                }}
                className="position-absolute start-0 top-0 rounded h-100 "
              ></span>
            </div>
          </div>
          <div>
            <div className="flex-main-class mb-2">
              <h6>REMIAINING</h6>
              <h6>${data?.ad?.coins - data?.ad?.spent}</h6>
            </div>
            <div
              style={{ backgroundColor: "#B6B6B6", height: "5px" }}
              className="rounded position-relative"
            >
              <span
                style={{
                  width: `${remainingPercent}%`,
                  backgroundColor: "#A263FF",
                }}
                className="position-absolute start-0 top-0 rounded h-100 "
              ></span>
            </div>
          </div>
        </div>
        <div className="ad-bg rounded text-white p-4" style={{ flex: 2 }}>
          <h5 className="mb-4">ENGAGEMENT</h5>
          <div className="flex-main-class">
            <div className="d-flex flex-column align-items-center gap-2">
              <div>{data?.content?.Analytics?.comment || 0}</div>
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
              <div>{data?.content?.Analytics?.share || 0}</div>

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
              <div>{data?.content?.Analytics?.react || 0}</div>

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
              <div>{data?.content?.Analytics?.dowito || 0}</div>

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
              <div>{data?.content?.Analytics?.download || 0}</div>

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
            <span style={{ color: "#A0AEC0" }}>userID: </span>{" "}
            {data?.content?.user?.id}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Full Name: </span>
            {data?.content?.user?.name}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>UserName: </span>
            {data?.content?.user?.nick_name}
          </div>

          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>followers</span>:{" "}
            {data?.content?.user?.followers}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Location</span>:{" "}
            {data?.content?.location}
          </div>
        </div>
      </div>

      <Row className="justify-content-center gap-4">
        <Col
          onClick={() => navigation("/dashboard/balance")}
          xs={4}
          className="ad-bg rounded justify-content-center text-white p-4 d-flex align-items-center gap-3 pointer"
        >
          <h5 className="text-uppercase">Account Balance</h5>
          <img src={account} alt="" />
        </Col>
        <Col
          onClick={() => navigation("/dashboard/user-management")}
          xs={4}
          className="ad-bg rounded justify-content-center text-white p-4 d-flex align-items-center gap-3 pointer"
        >
          <h5 className="text-uppercase">User Management</h5>{" "}
          <img src={management} alt="" />
        </Col>
      </Row>
    </>
  );
}

export default MoreDetails;
