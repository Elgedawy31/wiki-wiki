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
          className="d-flex align-items-center mt-5"
          style={{ 
            borderBottom: "#56577A 1px solid",
            minWidth: "100%"
          }}
        >
          <h6 className="text-grey" style={{ flex: "1", minWidth: "150px" }}>User</h6>
          {props.report !== "" && (
            <h6 className="text-center text-grey" style={{ flex: "1", minWidth: "150px" }}>{props.report}</h6>
          )}
          {props.reportedUser !== "" && (
            <h6 className="text-center text-grey" style={{ flex: "1", minWidth: "150px" }}>
              {props.reportedUser}
            </h6>
          )}
          <h6 className="text-center text-grey" style={{ flex: "1", minWidth: "150px" }}>{props.secondCol}</h6>
          <h6 className="text-center text-grey" style={{ flex: "1", minWidth: "120px" }}>{props.date}</h6>
          <h6 className="text-center text-grey" style={{ flex: "1", minWidth: "100px" }}>{props.action}</h6>
        </div>

        {props.data?.length > 0 ? (
          <>
            {props?.data.map((ele) => (
              <div
                key={ele.id}
                className="d-flex align-items-center text-decoration-none text-white mt-3 pb-2"
                style={{ 
                  borderBottom: "#56577A 1px solid",
                  minWidth: "100%"
                }}
              >
                <div className="gap-2 text-start d-flex gap-2 align-items-center" style={{ flex: "1", minWidth: "150px" }}>
                  {props.isUsersTable ? (
                    <>
                      {imgError || !ele?.img  ?  <div className="null-img">{ele?.name?.slice(0 ,1) || 'U'} </div> : 
                        <img
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
                            flexShrink: 0
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
                            flexShrink: 0
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
                  <div style={{ flex: "1", minWidth: "150px" }}>
                    <h6
                      className="text-center"
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
                  <div className="gap-2 text-start d-flex ga-2 align-items-center" style={{ flex: "1", minWidth: "150px" }}>
                    {toUserError|| !ele?.to_user?.img  ?  <div className="null-img">{ele?.to_user?.name?.slice(0 ,1) || 'U'}</div> : 
                        <img
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
                            flexShrink: 0
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
                <div style={{ flex: "1", minWidth: "150px" }}>
                  <h6
                    className="text-center"
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
                <h6 className="text-center" style={{ flex: "1", minWidth: "120px" }}>
                  {dayjs(ele?.created_at).format("DD/MM/YYYY")}
                </h6>
                <div className="d-flex align-items-center justify-content-center gap-3" style={{ flex: "1", minWidth: "100px" }}>
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
