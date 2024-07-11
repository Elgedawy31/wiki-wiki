import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import TopBar from "../../Components/TopBar/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUsersVerified } from "../../store/actions/UsersSlice";
import { getUserBans } from "../../store/actions/UsersSlice";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

export default function UserManage() {
  const [changeTable, setChangeTable] = useState(0);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const { allUsers, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (changeTable === 0) {
      dispatch(getAllUsers(value));
      setSearch(false);
    }
    if (changeTable === 1) {
      dispatch(getUsersVerified({ type: "verified", value }));
      setSearch(false);
    }
    if (changeTable === 2) {
      dispatch(getUsersVerified({ type: "normal", value }));
      setSearch(false);
    }
    if (changeTable === 3) {
      dispatch(getUsersVerified({ type: "warning", value }));
      setSearch(false);
    }
    if (changeTable === 4) {
      dispatch(getUsersVerified({ type: "banned", value }));
      setSearch(false);
    }
  }, [changeTable, search]);

  console.log(allUsers)

  return (
    <>
      <TopBar showSearch={true} setValue={setValue} value={value} setSearch={setSearch} />
      <div>
        <div className="mt-3  d-flex align-items-center justify-content-evenly text-white mb-5 ">
          <h3
            onClick={() => setChangeTable(0)}
            className={`fw-bold pointer text-grey ${
              changeTable === 0 && "active-table"
            }`}
          >
            All
          </h3>
          <h3
            onClick={() => setChangeTable(1)}
            className={`fw-bold pointer text-grey ${
              changeTable === 1 && "active-table"
            }`}
          >
            Verified Users
          </h3>
          <h3
            onClick={() => setChangeTable(2)}
            className={`fw-bold pointer text-grey ${
              changeTable === 2 && "active-table"
            }`}
          >
            Normal Users
          </h3>{" "}
          <h3
            onClick={() => setChangeTable(3)}
            className={`fw-bold pointer text-grey ${
              changeTable === 3 && "active-table"
            }`}
          >
            Warning
          </h3>
          <h3
            onClick={() => setChangeTable(4)}
            className={`fw-bold pointer text-grey ${
              changeTable === 4 && "active-table"
            }`}
          >
            Banned
          </h3>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}
