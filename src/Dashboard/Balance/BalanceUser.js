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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white mt-4">
          <div 
            className="d-flex align-items-center justify-content-between"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div 
              className="d-flex align-items-center"
              data-aos="fade-right" 
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <img
                src={
                  data?.user?.profile?.img
                    ? `${ImgsUrl}/${data?.user?.profile?.img}`
                    : userAvatar
                }
                alt="balance user"
                style={{ width: "70px", height: "70px", marginRight: "1rem" }}
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="600"
              />
              <div
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="700"
              >
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
              data-aos="fade-left" 
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <img src={require("../../Assets/Balance/coin.png")} alt="" />
              <h4 className="m-0">{data?.user?.wallet?.coins || 0}</h4>
            </div>
          </div>

          <div 
            className="row mt-4"
            data-aos="fade-up" 
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="col-lg-6 col-12 mb-3">
              <div 
                className="rounded-20 bg-third-grad p-4 h-100"
                data-aos="slide-right" 
                data-aos-duration="800"
                data-aos-delay="800"
              >
                <h5 className="mb-3">Profile Information</h5>
                <p className="text-grey mb-3">{data?.user?.profile?.bio || "No bio available"}</p>
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
                <div className="row">
                  <div className="col-12 mb-2">
                    <p className="text-grey mb-1">
                      <strong>Full Name:</strong>{" "}
                      <span className="text-white">
                        {data?.user?.profile?.name || 'N/A'}
                      </span>
                    </p>
                  </div>
                  <div className="col-12 mb-2">
                    <p className="text-grey mb-1">
                      <strong>Email:</strong>{" "}
                      <span className="text-white">
                        {data?.user?.profile?.email || 'N/A'}
                      </span>
                    </p>
                  </div>
                  <div className="col-12 mb-2">
                    <p className="text-grey mb-1">
                      <strong>Mobile:</strong>{" "}
                      <span className="text-white">
                        {data?.user?.country?.code ? `(${data?.user?.country?.code}) ` : ''}{data?.user?.profile?.phone || 'N/A'}
                      </span>
                    </p>
                  </div>
                  <div className="col-12 mb-2">
                    <p className="text-grey mb-1">
                      <strong>Location:</strong>{" "}
                      <span className="text-white">
                        {data?.user?.country?.name || 'N/A'}
                      </span>
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="text-grey mb-1">
                      <strong>Social Media:</strong>{" "}
                      {data?.user?.profile?.facebook && (
                        <a href={`https://${data?.user?.profile?.facebook}`} className="me-2">
                          <img
                            width="18px"
                            className="mx-1"
                            src={Facebook}
                            alt="Facebook"
                          />
                        </a>
                      )}
                      {data?.user?.profile?.twitter && (
                        <a href={`https://${data?.user?.profile?.twitter}`} className="me-2">
                          <img width="18px" className="mx-1" src={Twitter} alt="Twitter" />
                        </a>
                      )}
                      {data?.user?.profile?.insagram && (
                        <a href={`https://${data?.user?.profile?.insagram}`} className="me-2">
                          <img
                            width="18px"
                            className="mx-1"
                            src={Instagram}
                            alt="Instagram"
                          />
                        </a>
                      )}
                      {!data?.user?.profile?.facebook && !data?.user?.profile?.twitter && !data?.user?.profile?.insagram && (
                        <span className="text-white">N/A</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 mb-3">
              <div 
                className="rounded-20 bg-third-grad p-4 h-100"
                data-aos="slide-left" 
                data-aos-duration="800"
                data-aos-delay="1000"
              >
                <h5 className="mb-3">Account Statistics</h5>
                <div className="row">
                  <div className="col-6 mb-3">
                    <div className="text-center p-3 rounded" style={{background: 'rgba(252, 21, 92, 0.1)'}}>
                      <h4 className="text-white mb-1">{data?.user?.wallet?.coins || 0}</h4>
                      <p className="text-grey mb-0 small">Total Coins</p>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="text-center p-3 rounded" style={{background: 'rgba(0, 123, 255, 0.1)'}}>
                      <h4 className="text-white mb-1">{data?.user?.social?.followers || 0}</h4>
                      <p className="text-grey mb-0 small">Followers</p>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="text-center p-3 rounded" style={{background: 'rgba(40, 167, 69, 0.1)'}}>
                      <h4 className="text-white mb-1">{data?.user?.social?.likes || 0}</h4>
                      <p className="text-grey mb-0 small">Total Likes</p>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="text-center p-3 rounded" style={{background: 'rgba(255, 193, 7, 0.1)'}}>
                      <h4 className="text-white mb-1">{data?.user?.social?.videos || 0}</h4>
                      <p className="text-grey mb-0 small">Videos</p>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-grey mb-1">
                    <strong>Account Status:</strong>{" "}
                    <span className={`${data?.user?.social?.verified_at ? 'text-success' : 'text-warning'}`}>
                      {data?.user?.social?.verified_at ? 'Verified' : 'Unverified'}
                    </span>
                  </p>
                  <p className="text-grey mb-1">
                    <strong>Gender:</strong>{" "}
                    <span className="text-white">
                      {data?.user?.profile?.gender ? data?.user?.profile?.gender.charAt(0).toUpperCase() + data?.user?.profile?.gender.slice(1) : 'N/A'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="col-12 mt-3 bg-third-grad p-3 rounded-20 px-5"
            data-aos="fade-up" 
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            {data?.data?.length > 0 ? 
              data?.data?.map((ele, index) => (
                <div 
                  key={ele?.id} 
                  className="d-flex align-items-center justify-content-between text-decoration-none mb-4"
                  data-aos="slide-up" 
                  data-aos-duration="600"
                  data-aos-delay={1400 + (index * 100)}
                >
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
                        {dayjs.unix(ele?.created_at).format("MM-DD-YYYY")}
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
              )) : (
                <h1 
                  className="text-center my-5"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="1400"
                >
                  No Data Yet
                </h1>
              )}
          </div>
        </div>
      )}
    </>
  );
}
