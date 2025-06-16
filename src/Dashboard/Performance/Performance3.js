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
                {data?.search?.length > 0 ?
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
                  )) : <p className="text-white h-full text-center" style={{marginTop:'50px'}}>No Data Available</p>}
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
                {data?.web_tag?.length > 0 ?                 data?.web_tag.map((ele, idx) => (
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
                  )) : <p className="text-white h-full text-center" style={{marginTop:'50px'}}>No Data Available</p>}
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
                    <div className="mt-4">
                      {data?.content?.length > 0 ? (
                        data?.content.map((ele, idx) => (
                          <div key={ele?.id || idx} className="mb-4 p-3 border-bottom border-secondary">
                            <div className="d-flex align-items-start justify-content-between">
                              <div className="flex-grow-1">
                                <div className="d-flex align-items-center gap-2 mb-2">
                                  <span className="text-gold fw-bold">#{idx + 1}</span>
                                  <h6 className="text-white mb-0">
                                    {ele?.user?.name || 'Unknown User'} 
                                    <span className="text-hite ms-2">@{ele?.user?.nick_name || 'N/A'}</span>
                                  </h6>
                                  {ele?.user?.page_verified_at && (
                                    <span className="badge bg-primary">Verified</span>
                                  )}
                                </div>
                                
                                <div className="row text-white small mb-2">
                                  <div className="col-md-6">
                                    <p className="mb-1">
                                      <strong>Type:</strong> {ele?.file_type || 'N/A'}
                                    </p>
                                    <p className="mb-1">
                                      <strong>Points:</strong> {ele?.points || 0}
                                    </p>
                                    <p className="mb-1">
                                      <strong>Privacy:</strong> {ele?.account_privacy || 'N/A'}
                                    </p>
                                  </div>
                                  <div className="col-md-6">
                                    <p className="mb-1">
                                      <strong>Followers:</strong> {ele?.user?.followers || 0}
                                    </p>
                                    <p className="mb-1">
                                      <strong>Videos:</strong> {ele?.user?.videos || 0}
                                    </p>
                                    <p className="mb-1">
                                      <strong>Images:</strong> {ele?.user?.images || 0}
                                    </p>
                                  </div>
                                </div>

                                {ele?.analytics && (
                                  <div className="d-flex gap-3 text-white small">
                                    <span><i className="fas fa-eye"></i> {ele.analytics.view || 0} views</span>
                                    <span><i className="fas fa-heart"></i> {ele.analytics.react || 0} likes</span>
                                    <span><i className="fas fa-comment"></i> {ele.analytics.comment || 0} comments</span>
                                    <span><i className="fas fa-share"></i> {ele.analytics.share || 0} shares</span>
                                    <span><i className="fas fa-download"></i> {ele.analytics.download || 0} downloads</span>
                                  </div>
                                )}

                                {ele?.caption && (
                                  <p className="text-white-50 small mt-2 mb-1">
                                    <strong>Caption:</strong> {ele.caption}
                                  </p>
                                )}

                                {ele?.link && (
                                  <p className="mb-1">
                                    <a href={ele.link} target="_blank" rel="noopener noreferrer" className="text-primary small">
                                      View Link
                                    </a>
                                  </p>
                                )}

                                {ele?.created_at && (
                                  <p className="text-muted small mb-0">
                                    Created: {new Date(ele.created_at * 1000).toLocaleDateString()}
                                  </p>
                                )}
                              </div>

                              {ele?.video_img && (
                                <div className="ms-3">
                                  <img 
                                    src={ele.video_img} 
                                    alt="Content thumbnail" 
                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                    className="rounded"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-5">
                          <p className="text-white h5">No Content Data Available</p>
                          <p className="text-muted">There are no trending content items to display at the moment.</p>
                        </div>
                      )}
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
