import { Button } from "react-bootstrap";
import "./System.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import UniToast from "../../Components/UniToast/UniToast";
import { getContent, reset } from "../../store/actions/ManagementSlice";
export default function SystemReported() {
  const [showUser, setShowUser] = useState(0);
  const {id} = useParams()
  const { contentDetails, error, loading } = useSelector(
    (state) => state.management
  );
const dispatch = useDispatch()
  console.log(contentDetails);

useEffect(() => {
  dispatch(getContent({id}))
} , [id])

  return (
    <div>
      {error && (
        <UniToast
          open={true}
          reset={reset}
          setOpen={() => {}}
          title="Content Management Error"
          message={error}
        />
      )}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="post py-4 px-5 d-flex align-items-stretch justify-content-between my-5 mx-4">
          <div className="col-7 d-flex flex-column justify-content-between mb-2">
            <div className="d-flex align-items-center mb-5">
              <img
                src={require("../../Assets/System/Ellipse 4.png")}
                alt="writer"
                width={"150px"}
                className="pointer"
                onClick={() => setShowUser(0)}
              />
              <img
                src={require("../../Assets/System/Ellipse 6.png")}
                alt="img"
                width={"150px"}
                style={{ transform: "translateX(-20px)" }}
                className="pointer"
                onClick={() => setShowUser(1)}
              />
            </div>
            {showUser ? (
              <div>
                <h6 className="text-white  fs-3 fw-bold">Report Information</h6>
                <div className="d-flex align-items-start gap-5">
                  <div>
                    <p className="text-white">
                      Reported by{" "}
                      <span className="fw-bold"> Esthera Jackson</span>
                    </p>
                    <p className="text-white">Date : 14/06/21</p>
                    <p className="text-white">
                      Email :{" "}
                      <span className="fw-bold"> esthera@simmmple.com</span>
                    </p>
                  </div>
                  <p className="text-white">
                    Reported Post URL :{" "}
                    <Link
                      to="www.wikiwiki.com"
                      className="text-decoration-none"
                    >
                      {" "}
                      www.wikiwiki.com
                    </Link>
                  </p>
                </div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et doloremagna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodoconsequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            ) : (
              <div>
                <div className="d-flex align-items-end gap-5 text-white">
                  <div className="d-flex align-items-center gap-5">
                    <div className="text-center">
                      <p className="m-0">123</p>
                      <h5 className="m-0">Followers</h5>
                    </div>
                    <div className="text-center">
                      <p className="m-0">321</p>
                      <h5 className="m-0">Followers</h5>
                    </div>
                    <div className="text-center">
                      <p className="m-0">132</p>
                      <h5 className="m-0">Followers</h5>
                    </div>
                  </div>
                  <div>
                    <h6 className="text-white m-0">
                      Account URL :{" "}
                      <Link
                        to="www.wikiwiki.com"
                        className="text-decoration-none"
                      >
                        {" "}
                        www.wikiwiki.com
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-white">
                    Name : <span className="fw-bold">Alexa Liras</span>
                  </p>
                  <p className="text-white">Joining Date : 01/06/21</p>
                  <p className="text-white">
                    Email : <span className="fw-bold"> alexa@simmmple.com</span>
                  </p>
                </div>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-between mt-5">
              <Button className="bg-delete text-white rounded py-3 col-3 border-0">
                Delete
              </Button>
              <Button className="bg-warning text-white rounded py-3 col-3 border-0">
                Warning
              </Button>
              <Button className="bg-black text-white rounded py-3 col-3 border-0">
                BAN
              </Button>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center position-relative">
            <img src={require("../../Assets/System/mobile.png")} alt="mobile" />
            <h3 className="text-white position-absolute top-50 start-50 translate-middle m-0">
              No Photo
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
