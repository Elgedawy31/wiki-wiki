import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import closeIcon from "../../Assets/Performance/Close.svg";

export default function Performance4() {
  return (
    <>
      <div className="d-flex align-items-stretch justify-content-between my-4">
        <div className="d-flex flex-column justify-content-between col-8">
          <div className="mt-5">
            <p className="text-white fw-bold">Add an Interest</p>
            <div className="d-flex p-2 px-4 align-items-center gap-4 bg-white rounded-20 w-fit-content">
              <p className="mb-0 text-purple-2 fw-bold">Music</p>
              <img src={closeIcon} alt="" />
            </div>
          </div>
          <div className="d-flex align-items-stretch  col-12">
            <input
              className="col-10 border-0 bg-super-grey p-3 rounded-pill"
              id="search"
              type="text"
              placeholder="Add an Interest"
            />
            <Button
              className="rounded-pill bg-purple-2 border-0 col-2 fw-bold text-uppercase"
              style={{ transform: "translate(-50px)" }}
            >
              Add
            </Button>
          </div>
        </div>
        <div className="col-md-3">
          <img
            src={require("../../Assets/Performance/mobile-performance.png")}
            alt=""
            width={"100%"}
          />
        </div>
      </div>
      <div className="position-absolute my-3 me-3 bottom-0 end-0 ">
        <div className="d-flex align-items-center gap-3">
          <Link to="/performance/3">
            <img src={require("../../Assets/Performance/Arrow.png")} alt="" />
          </Link>
          <Link to="/performance/5">
            <img
              src={require("../../Assets/Performance/Arrow.png")}
              style={{ rotate: "180deg" }}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
