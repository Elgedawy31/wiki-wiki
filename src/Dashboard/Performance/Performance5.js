import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import closeIcon from "../../Assets/Performance/Close.svg";
import "./performance.css";

export default function Performance5() {
  return (
    <>
      <div className="d-flex align-items-stretch justify-content-between my-4">
        <div className="d-flex flex-column justify-content-between col-8">
          <div className="mt-5">
            <p className="text-white fw-bold">Add an Gift</p>
            <div className="d-flex align-items-stretch mb-5 col-12 ">
              <input type="text" className="rounded-pill border-0 col-5 py-3" />
              <div className="position-relative col-3 border-0 rounded-20">
                <label htmlFor="add-gift" className="add-gift pointer">
                  +
                </label>
                <input
                  className="col-9 border-0 bg-super-grey d-none"
                  id="add-gift"
                  type="file"
                />
              </div>
              <Button className=" bg-purple-2 border-0 col-2 py-3 rounded-pill fw-bold text-uppercase">
                Add
              </Button>
            </div>
            <div
              className="d-flex p-2  align-items-center justify-content-end gap-4 bg-white rounded-20 w-fit-content"
              style={{ width: "120px", height: "120px" }}
            >
              {/* <p className="mb-0 text-purple-2 fw-bold">Music</p> */}
              <img className="align-self-start" src={closeIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <img
            src={require("../../Assets/Performance/performance5.png")}
            alt=""
            width={"100%"}
          />
        </div>
      </div>
      <div className="position-absolute my-3 me-3 bottom-0 end-0 ">
        <div className="d-flex align-items-center gap-3">
          <Link to="/performance/4">
            <img src={require("../../Assets/Performance/Arrow.png")} alt="" />
          </Link>
          <Link to="/performance/5">
            <img
              src={require("../../Assets/Performance/Arrow 3.png")}
              style={{ rotate: "180deg" }}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
