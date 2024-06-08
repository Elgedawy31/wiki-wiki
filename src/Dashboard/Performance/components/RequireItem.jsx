import React from "react";
import check from "../../../Assets/Performance/check.png";
import editIcon from "../../../Assets/Performance/editIcon.png";

function RequireItem({
  showCheck = false,
  firstText,
  secondText,
  percent,
  isCompleted = false,
}) {
  const firstColor = "#C39CFF";
  const secondColor = "#FF2769";
  return (
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
        {showCheck && <img src={check} alt="" />}
      </div>

      <h6 style={{ color: firstColor, margin: 0 }}>{firstText}</h6>
      <h6 style={{ color: firstColor, margin: 0 }}>5</h6>
      <h6 style={{ margin: "0" }} className="text-white">
        :
      </h6>
      <h6 style={{ color: secondColor, margin: 0 }}>5</h6>
      <h6 style={{ color: secondColor, margin: 0 }}>{secondText}</h6>
      <h6 style={{ color: isCompleted ? firstColor : secondColor, margin: 0 }}>
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
      <h6 style={{ color: firstColor, margin: 0, width: "20px" }}>{percent}</h6>
      <img src={editIcon} style={{ cursor: "pointer" }} />
    </div>
  );
}

export default RequireItem;
