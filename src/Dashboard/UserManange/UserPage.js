import { Button } from "react-bootstrap";
import TopBar from "../../Components/TopBar/TopBar";
import Facebook from "../../Assets/UserPage/Facebook.svg";
import Instagram from "../../Assets/UserPage/Instagram.svg";
import Twitter from "../../Assets/UserPage/Twitter.svg";
import PinkStatic from "../../Assets/UserPage/PinkStatic.svg";
import PurpleStatic from "../../Assets/UserPage/Purple.svg";
import Tick from "../../Assets/UserPage/Tick.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser, makeUserWarning, reset } from "../../store/actions/UsersSlice";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import userAvatar from "../../Assets/UserPage/avatar.png";
import { ImgsUrl } from "../../Api/Api";
import UniToast from "../../Components/UniToast/UniToast";

export default function UserPage() {
  const [open, setOpen] = useState(false);
  const { userDetails, loading, isWarning } = useSelector(
    (state) => state.users
  );
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const handleWarning = () => {
    dispatch(makeUserWarning({ user_id: id }));
  };

  useEffect(() => {
    if (isWarning) {
      setOpen(true);
    }
  }, [isWarning]);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {open && (
            <UniToast
            reset={reset}
              open={open}
              setOpen={setOpen}
              title={"user Warning"}
              message={"user Warning Successfully"}
            />
          )}
          <TopBar />
          <div className="text-white mt-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center ">
                <img
                  className="col-md-2 rounded  d-block"
                  src={
                    userDetails?.profile?.img
                      ? `${ImgsUrl}/${userDetails?.profile?.img}`
                      : userAvatar
                  }
                  alt=""
                  style={{
                    marginRight: "1rem",
                    height: "88px",
                    width: "88px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <h4 className="m-0">{userDetails?.profile?.name}</h4>
                  <h4 className="text-grey m-0">
                    {userDetails?.profile?.email}
                  </h4>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Button className="border-0 text-uppercase text-white rounded bg-banfsagi">
                  normalize
                </Button>
                <Button className="border-0 text-uppercase text-white rounded bg-black">
                  BAN
                </Button>{" "}
                <Button
                  onClick={handleWarning}
                  className="border-0 text-uppercase text-white rounded bg-custom-warning"
                >
                  Warning
                </Button>
              </div>
            </div>

            <div className="d-flex align-items-stretch justify-content-center mt-4 row-gap-3">
              <div className="col-lg-5 col-6 ">
                <div className="rounded-20 bg-third-grad p-3 me-2 h-100">
                  <h5>Profile bio</h5>
                  <p className="text-grey">
                    {userDetails?.profile?.bio?.lenght > 200
                      ? `${userDetails?.profile?.bio.slice(0, 200)}...`
                      : userDetails?.profile?.bio}
                  </p>
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
                      {userDetails?.profile?.name}{" "}
                    </span>
                  </p>
                  <p className="text-grey">
                    Mobile:
                    <span className="text-white fw-bold">
                      {" "}
                      ({userDetails?.country?.code}){" "}
                      {userDetails?.profile?.phone}
                    </span>
                  </p>
                  <p className="text-grey">
                    Email:
                    <span className="text-white fw-bold">
                      {" "}
                      {userDetails?.profile?.email}
                    </span>
                  </p>
                  <p className="text-grey">
                    Location:
                    <span className="text-white fw-bold">
                      {" "}
                      {userDetails?.country?.name}
                    </span>
                  </p>
                  <p className="text-grey">
                    Social Media:
                    {userDetails?.profile?.facebook && (
                      <a
                        href={`https://${userDetails?.profile?.facebook}`}
                        target="_blank"
                      >
                        <img
                          width="15px"
                          className="mx-1"
                          src={Facebook}
                          alt=""
                        />
                      </a>
                    )}
                    {userDetails?.profile?.twitter && (
                      <a
                        href={`https://${userDetails?.profile?.twitter}`}
                        target="_blank"
                      >
                        <img
                          width="15px"
                          className="mx-1"
                          src={Twitter}
                          alt=""
                        />
                      </a>
                    )}
                    {userDetails?.profile?.instagram && (
                      <a
                        href={`https://${userDetails?.profile?.instagram}`}
                        target="_blank"
                      >
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
              <div className="col-lg-5 col-6 d-flex justify-content-between flex-column">
                <div className="rounded-20 bg-third-grad p-3 me-2">
                  <h5 className="text-grey">Interaction This Week</h5>
                  <h5 className="text-white">+20%</h5>
                  <img className="d-flex ms-auto" src={PinkStatic} alt="" />
                </div>
                <div className="rounded-20 bg-third-grad p-3 me-2">
                  <h5 className="text-grey">Interaction This Month</h5>
                  <h5 className="text-white">+37%</h5>
                  <img className="d-flex ms-auto" src={PurpleStatic} alt="" />
                </div>
              </div>
              <div className="col-lg-2 col-6">
                <div className="rounded-20 bg-third-grad p-3 h-100 d-flex aling-items-center justify-content-center gap-3 flex-column">
                  <p className="text-white">
                    Followers :
                    <span className="text-purple ms-2 ">
                      {" "}
                      {userDetails?.social?.followers || 0}{" "}
                    </span>
                  </p>
                  <p className="text-white">
                    Videos:
                    <span className="text-purple ms-2 ">
                      {" "}
                      {userDetails?.social?.videos || 0}{" "}
                    </span>
                  </p>
                  <p className="text-white">
                    Images:
                    <span className="text-purple ms-2 ">
                      {" "}
                      {userDetails?.social?.images || 0}{" "}
                    </span>
                  </p>
                  <p className="text-white">
                    Likes:
                    <span className="text-purple ms-2 ">
                      {" "}
                      {userDetails?.social?.likes || 0}{" "}
                    </span>
                  </p>
                  <p className="text-white">
                    Reports:{" "}
                    <span className="text-purple ms-2 ">
                      {" "}
                      {userDetails?.social?.reports || 0}{" "}
                    </span>
                  </p>{" "}
                  <p className="text-white">
                    Reports: <img className="ms-2" src={Tick} alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
