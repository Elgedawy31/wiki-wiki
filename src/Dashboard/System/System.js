import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import SecondTopBar from "../../Components/TopBar/SecondTopBar";
import SearchURL from "../../Components/Search/SearchURL";
import Pagination from "../../Components/Pagination/Pagination";
import { Axios } from "../../Api/axios";
import {baseURL } from "../../Api/Api";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

export default function System() {
  const [changeTable, setChangeTable] = useState(0);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const getContent = async () => {
      try {
        if (changeTable === 0 || changeTable === 1 || changeTable === 2) {
          setLoading(true);
          const res = await Axios.get(
            `${baseURL}/Admin-Contents?type=${
              changeTable === 0 ? "spoted" : changeTable === 1 ? "reported" : changeTable === 2 && 'requested' 
            }&page=${currentPage}&limit=10`,
            {
              headers: {
                Host: "<calculated when request is sent>",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (res?.data) {
            setData(res.data?.data);
            setMeta(res.data?.meta);
            setLoading(false);
          }
        }
      } catch {
        setLoading(false);
        // console.log("dosent wwork");
      }
    };

    getContent();
  }, [changeTable, currentPage]);

  // Reset to first page when changing table type
  useEffect(() => {
    setCurrentPage(1);
  }, [changeTable]);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondTopBar
            title="Content Management System"
            img={require("../../Assets/TopBar/Laptop.png")}
          />
          <div className="mt-3 mb-5 d-flex align-items-center justify-content-evenly text-white mb-5">
            <h3
              onClick={() => setChangeTable(0)}
              className={`fw-bold pointer text-grey ${
                changeTable === 0 && "active-table"
              }`}
            >
              Spotted
            </h3>
            <h3
              onClick={() => setChangeTable(1)}
              className={`fw-bold pointer text-grey ${
                changeTable === 1 && "active-table"
              }`}
            >
              Reported by users
            </h3>
            <h3
              onClick={() => setChangeTable(2)}
              className={`fw-bold pointer text-grey ${
                changeTable === 2 && "active-table"
              }`}
            >
              Requested Review
            </h3>
            <h3
              onClick={() => setChangeTable(3)}
              className={`fw-bold pointer text-grey ${
                changeTable === 3 && "active-table"
              }`}
            >
              Pick a post
            </h3>
          </div>
          <div>
            {changeTable === 0 ? (
              <Table
                isContentManagement={true}
                data={data}
                action="View"
                path="1"
                secondCol="Post ID"
                date="Date"
                report=""
                reportedUser=""
              />
            ) : changeTable === 1 ? (
              <Table
                isContentManagement={true}
                data={data}
                action="View"
                path="1"
                secondCol="Post Discerption"
                date="Date"
                report="Report"
                reportedUser="Reported User"
              />
            ) : changeTable === 2 ? (
              <Table
                isContentManagement={true}
                data={data}
                action="View"
                path="1"
                secondCol="Post ID"
                date="Date"
                report=""
                reportedUser=""
              />
            ) : (
              <SearchURL />
            )}
            
            {/* Pagination Component - Only show for tables with data */}
            {(changeTable === 0 || changeTable === 1 || changeTable === 2) && meta && (
              <div className="mt-4">
                <Pagination
                  meta={meta}
                  onPageChange={handlePageChange}
                  loading={loading}
                />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
