import { Link } from "react-router-dom";
import star1 from "../../Assets/Performance/Star 1.svg";
import star2 from "../../Assets/Performance/Star 2.svg";
import star3 from "../../Assets/Performance/Star 3.svg";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
export default function Performance3({ data, loading }) {
  console.log(data);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ width: "90%" }} className="mx-auto">
          <div className="d-flex align-items-center justify-content-center">
            <div className="col-12 flex-wrap d-flex justify-content-between align-items-center">
           <div className="d-flex align-items-stretch  col-sm-12   justify-content-between">
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
                {data?.search?.length > 0 &&
                  data?.search.map((ele, idx) => (
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <div>
                        <div className="d-flex gap-3">
                          <img
                            style={{ width: "15px" }}
                            src={
                              idx === 0
                                ? star1
                                : idx === 1
                                ? star2
                                : idx === 2
                                ? star3
                                : ""
                            }
                            alt=""
                          />
                          <p className="mb-0 text-white">{ele?.search}</p>
                        </div>
                      </div>
                      <div dir="rtl">
                        <p
                          className={`m-0 ${
                            idx === 0
                              ? "text-gold"
                              : idx === 1
                              ? "text-selver"
                              : idx === 2
                              ? "text-bronz"
                              : "text-white"
                          }`}
                        >
                          {ele?.count}
                        </p>
                      </div>
                    </div>
                  ))}
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
                {data?.web_tag?.length > 0 &&
                  data?.web_tag.map((ele, idx) => (
                    <div className="d-flex align-items-center justify-content-between mt-2">
                      <div>
                        <div className="d-flex gap-3">
                          <img
                            style={{ width: "15px" }}
                            src={
                              idx === 0
                                ? star1
                                : idx === 1
                                ? star2
                                : idx === 2
                                ? star3
                                : ""
                            }
                            alt=""
                          />
                          <p className="mb-0 text-white">{ele?.search}</p>
                        </div>
                      </div>
                      <div dir="rtl">
                        <p
                          className={`m-0 ${
                            idx === 0
                              ? "text-gold"
                              : idx === 1
                              ? "text-selver"
                              : idx === 2
                              ? "text-bronz"
                              : "text-white"
                          }`}
                        >
                          {ele?.count}
                        </p>
                      </div>
                    </div>
                  ))}
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
                        {data?.content?.length > 0 &&
                          data?.content.map((ele, idx) => (
                            <div className="d-flex gap-3 mb-3">
                              <p className="mb-0 text-white ms-4">
                                {idx + 1}.{" "}
                                {ele?.link ? (
                                  <a href={ele?.link}></a>
                                ) : (
                                  "NO LINK "
                                )}
                              </p>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
