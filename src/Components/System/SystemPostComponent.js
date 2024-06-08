import { Button } from "react-bootstrap";

export default function SystemPostComponent() {
  return (
    <div className="post py-4 px-5 d-flex align-items-stretch justify-content-between my-5 mx-4">
      <div className="col-7 d-flex flex-column justify-content-between mb-2">
        <div>
          <div className="d-flex align-items-center gap-4 mb-5">
            <img
              src={require("../../Assets/System/Ellipse 1.png")}
              alt="writer"
              width={"150px"}
            />
            <div>
              <p className="text-white fs-1 fst-italic">@Football_lover</p>
              <p className="text-grey fs-3">Football_lover@simmmple.com</p>
            </div>
          </div>
          <h6 className="text-white fst-italic fs-1">
            The most satisfying Job #fyp #satisfying #roadmarking
          </h6>
          <div className="d-flex align-items-center my-4">
            <img
              src={require("../../Assets/System/Ellipse 2.png")}
              alt="bander"
            />
            <p className="mb-0 text-white ms-3 fst-italic">
              Roddy Roundicch - The Rou
            </p>
          </div>
          <p className="text-white">Post Date : 25/5/2023</p>
        </div>
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
      <div className="col-3 d-flex justify-content-center">
        <img src={require("../../Assets/System/mobilePost.png")} alt="mobile" />
      </div>
    </div>
  );
}
