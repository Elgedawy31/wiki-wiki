import { Button } from "react-bootstrap";
import "./Table.css";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import userAvatar from "../../Assets/UserPage/avatar.png";
import { ImgsUrl } from "../../Api/Api";
import { useState } from "react";
export default function Table(props) {
  const navigation = useNavigate();
  const [fromUserError, setFromUserError] = useState(false);
  const [toUserError, setToUserError] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  return (
    <div>
      {props.showSpotted && (
        <h5 className="text-white fw-bold mb-0">
          Spotted by WIKI WIKI Machines
        </h5>
      )}
      <div
        className="text-white text-start custom-table"
        style={{ overflowX: "scroll" }}
      >
        <div
          className="d-flex align-items-center justify-content-between mt-5 "
          style={{ borderBottom: "#56577A 1px solid" }}
        >
          <h6 className="col-md-3 text-grey">User</h6>
          {props.report !== "" && (
            <h6 className="col-md-3 text-center text-grey">{props.report}</h6>
          )}
          {props.reportedUser !== "" && (
            <h6 className="col-md-3 text-center text-grey">
              {props.reportedUser}
            </h6>
          )}
          <h6 className="col-md-3 text-center text-grey">{props.secondCol}</h6>
          <h6 className="col-md-2 text-center text-grey">{props.date}</h6>
          <h6 className="col-md-2 text-center text-grey">{props.action}</h6>
        </div>

        {props.data?.length > 0 ? (
          <>
            {props?.data.map((ele) => (
              <div
                key={ele.id}
                className="d-flex  align-items-center text-decoration-none text-white bg-primary justify-content-between mt-3 pb-2 text-center"
                style={{ borderBottom: "#56577A 1px solid" }}
              >
                <div className="col-md-3 gap-2 text-start d-flex gap-2 align-items-center">
                  {props.isUsersTable ? (
                    <>
                      {imgError || !ele?.img  ?  <div className="null-img">{ele?.name?.slice(0 ,1) || 'U'} </div> : 
                        <img
                          className="col-md-2"
                          src={
                            ele?.img
                              ? `${ImgsUrl}/${ele?.img}`
                              : userAvatar
                          }
                          alt=""
                          onError={() => setImgError(true)}
                          style={{
                            height: "63.8px",
                            width: "36.39px",
                            objectFit: "cover",
                          }}
                        />
                      }
                      <div>
                        <p className="m-0">{ele?.name || "unKnown"}</p>
                        <p className="text-grey m-0">
                          {ele?.nick_name || "unKnown"}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {fromUserError || !ele?.from_user?.img  ?  <div className="null-img">{ele?.from_user?.name?.slice(0 ,1) || 'U'}</div> : 
                        <img
                          className="col-md-2"
                          src={
                            ele?.from_user?.img
                              ? `${ImgsUrl}/${ele?.from_user?.img}`
                              : userAvatar
                          }
                          alt=""
                          onError={() => setFromUserError(true)}
                          style={{
                            height: "63.8px",
                            width: "36.39px",
                            objectFit: "cover",
                          }}
                        />
                      }
                      <div>
                        <p className="m-0">
                          {ele?.from_user?.name || "unKnown"}
                        </p>
                        <p className="text-grey m-0">
                          {ele?.from_user?.nick_name || "unKnown"}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                {props.report && (
                  <div className="col-md-3">
                    <h6
                      className="col-12 "
                      style={{
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {ele?.report
                        ? ele?.report?.length > 10
                          ? ele?.report.split(0, 15)
                          : ele?.report
                        : "__"}
                    </h6>
                  </div>
                )}
                {props.reportedUser !== "" && (
                  <div className="col-md-3 gap-2 text-start d-flex ga-2 align-items-center">
                    {toUserError|| !ele?.to_user?.img  ?  <div className="null-img">{ele?.to_user?.name?.slice(0 ,1) || 'U'}</div> : 
                        <img
                          className="col-md-2"
                          src={
                            ele?.to_user?.img
                              ? `${ImgsUrl}/${ele?.to_user?.img}`
                              : userAvatar
                          }
                          alt=""
                          onError={() => setToUserError(true)}
                          style={{
                            height: "63.8px",
                            width: "36.39px",
                            objectFit: "cover",
                          }}
                        />
                      }
                    <div>
                      <p className="m-0">{ele?.to_user?.name || "unKnown"}</p>
                      <p className="text-grey m-0">
                        {ele?.to_user?.nick_name || "unKnown"}
                      </p>
                    </div>
                  </div>
                )}
                <div className="col-md-3">
                  <h6
                    className="col-12 "
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {props.secondCol === "Post ID"
                      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
                      : ele?.followers || 0}
                  </h6>
                </div>
                <h6 className="col-md-2 text-center">
                  {dayjs(ele?.created_at).format("DD/MM/YYYY")}
                </h6>
                <div className="col-md-2 d-flex align-items-center justify-content-center gap-3">
                  {props.isContentManagement ? (
                    <Button
                      onClick={() =>
                        navigation(
                          `/dashboard/content-management-system/${ele?.id}`
                        )
                      }
                      className="border-0 text-uppercase text-white rounded bg-custom-gray "
                    >
                      Open
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        navigation(`/dashboard/user-management/${ele?.id}`)
                      }
                      className="border-0 text-uppercase text-white rounded bg-custom-gray "
                    >
                      Open
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1 className="my-5 text-center">NO DATA YET</h1>
        )}
      </div>
    </div>
  );
}
