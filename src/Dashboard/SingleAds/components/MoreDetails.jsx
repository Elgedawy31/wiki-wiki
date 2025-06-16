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
      setSpentPercent((data?.ad?.spent / data?.ad?.coins) * 100);
      setRemainingPercent(100 - (data?.ad?.spent / data?.ad?.coins) * 100);
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
              <h6>REMAINING</h6>
              <h6>${(data?.ad?.coins || 0) - (data?.ad?.spent || 0)}</h6>
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
              <div>{data?.content?.analytics?.view || 0}</div>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "#D9D9D9",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <img src={account} alt="" />
              </div>
              <div>Views</div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div>{data?.content?.analytics?.comment || 0}</div>
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
              <div>{data?.content?.analytics?.share || 0}</div>
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
              <div>{data?.content?.analytics?.react || 0}</div>
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
              <div>{data?.content?.analytics?.dowito || 0}</div>
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
              <div>{data?.content?.analytics?.download || 0}</div>
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
            <span style={{ color: "#A0AEC0" }}>User ID: </span>
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
            <span style={{ color: "#A0AEC0" }}>Followers: </span>
            {data?.content?.user?.followers}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Following: </span>
            {data?.content?.user?.following}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Videos: </span>
            {data?.content?.user?.videos}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Images: </span>
            {data?.content?.user?.images}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Total Likes: </span>
            {data?.content?.user?.likes}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Location: </span>
            {data?.content?.location || "Not specified"}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Account Type: </span>
            {data?.content?.user?.account_public ? "Public" : "Private"}
          </div>
          <div
            className="mb-3"
            style={{ fontSize: "14px", fontWeight: "normal" }}
          >
            <span style={{ color: "#A0AEC0" }}>Verified: </span>
            <span className={data?.content?.user?.page_verified_at ? "text-success" : "text-danger"}>
              {data?.content?.user?.page_verified_at ? "Yes" : "No"}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="d-flex align-items-stretch gap-4 mb-5">
        <div className="ad-bg rounded text-white p-4" style={{ flex: 1 }}>
          <h5 className="mb-4">Content Details</h5>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Content ID: </span>
            {data?.content?.id}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>File Type: </span>
            {data?.content?.file_type}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Points: </span>
            {data?.content?.points}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Created: </span>
            {data?.content?.created_at ? new Date(data?.content?.created_at * 1000).toLocaleDateString() : "N/A"}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Privacy: </span>
            {data?.content?.account_privacy}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Type: </span>
            {data?.content?.type}
          </div>
        </div>

        <div className="ad-bg rounded text-white p-4" style={{ flex: 1 }}>
          <h5 className="mb-4">Content Settings</h5>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Reactions: </span>
            <span className={data?.content?.settings?.react ? "text-success" : "text-danger"}>
              {data?.content?.settings?.react ? "Enabled" : "Disabled"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Comments: </span>
            <span className={data?.content?.settings?.comments ? "text-success" : "text-danger"}>
              {data?.content?.settings?.comments ? "Enabled" : "Disabled"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Downloadable: </span>
            <span className={data?.content?.settings?.downloadable ? "text-success" : "text-danger"}>
              {data?.content?.settings?.downloadable ? "Enabled" : "Disabled"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Screenshot: </span>
            <span className={data?.content?.settings?.screen_shot ? "text-success" : "text-danger"}>
              {data?.content?.settings?.screen_shot ? "Allowed" : "Not Allowed"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Adult Content: </span>
            <span className={data?.content?.settings?.adult ? "text-warning" : "text-success"}>
              {data?.content?.settings?.adult ? "Yes" : "No"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Captions: </span>
            <span className={data?.content?.settings?.captions ? "text-success" : "text-danger"}>
              {data?.content?.settings?.captions ? "Enabled" : "Disabled"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Tops: </span>
            <span className={data?.content?.settings?.tops ? "text-success" : "text-danger"}>
              {data?.content?.settings?.tops ? "Enabled" : "Disabled"}
            </span>
          </div>
        </div>

        <div className="ad-bg rounded text-white p-4" style={{ flex: 1 }}>
          <h5 className="mb-4">Demographics</h5>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Total Views: </span>
            {data?.percentage?.totalViews || 0}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Male Percentage: </span>
            {data?.percentage?.male_percentage || 0}%
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Female Percentage: </span>
            {data?.percentage?.female_percentage || 0}%
          </div>
          {data?.percentage?.country_View && data?.percentage?.country_View.length > 0 && (
            <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
              <span style={{ color: "#A0AEC0" }}>Country Views: </span>
              <div className="mt-2">
                {data?.percentage?.country_View.map((country, index) => (
                  <div key={index} className="mb-1">
                    {country.country}: {country.views} views
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Follow Status: </span>
            {data?.content?.followed_status || "None"}
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Is Liked: </span>
            <span className={data?.content?.is_liked ? "text-success" : "text-danger"}>
              {data?.content?.is_liked ? "Yes" : "No"}
            </span>
          </div>
          <div className="mb-3" style={{ fontSize: "14px", fontWeight: "normal" }}>
            <span style={{ color: "#A0AEC0" }}>Is Saved: </span>
            <span className={data?.content?.is_saved ? "text-success" : "text-danger"}>
              {data?.content?.is_saved ? "Yes" : "No"}
            </span>
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
          <h5 className="text-uppercase">User Management</h5>
          <img src={management} alt="" />
        </Col>
      </Row>
    </>
  );
}

export default MoreDetails;
