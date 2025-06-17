import { Button } from "react-bootstrap";

export default function Statics({homeDetails}) {
  return (
    <div className="position-relative z-1 bg-black-primary  me-lg-3 me-md-2 py-md-4 py-2 px-md-4 px-2  text-white" style={{ minHeight: "100%" }}>
      <div className="" style={{minHeight:'100%'}}>
        <div className="mb-3">
          <h6>Satisfaction Rate</h6>
          <p>From Users</p>
        </div>
        <div className="position-realtive">
          <div className="position-realtive d-flex align-items-center justify-content-center ">
            <img
              src={require("../../Assets/Home/Progress Bar.png")}
              alt="progress"
            />
            <div className="position-absolute  start-50 translate-middle p-3 rounded-circle bg-primary-grad">
              <img
                src={require("../../Assets/Home/tag_faces.png")}
                alt="imoji"
              />
            </div>
          </div>
          <div
            className="bg-primary-grad rounded-40 px-4 py-2"
            style={{ transform: "translateY(-112px)" }}
          >
            <div className="d-flex align-items-start justify-content-between">
              <p>0%</p>
              <h1>95%</h1>
              <p>100%</p>
            </div>
            <h5 className="text-center">Based on likes</h5>
          </div>

          <div className="d-flex align-items-center justify-content-between mt-2">
            <Button className="bg-super-grey border-0 rounded-40">
              Previous year{" "}
            </Button>
            <Button className="bg-primary-grad border-0">Previous year</Button>
            <Button className="bg-super-grey border-0 rounded-40">
              This Year{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
