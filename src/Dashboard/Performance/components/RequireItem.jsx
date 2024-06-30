import React, { useState } from "react";
import check from "../../../Assets/Performance/check.png";
import editIcon from "../../../Assets/Performance/editIcon.png";
import { Button, Modal, Row } from "react-bootstrap";
import ArrowImg from "../../../Assets/Performance/edit-icon-arrow.png";
function RequireItem({
  firstText,
  secondText,
  percent,
  isCompleted = false,
  mainNum,
  secNum,
  title,
  mainTarget,
  setMainTarget
}) {
  const firstColor = "#C39CFF";
  const secondColor = "#FF2769";
  const [openUpdateeModal, setOpenUpdateeModal] = useState(false);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "white",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
          }}
        >
          {isCompleted && <img src={check} alt="" />}
        </div>

        <h6 style={{ color: firstColor, margin: 0, width: "130px" }}>
          {firstText}
        </h6>
        <h6
          style={{ color: firstColor, margin: 0, width: "50px" }}
          className="text-center"
        >
          {secNum}
        </h6>
        <h6 style={{ margin: "0" }} className="text-white">
          :
        </h6>
        <h6
          style={{ color: secondColor, margin: 0, width: "50px" }}
          className="text-center"
        >
          {mainNum}
        </h6>
        <h6 style={{ color: secondColor, margin: 0, width: "210px" }}>
          {secondText}
        </h6>
        <h6
          style={{
            color: isCompleted ? firstColor : secondColor,
            margin: 0,
            width: "101px",
          }}
        >
          {isCompleted ? "COMPLETED" : "IN PROCCESS"}
        </h6>
        <div
          className=""
          style={{
            width: "245px",
            background: secondColor,
            height: "6px",
            borderRadius: "8px",
          }}
        >
          <span
            style={{
              width: percent,
              background: firstColor,
              height: "6px",
              display: "block",
            }}
          ></span>
        </div>
        <h6 style={{ color: firstColor, margin: 0, width: "20px" }}>
          {percent}%
        </h6>
        <img
          onClick={() => setOpenUpdateeModal(true)}
          src={editIcon}
          style={{ cursor: "pointer" }}
        />
      </div>

      <Modal
        centered
        show={openUpdateeModal}
        className="p-5"
        onHide={() => setOpenUpdateeModal(false)}
      >
        <Modal.Body
          className="rounded d-flex align-items-center justify-content-center gap-4 flex-column"
          style={{ background: "#000000" }}
        >
          <h5 className="text-white text-center">Number Of {title} Required</h5>

          <div className="d-flex align-items-center justify-content-around w-100">
            <input
              value={mainTarget[title]}
              disabled
              type={title === "hours" ? "time" : "number"}
              style={{
                width: title !== "hours" && "103px",
                height: "65px",
                borderRadius: "11px",
                backgroundColor: "#d9d9d9",
                paddingLeft: "1rem",
              }}
            />
            <img src={ArrowImg} alt="" />
            <input
              type={title === "hours" ? "time" : "number"}
              value={mainTarget[title]}
              onChange={(e) =>
                setMainTarget((prev) => ({ ...prev, [title]: e.target.value }))
              }
              style={{
                width: title !== "hours" && "103px",
                height: "65px",
                borderRadius: "11px",
                backgroundColor: "#FC155C",
                paddingLeft: "1rem",
                color: "white",
              }}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RequireItem;
