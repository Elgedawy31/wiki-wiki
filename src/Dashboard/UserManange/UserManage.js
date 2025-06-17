import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import TopBar from "../../Components/TopBar/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUsersVerified } from "../../store/actions/UsersSlice";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import Pagination from "../../Components/Pagination/Pagination";

export default function UserManage() {
  const [changeTable, setChangeTable] = useState(0);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const { allUsers, loading, meta } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (changeTable === 0) {
      dispatch(getAllUsers({ name: value, page: currentPage, limit: itemsPerPage }));
      setSearch(false);
    }
    if (changeTable === 1) {
      dispatch(getUsersVerified({ type: "verified", value, page: currentPage, limit: itemsPerPage }));
      setSearch(false);
    }
    if (changeTable === 2) {
      dispatch(getUsersVerified({ type: "normal", value, page: currentPage, limit: itemsPerPage }));
      setSearch(false);
    }
    if (changeTable === 3) {
      dispatch(getUsersVerified({ type: "warning", value, page: currentPage, limit: itemsPerPage }));
      setSearch(false);
    }
    if (changeTable === 4) {
      dispatch(getUsersVerified({ type: "banned", value, page: currentPage, limit: itemsPerPage }));
      setSearch(false);
    }
  }, [changeTable, search, dispatch, setSearch, value, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Reset to first page when changing table or searching
  useEffect(() => {
    setCurrentPage(1);
  }, [changeTable, value]);

  console.log(allUsers)

  return (
    <>
      <div data-aos="fade-down" data-aos-duration="800">
        <TopBar showSearch={true} setValue={setValue} value={value} setSearch={setSearch} />
      </div>
      <div>
        <div 
          className="mt-3 d-flex align-items-center justify-content-evenly text-white mb-5"
          data-aos="fade-up" 
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3
            onClick={() => setChangeTable(0)}
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
            onClick={() => setChangeTable(1)}
            className={`fw-bold pointer text-grey ${
              changeTable === 1 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="500"
          >
            Verified Users
          </h3>
          <h3
            onClick={() => setChangeTable(2)}
            className={`fw-bold pointer text-grey ${
              changeTable === 2 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="600"
          >
            Normal Users
          </h3>
          <h3
            onClick={() => setChangeTable(3)}
            className={`fw-bold pointer text-grey ${
              changeTable === 3 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="700"
          >
            Warning
          </h3>
          <h3
            onClick={() => setChangeTable(4)}
            className={`fw-bold pointer text-grey ${
              changeTable === 4 && "active-table"
            }`}
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="800"
          >
            Banned
          </h3>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <div data-aos="slide-up" data-aos-duration="800" data-aos-delay="800">
              <Table
                data={allUsers}
                action="Action"
                btn
                Ban
                isUsersTable={true}
                showSpotted={false}
                secondCol="Followers"
                date="Joining Date"
                report=""
                reportedUser=""
              />
            </div>
            {/* Pagination Component */}
            {meta && (
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
            )}
          </div>
        )}
      </div>
    </>
  );
}
