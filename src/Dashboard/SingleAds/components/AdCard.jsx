import React, { useEffect, useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import { ImgsUrl } from "../../../Api/Api";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAd,
  getAdsDetails,
  reset,
  updateAdDetails,
} from "../../../store/actions/AdsSlice";
import { useParams } from "react-router-dom";

function AdCard({ data, setshowMoreDetails }) {
  const [open, setOpen] = useState(false);
  const { updated } = useSelector((state) => state.ads);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (updated) {
      dispatch(reset());
      dispatch(getAdsDetails(id));
    }
  }, [updated]);

  return (
    <div className="post py-4 px-5 d-flex align-items-stretch justify-content-between my-5 ">
      <div className="col-7 d-flex flex-column justify-content-between mb-2">
        <div>
          <div className="d-flex align-items-center gap-4 mb-5">
            <img
              src={
                data?.content?.user?.img
                  ? `${ImgsUrl}/${data?.content?.user?.img}`
                  : require("../../../Assets/UserPage/avatar.png")
              }
              alt="writer"
              width={"150px"}
              height={"200px"}
              style={{ objectFit: "cover" }}
            />
            <div>
              <p className="text-white fs-1 fst-italic">
                {data?.content?.user?.name || "Unknown"}
              </p>
              <p className="text-grey fs-3">
                @{data?.content?.user?.nick_name || "unknown"}
              </p>
              <div className="d-flex gap-3 mt-2">
                <span className="text-grey fs-6">
                  Followers: {data?.content?.user?.followers || 0}
                </span>
                <span className="text-grey fs-6">
                  Following: {data?.content?.user?.following || 0}
                </span>
              </div>
              <div className="d-flex gap-3 mt-1">
                <span className="text-grey fs-6">
                  Videos: {data?.content?.user?.videos || 0}
                </span>
                <span className="text-grey fs-6">
                  Images: {data?.content?.user?.images || 0}
                </span>
                <span className="text-grey fs-6">
                  Likes: {data?.content?.user?.likes || 0}
                </span>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h6 className="text-white fst-italic fs-1">
              {data?.content?.caption || "No caption"}
            </h6>
            {data?.content?.link && (
              <p className="text-primary">
                Link: <a href={data?.content?.link} target="_blank" rel="noopener noreferrer" className="text-primary">{data?.content?.link}</a>
              </p>
            )}
          </div>

          {/* Media Display */}
          {data?.content?.media && data?.content?.media.length > 0 && (
            <div className="mb-4">
              <h6 className="text-white mb-3">Media:</h6>
              {data?.content?.media.map((media, index) => (
                <div key={index} className="mb-2">
                  {media.type === "mp4" ? (
                    <video 
                      src={media.file} 
                      controls 
                      style={{ maxWidth: "300px", maxHeight: "200px" }}
                      className="rounded"
                    />
                  ) : (
                    <img 
                      src={media.file} 
                      alt={`Media ${index + 1}`}
                      style={{ maxWidth: "300px", maxHeight: "200px", objectFit: "cover" }}
                      className="rounded"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Sound/Artist Info */}
          <div className="d-flex align-items-center my-4">
            {data?.content?.artist_image && (
              <img
                src={`${ImgsUrl}/${data?.content?.artist_image}`}
                alt="artist"
                style={{
                  width: "28px",
                  height: "28px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            )}
            <p className="mb-0 text-white ms-3 fst-italic">
              {data?.content?.artist_name && data?.content?.sound_name && (
                <>
                  {data?.content?.artist_name} - {data?.content?.sound_name}
                </>
              )}
            </p>
          </div>

          {/* Ad Details */}
          <div className="mb-3">
            <div className="d-flex align-items-center gap-3 mb-2">
              <p className="text-white mb-0">
                <strong>Ad ID:</strong> {data?.ad?.id}
              </p>
              <p className="text-white mb-0">
                <strong>Status:</strong> 
                <span className={`ms-2 px-2 py-1 rounded ${
                  data?.ad?.status === 'active' ? 'bg-success' : 
                  data?.ad?.status === 'pending' ? 'bg-warning text-dark' : 'bg-secondary'
                }`}>
                  {data?.ad?.status}
                </span>
              </p>
            </div>
            <div className="d-flex align-items-center gap-3 mb-2">
              <p className="text-white mb-0">
                <strong>Budget:</strong> ${data?.ad?.coins || 0}
              </p>
              <p className="text-white mb-0">
                <strong>Spent:</strong> ${data?.ad?.spent || 0}
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <p className="text-white mb-0">
                <strong>Start Date:</strong> {dayjs(data?.ad?.start_date).format("DD/MM/YYYY HH:mm")}
              </p>
              <p className="text-white mb-0">
                <strong>End Date:</strong> {dayjs(data?.ad?.end_date).format("DD/MM/YYYY HH:mm")}
              </p>
            </div>
          </div>

          {/* Analytics Summary */}
          <div className="mb-3">
            <h6 className="text-white mb-2">Analytics Summary:</h6>
            <div className="d-flex gap-4 flex-wrap">
              <span className="text-grey">Views: {data?.content?.analytics?.view || 0}</span>
              <span className="text-grey">Reactions: {data?.content?.analytics?.react || 0}</span>
              <span className="text-grey">Comments: {data?.content?.analytics?.comment || 0}</span>
              <span className="text-grey">Shares: {data?.content?.analytics?.share || 0}</span>
              <span className="text-grey">Downloads: {data?.content?.analytics?.download || 0}</span>
            </div>
          </div>

          {/* Content Settings */}
          <div className="mb-3">
            <h6 className="text-white mb-2">Content Settings:</h6>
            <div className="d-flex gap-3 flex-wrap">
              <span className={`px-2 py-1 rounded ${data?.content?.settings?.react ? 'bg-success' : 'bg-danger'}`}>
                Reactions: {data?.content?.settings?.react ? 'Enabled' : 'Disabled'}
              </span>
              <span className={`px-2 py-1 rounded ${data?.content?.settings?.comments ? 'bg-success' : 'bg-danger'}`}>
                Comments: {data?.content?.settings?.comments ? 'Enabled' : 'Disabled'}
              </span>
              <span className={`px-2 py-1 rounded ${data?.content?.settings?.downloadable ? 'bg-success' : 'bg-danger'}`}>
                Download: {data?.content?.settings?.downloadable ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-5">
          {data?.ad?.status === "active" && (
            <Button
              onClick={() => dispatch(updateAdDetails({ type: "pending", id }))}
              className="bg-secondary text-white rounded py-3 fw-bold text-uppercase fs-5 col-3 border-0"
            >
              Pause
            </Button>
          )}
          {data?.ad?.status === "pending" && (
            <Button
              style={{ backgroundColor: "#24FF01", color: "black" }}
              className=" rounded py-3 fw-bold text-uppercase fs-5 col-3 border-0"
              onClick={() => dispatch(updateAdDetails({ type: "active", id }))}
            >
              Accept
            </Button>
          )}
          <Button
            onClick={() => setOpen(true)}
            className="bg-delete text-white rounded py-3  text-uppercase fs-5 fw-bold col-3 border-0"
          >
            Delete
          </Button>
          <Button
            onClick={() => setshowMoreDetails((prev) => !prev)}
            className="bg-black text-white rounded py-3  text-uppercase fs-5 fw-bold col-5 border-0"
          >
            View Full Details
          </Button>
        </div>
      </div>
      <div className="col-3 d-flex justify-content-center">
        <img
          src={require("../../../Assets/System/mobilePost.png")}
          alt="mobile"
        />
      </div>

      <Modal centered show={open} className="p-5" onHide={() => setOpen(false)}>
        <Modal.Body
          className="rounded d-flex align-items-center justify-content-center gap-4 flex-column"
          style={{ background: "#000000" }}
        >
          <h5 className="text-white text-center">
            Are you sure you want to delete this Ad ?
          </h5>
          <Row className="gap-5">
            <Button
              style={{
                width: "fit-content",
                borderRadius: "20px",
                backgroundColor: "#9057E5",
                border: 0,
                width: "172px",
                height: "50px",
              }}
              variant="secondary"
              className="text-white"
              onClick={() => {
                dispatch(deleteAd(id));
                setOpen(false);
              }}
            >
              Yes
            </Button>
            <Button
              style={{
                width: "fit-content",
                borderRadius: "20px",
                backgroundColor: "#FC155C",
                border: 0,
                width: "172px",
                height: "50px",
              }}
              variant="secondary"
              className="text-white"
              onClick={() => setOpen(false)}
            >
              No
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdCard;
