import BarChart from "../charts/BarChart";

export default function Months({ data, labels, mainDetails }) {
  return (
    <div className="col-lg-7  col-12">
      <div className="bg-black-primary py-md-4 py-2 px-md-4 px-2  text-white h-100">
        <div className="d-flex justify-content-end flex-column bg-primary-grad p-3 rounded-20">
          <BarChart data={data} labels={labels} />
        </div>

        <div className="mt-3">
          <h4>Active Users</h4>
          <p>
            <span
              className={`${
                mainDetails?.active_users_compare > 0 && "text-green"
              } ${mainDetails?.active_users_compare < 0 && "text-red"}`}
            >
             ( {(mainDetails?.active_users_compare )|| 0} ) {" "}
            </span>
            <span className="text-grey">than last Month</span>
          </p>

          <div className="d-flex align-items-center justify-content-between ">
            <div className="col-2">
              <div className="d-flex align-items-center gap-2 ">
                <div className="bg-primary-grad rounded">
                  <img
                    width="30px"
                    src={require("../../Assets/Home/Heart Icon.png")}
                    alt="heart"
                  />
                </div>
                <p className="text-grey mb-0">Likes</p>
              </div>
              <p className="m-0 mt-2">{mainDetails?.satisfaction_rate_compare}</p>
              <div className="custom-progress"></div>
            </div>
            <div className="col-2">
              <div className="d-flex align-items-center gap-2 ">
                <div className="bg-primary-grad rounded">
                  <img
                    width="30px"
                    src={require("../../Assets/Home/Share Icon.png")}
                    alt="heart"
                  />
                </div>
                <p className="text-grey mb-0">Shares</p>
              </div>
              <p className="m-0 mt-2">{mainDetails?.total_share ||0}</p>
              <div className="custom-progress"></div>
            </div>
            <div className="col-2">
              <div className="d-flex align-items-center gap-2 ">
                <div className="bg-primary-grad rounded">
                  <img
                    width="30px"
                    src={require("../../Assets/Home/Message Icon.png")}
                    alt="heart"
                  />
                </div>
                <p className="text-grey mb-0">comments</p>
              </div>
              <p className="m-0 mt-2">{mainDetails?.total_comments ||0}</p>
              <div className="custom-progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
