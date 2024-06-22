import { Link } from "react-router-dom";
import star1 from "../../Assets/Performance/Star 1.svg";
import star2 from "../../Assets/Performance/Star 2.svg";
import star3 from "../../Assets/Performance/Star 3.svg";

export default function Performance3() {
  return (
    <div style={{width:'90%'}} className="mx-auto">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-12 flex-wrap d-flex justify-content-between align-items-center">
          <div className="col-md-5 col-12 bg-black-primary p-3 py-5">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="text-white fs-5 mb-0">The Most </p>
                <p className="text-white fs-6 mb-0">
                  Searched Tags in WIKI WIKI
                </p>
              </div>
              <img
                src={require("../../Assets/Performance/wiki.png")}
                alt="writer"
                width={"100px"}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-5">
              <div>
                <div className="d-flex gap-3">
                  <img src={star1} alt="" />
                  <p className="mb-0 text-white">Top search</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <img src={star2} alt="" />
                  <p className="mb-0 text-white">Top search</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <img src={star3} alt="" />
                  <p className="mb-0 text-white">Top search</p>
                </div>
                <div className="d-flex gap-3 justify-content-end mt-3">
                  <p className="mb-0 text-white ms-3">Top search</p>
                </div>
                <div className="d-flex justify-content-end gap-3 mt-3">
                  <p className="mb-0 text-white ms-3">Top search</p>
                </div>
              </div>
              <div dir="rtl">
                <p className="mb-0 text-gold">442,250</p>
                <p className="mb-0 text-selver mt-3">112,540</p>
                <p className="mb-0 text-bronz mt-3">100,211</p>
                <p className="mb-0 text-white mt-3">99,222</p>
                <p className="mb-0 text-white mt-3">50,112</p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 bg-black-primary p-3 py-5">
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="text-white fs-5 mb-0">The Most </p>
                <p className="text-white fs-6 mb-0">Searched Tags on Web</p>
              </div>
              <img
                src={require("../../Assets/Performance/Website.png")}
                alt="writer"
                width={"100px"}
              />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-5">
              <div>
                <div className="d-flex gap-3">
                  <img src={star1} alt="" />
                  <p className="mb-0 text-white">Top search</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <img src={star2} alt="" />
                  <p className="mb-0 text-white">Top search</p>
                </div>
                <div className="d-flex gap-3 mt-3">
                  <img src={star3} alt="" />
                  <p className="mb-0 text-white">Top search</p>
                </div>
                <div className="d-flex gap-3 justify-content-end mt-3">
                  <p className="mb-0 text-white ms-3">Top search</p>
                </div>
                <div className="d-flex justify-content-end gap-3 mt-3">
                  <p className="mb-0 text-white ms-3">Top search</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="col-12 bg-black-primary position-relative">
              <img
                src={require("../../Assets/Performance/Trend.png")}
                className="position-absolute end-0 top-50 "
                style={{ transform: "translateY(-50%)" }}
                alt=""
              />
              <div className=" p-3">
                <div className="d-flex align-items-center justify-content-center">
                  <h5 className="mb-0 justify-content-center text-white">
                    TREND LIST
                  </h5>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-5">
                  <div>
                    <div className="d-flex gap-3">
                      <p className="mb-0 text-white ms-4">1. POST LINK</p>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                      <p className="mb-0 text-white ms-4">2. POST LINK</p>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                      <p className="mb-0 text-white ms-4">3. POST LINK</p>
                    </div>
                    <div className="d-flex gap-3  mt-3">
                      <p className="mb-0 text-white ms-4">4. POST LINK</p>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                      <p className="mb-0 text-white ms-4">5. POST LINK</p>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                      <p className="mb-0 text-white ms-4">6. POST LINK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute my-3 me-3 bottom-0 end-0 ">
        <div className="d-flex align-items-center gap-3">
          <Link to="/performance/2">
            <img src={require("../../Assets/Performance/Arrow.png")} alt="" />
          </Link>
          <Link to="/performance/4">
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
