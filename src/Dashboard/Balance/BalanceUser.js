import TopBar from "../../Components/TopBar/TopBar";
import { Button } from "react-bootstrap";

import Facebook from "../../Assets/UserPage/Facebook.svg";
import Instagram from "../../Assets/UserPage/Instagram.svg";
import Twitter from "../../Assets/UserPage/Twitter.svg";
import Balance from "../../Components/Balance Card/Balance";
import greenIcon from "../../Assets/Balance/Icon-green.png";
import redIcon from "../../Assets/Balance/icon-red.png";
import { useParams } from "react-router-dom";

import { useGetOneTransactionQuery } from "../../store/actions/Transaction";
import userAvatar from "../../Assets/UserPage/avatar.png";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { ImgsUrl } from "../../Api/Api";
import dayjs from "dayjs";

export default function BalanceUser() {
  const { id } = useParams();
  const { data, isLoading } = useGetOneTransactionQuery({ id });

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return (
    <>
      <TopBar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center ">
              <img
                src={
                  data?.user?.profile?.img
                    ? `${ImgsUrl}/${data?.user?.profile?.img}`
                    : userAvatar
                }
                alt="balance user"
                style={{ width: "70px", height: "70px", marginRight: "1rem" }}
              />
              <div>
                <h4 className="m-0">{data?.user?.profile?.name}</h4>
                <h6 className="text-grey m-0">
                  {data?.user?.profile?.nick_name}
                </h6>
              </div>
            </div>
            <div
              className="d-flex align-items-center gap-5 rounded p-3"
              style={{
                background:
                  "linear-gradient(96deg, #121327 49.37%, rgba(252, 21, 92, 0.80) 87.11%)",
              }}
            >
              <img src={require("../../Assets/Balance/coin.png")} alt="" />
              <h4 className="m-0">{data?.user?.wallet?.coins || 0}</h4>
            </div>
          </div>

          <div className="d-flex align-items-stretch justify-content-center mt-4 row-gap-3">
            <div className="col-lg-5 col-6">
              <div className="rounded-20 bg-third-grad p-3 me-2 h-100">
                <h5>Profile bio</h5>
                <p className="text-grey">{data?.user?.profile?.bio || "..."}</p>
                <div
                  style={{
                    background:
                      "linear-gradient(to left, #E0E1E200, #E0E1E2, #E0E1E228)",
                    height: "2px",
                    width: "100%",
                    display: "block",
                    margin: "20px 0",
                  }}
                ></div>
                <p className="text-grey">
                  Full Name:{" "}
                  <span className="text-white fw-bold">
                    {" "}
                    {data?.user?.profile?.name}{" "}
                  </span>
                </p>
                <p className="text-grey">
                  Mobile:
                  <span className="text-white fw-bold">
                    ({data?.user?.country.code}) {data?.user?.profile?.phone}
                  </span>
                </p>
                <p className="text-grey">
                  Email:
                  <span className="text-white fw-bold">
                    {data?.user?.profile?.email}
                  </span>
                </p>
                <p className="text-grey">
                  Location:
                  <span className="text-white fw-bold">
                    {" "}
                    {data?.user?.country?.name}{" "}
                  </span>
                </p>
                <p className="text-grey">
                  Social Media:
                  {data?.user?.profile?.facebook && (
                    <a href={`https://${data?.user?.profile?.facebook}`}>
                      {" "}
                      <img
                        width="15px"
                        className="mx-1"
                        src={Facebook}
                        alt=""
                      />
                    </a>
                  )}
                  {data?.user?.profile?.twitter && (
                    <a href={`https://${data?.user?.profile?.twitter}`}>
                      {" "}
                      <img width="15px" className="mx-1" src={Twitter} alt="" />
                    </a>
                  )}
                  {data?.user?.profile?.insagram && (
                    <a href={`https://${data?.user?.profile?.insagram}`}>
                      {" "}
                      <img
                        width="15px"
                        className="mx-1"
                        src={Instagram}
                        alt=""
                      />
                    </a>
                  )}
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-12">
              <div className="rounded-20 bg-third-grad p-3 h-100 ">
                <h5 className="mb-4">Invoices</h5>
                <Balance
                  title="March, 01, 2020"
                  ms="#MS-415646"
                  balance="$180"
                  type="PDF"
                />
                <Balance
                  title="February, 10, 2021"
                  ms="#RV-126749"
                  balance="$250"
                  type="PNG"
                />
                <Balance
                  title="April, 05, 2020"
                  ms="#FB-212562"
                  balance="$560"
                  type="PDF"
                />
                <Balance
                  title="June, 25, 2019"
                  ms="#QW-103578"
                  balance="$120"
                  type="PNG"
                />
                <Balance
                  title="March, 01, 2019"
                  ms="#AR-803481"
                  balance="$300"
                  type="PDF"
                />
              </div>
            </div>
          </div>

          <div className="col-12 mt-3 bg-third-grad p-3 rounded-20 px-5">
            {data?.data?.length > 0 ? 
              data?.data?.map((ele) => (
                <div className="d-flex align-items-center justify-content-between text-decoration-none mb-4">
                  <div className="d-flex align-items-center gap-4">
                    <img
                      src={ele?.coins > 0 ? greenIcon : redIcon}
                      alt={data?.user?.profile?.name}
                    />
                    <div className="d-flex justify-content-center flex-column">
                      <p className="mb-0 text-white fs-4">
                        {data?.user?.profile?.name}
                      </p>
                      <p className="mb-0 text-grey">
                        <p className="mb-0 text-grey">
                          {dayjs(ele?.created_at).format(
                            "MM-DD-YYYY"
                          )}
                        </p>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      className={`mb-0 ${
                        ele?.coins > 0
                          ? "text-green"
                          : "text-very-red"
                      }`}
                    >
                      {ele?.coins}
                    </p>
                  </div>
                </div>
              )) : <h1 className="text-center my-5">No Data Yet</h1>}
          </div>
        </div>
      )}
    </>
  );
}
