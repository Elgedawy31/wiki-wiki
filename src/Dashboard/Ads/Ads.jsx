import { useEffect, useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import AdsTable from "./components/AdsTable";
import { getAds } from "../../store/actions/AdsSlice";
import Pagination from "../../Components/Pagination/Pagination";

export default function Ads() {
  const [changeTable, setChangeTable] = useState(0);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const { ads, meta, loading } = useSelector((state) => state.ads);
  const dispatch = useDispatch();

  const getAdsType = () => {
    const types = ["all", "active", "pending", "refused", "finished"];
    return types[changeTable];
  };

  const fetchAds = (page = currentPage) => {
    const type = getAdsType();
    dispatch(getAds({ type, page, limit: itemsPerPage }));
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when changing table type
    fetchAds(1);
  }, [changeTable]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchAds(page);
  };

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="800">
        <TopBar setValue={setValue} value={value} setSearch={setSearch} />
      </div>
      <div>
        <div 
          className="mt-3 d-flex align-items-center justify-content-evenly text-white mb-5"
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3
            onClick={() => {
              setChangeTable(0);
              setCurrentPage(1);
            }}
            className={`fw-bold pointer text-grey ${
              changeTable === 0 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="400"
          >
            All
          </h3>
          <h3
            onClick={() => {
              setChangeTable(1);
              setCurrentPage(1);
            }}
            className={`fw-bold pointer text-grey ${
              changeTable === 1 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            Active Ads
          </h3>
          <h3
            onClick={() => {
              setChangeTable(2);
              setCurrentPage(1);
            }}
            className={`fw-bold pointer text-grey ${
              changeTable === 2 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            Pending Ads
          </h3>
          <h3
            onClick={() => {
              setChangeTable(3);
              setCurrentPage(1);
            }}
            className={`fw-bold pointer text-grey ${
              changeTable === 3 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="700"
          >
            Refused Ads
          </h3>
          <h3
            onClick={() => {
              setChangeTable(4);
              setCurrentPage(1);
            }}
            className={`fw-bold pointer text-grey ${
              changeTable === 4 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="800"
          >
            Finished Ads
          </h3>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div data-aos="slide-up" data-aos-duration="800" data-aos-delay="800">
              <AdsTable data={ads} action="Action" />
            </div>
            <div 
              data-aos="fade-up" 
              data-aos-duration="600"
              data-aos-delay="1000"
            >
              <Pagination 
                meta={meta}
                onPageChange={handlePageChange}
                loading={loading}
                className="mt-4"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
