import React, { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";
import { ImgsUrl } from "../../../Api/Api";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { deleteAd } from "../../../store/actions/AdsSlice";
import { useParams } from "react-router-dom";

function AdCard({ data, setshowMoreDetails }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
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
                {data?.content?.user?.name || "unKnown"}
              </p>
              <p className="text-grey fs-3">
                {data?.content?.user?.nick_name || "unKnown"}
              </p>
            </div>
          </div>
          <h6 className="text-white fst-italic fs-1">
            {data?.content?.caption}
          </h6>

          <div className="d-flex align-items-center my-4">
            {data?.content?.artist_image && (
              <img
                src={`${ImgsUrl}/${data?.content?.artist_image}`}
                alt="bander"
                style={{
                  width: "28px",
                  height: "28px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            )}
            <p className="mb-0 text-white ms-3 fst-italic">
              {data?.content?.artist_name && (
                <>
                  {" "}
                  {data?.content?.artist_name} - {data?.content?.sound_name}
                </>
              )}
            </p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <p className="text-white">
              Post Date : {dayjs(data?.ad?.start_date).format("DD/MM/YYYY")}
            </p>
            <p className="text-white">
              Request Date : {dayjs(data?.ad?.end_date).format("DD/MM/YYYY")}
            </p>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-5">
          {data?.ad?.status === "active" && (
            <Button className="bg-secondary text-white rounded py-3 fw-bold text-uppercase fs-5 col-3 border-0">
              Pause
            </Button>
          )}
          {data?.ad?.status === "pending" && (
            <Button
              style={{ backgroundColor: "#24FF01", color: "black" }}
              className=" rounded py-3 fw-bold text-uppercase fs-5 col-3 border-0"
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
