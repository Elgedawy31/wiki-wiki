import { Button } from "react-bootstrap";
import "../../../Components/Table/Table.css";
import { Link, useNavigate } from "react-router-dom";
import userAvatar from "../../../Assets/UserPage/avatar.png";
import { ImgsUrl } from "../../../Api/Api";
export default function AdsTable(props) {
  const navigation = useNavigate();

  const handleStatus = (value) => {
    switch (value) {
      case "active":
        return <div style={{ color: "#24FF01" }}>{value}</div>;

      case "paused":
        return <div style={{ color: "#FF9C27" }}>{value}</div>;

      case "finished":
        return <div style={{ color: "#C197FF" }}>{value}</div>;

      case "pending":
        return <div style={{ color: "#EBFF00" }}>{value}</div>;

      case "refused":
        return <div style={{ color: "#FF0000" }}>{value}</div>;

      default:
        return <div style={{ color: "#EBFF00" }}>{value}</div>;
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
          <h6 className="col-md-3 text-grey">User</h6>
          <h6 className="col-md-3 text-center text-grey">Status</h6>
          <h6 className="col-md-2 text-center text-grey">Request Date</h6>
          <h6 className="col-md-2 text-center text-grey">action</h6>
        </div>

        {props.data?.length > 0 ? (
          <>
            {props?.data.map((ele) => (
              <div
                key={ele.id}
                className="d-flex align-items-center text-decoration-none text-white w-100 justify-content-between mt-3 pb-2 text-center"
                style={{ borderBottom: "#56577A 1px solid" }}
              >
                <div className="col-md-3 gap-2 text-start d-flex ga-2 align-items-center">
                  <img
                    className="col-md-2"
                    src={ele?.user?.img ? `${ImgsUrl}/${ele?.user?.img}` : userAvatar}
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
                <div className="col-md-3">
                  <h6
                    className="col-12"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {handleStatus(ele?.status)}
                  </h6>
                </div>
                <h6 className="col-md-2 text-center">
                  {new Date(ele.created_at * 1000).toLocaleDateString()}
                </h6>
                <div className="col-md-2 d-flex align-items-center justify-content-center gap-3">
                  <Button
                    onClick={() => navigation(`/dashboard/ads/${ele?.id}`)}
                    className="border-0 text-uppercase text-white rounded bg-custom-gray "
                  >
                    Open
                  </Button>
                </div>
              </div>
            ))}
          </>
        ) :<h1 className="text-center mt-5">No Data Yet</h1>}
      </div>
    </div>
  );
}
