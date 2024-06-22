import { Link } from "react-router-dom";
import Card from "../../Components/Card Performance/Card";

export default function Performance2() {
  return (
    <div style={{width:'90%'}} className="mx-auto">
      <div className="bg-seconder-grad rounded-20 performance py-4 px-5 mt-4">
        <h3 className="text-white my-4">Feedbacks</h3>
        <div>
          <Card img="JPG" />
          <Card img="PNG" />
          <Card />
        </div>
      </div>
      <div className="col-12 mt-4">
        <div className="bg-seconder-grad-performance rounded-20 py-md-4 py-2 px-md-4 px-2  text-white h-100">
          <div className="d-flex align-items-center justify-content-between">
            <div className="flex-grow-1">
              <h4>Reports Analyses </h4>
              <p>
                <span className="text-custom-delete"> (+5) more </span>
                <span className="text-grey"> Than the last month</span>
              </p>
            </div>
            <div className="p-2 d-flex align-item-center gap-5">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={require("../../Assets/Performance/lab.png")}
                  alt="lab"
                  width={"25px"}
                />
                <p className="mb-0 text-seconde-color">
                  Open Content Management System
                </p>
              </div>
              <p className="mb-0 text-white fw-bold">2023</p>
            </div>
          </div>
          <div className="d-flex justify-content-end flex-column p-3 rounded-20 position-relative overflow-hidden">
            <div className="position-absolute start-0 w-100 overflow-hidden">
              <img
                style={{ margin: "0 0 35px 80px" }}
                width={"100%"}
                src={require("../../Assets/Performance/Group 2.png")}
                alt="lines"
              />
            </div>
            <div className="d-flex flex-column col-12 ">
              <p>500</p>
              <p>400</p>
              <p>300</p>
              <p>200</p>
              <p>100</p>
              <p>0</p>
            </div>
            <div className=" col-12">
              <div
                className="d-flex justify-content-between"
                style={{ padding: "0 80px" }}
              >
                <div className="position-relative">
                  <p>Jan</p>
                </div>
                <div className="position-relative">
                  <p>Feb</p>
                </div>
                <div className="position-relative">
                  <p>Mar</p>
                </div>
                <div className="position-relative">
                  <p>Apr</p>
                </div>
                <div className="position-relative">
                  <p>May</p>
                </div>
                <div className="position-relative">
                  <p>Jun</p>
                </div>
                <div className="position-relative">
                  <p>Jul</p>
                </div>
                <div className="position-relative">
                  <p>Sep</p>
                </div>
                <div className="position-relative">
                  <p>Oct</p>
                </div>
                <div className="position-relative">
                  <p>Nov</p>
                </div>
                <div className="position-relative">
                  <p>Dec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute my-3 me-3 bottom-0 end-0 ">
        <div className="d-flex align-items-center gap-3">
          <Link to="/performance/">
            <img src={require("../../Assets/Performance/Arrow.png")} alt="" />
          </Link>
          <Link to="/performance/3">
            <img
              src={require("../../Assets/Performance/Arrow.png")}
              style={{ rotate: "180deg" }}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
