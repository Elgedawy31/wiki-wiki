import { Button } from "react-bootstrap";
import "../../../Components/Table/Table.css";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import userAvatar from "../../../Assets/UserPage/avatar.png";
import { ImgsUrl } from "../../../Api/Api";
export default function AccessTable(props) {
  const navigation = useNavigate();

  const handleStatus = (value) => {
    switch (value) {
      case "done":
        return (
          <div
            style={{
              backgroundColor: "#01B574",
              width: "fit-content",
              borderRadius: "20px",
            }}
            className="py-2 px-3 "
          >
            {value}
          </div>
        );

      case "in progress":
        return (
          <div
            style={{
              backgroundColor: "#F7B546",
              width: "fit-content",
              borderRadius: "20px",
            }}
            className="py-2 px-3 "
          >
            {value}
          </div>
        );

      case "failed":
        return (
          <div
            style={{
              backgroundColor: "#FF0000",
              width: "fit-content",
              borderRadius: "20px",
            }}
            className="py-2 px-3 "
          >
            {value}
          </div>
        );

      default:
        return (
          <div
            style={{
              backgroundColor: "#01B574",
              width: "fit-content",
              borderRadius: "20px",
            }}
            className="py-2 px-3 "
          >
            {value}
          </div>
        );
    }
  };

  return (
    <div>
      <div
        className="text-white text-start custom-table"
        style={{ overflowX: "scroll" }}
      >
        <div
          className="d-flex align-items-center justify-content-between mt-5 "
          style={{ borderBottom: "#56577A 1px solid" }}
        >
          <h6 className="col-md-2 text-grey ">User</h6>
          <h6 className="col-md-2 text-grey text-center">Coins Collected</h6>
          <h6 className="col-md-2 text-grey text-center">Time Consumed</h6>
          <h6 className="col-md-2 text-grey text-center">No.Lives</h6>
          <h6 className="col-md-2 text-grey text-center ">Date</h6>
          <h6 className="col-md-2 text-grey text-center">action</h6>
        </div>

        {props.data?.length > 0 ? (
          <>
            {props?.data.map((ele) => (
              <div
                key={ele.id}
                className="d-flex align-items-center text-decoration-none text-white w-100 justify-content-between mt-3 pb-2 text-center"
                style={{ borderBottom: "#56577A 1px solid" }}
              >
                <div className=" col-md-2 gap-2 text-start d-flex align-items-center">
                  <img
                    className="col-md-2"
                    src={
                      ele?.user?.img
                        ? `${ImgsUrl}/${ele?.user?.img}`
                        : userAvatar
                    }
                    alt=""
                    style={{
                      height: "63.8px",
                      width: "36.39px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <p className="m-0">{ele?.user?.name || "unKnown"}</p>
                    <p className="text-grey m-0">
                      {ele?.user?.nick_name || "unKnown"}
                    </p>
                  </div>
                </div>
                <div className=" col-md-2 d-flex align-items-center justify-content-center ">
                  <div>{handleStatus(ele?.collected)}</div>
                </div>
                <div className=" col-md-2 d-flex align-items-center justify-content-center">
                  <div>{handleStatus(ele?.collected)}</div>
                </div>
                <div className="col-md-2 d-flex align-items-center justify-content-center">
                  <div>{handleStatus(ele?.collected)}</div>
                </div>
                <h6 className="col-md-2  text-center">
                  {dayjs(ele?.created_at).format("DD/MM/YYYY")}
                </h6>
                <div className="col-md-2 d-flex align-items-center  gap-3 d-flex align-items-center justify-content-center">
                  <Button
                    onClick={() => props.setOpenTarget((prev) => !prev)}
                    className="border-0 text-uppercase text-white rounded bg-custom-gray "
                  >
                    Open
                  </Button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1 className="text-center mt-5">No Data Yet</h1>
        )}
      </div>
    </div>
  );
}
