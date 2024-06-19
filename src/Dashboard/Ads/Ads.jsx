import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import TopBar from "../../Components/TopBar/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUsersVerified } from "../../store/actions/UsersSlice";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import AdsTable from "./components/AdsTable";
import { getAds } from "../../store/actions/AdsSlice";

export default function Ads() {
  const [changeTable, setChangeTable] = useState(0);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState(false);
  const { ads, loading } = useSelector((state) => state.ads);
  const dispatch = useDispatch();

  useEffect(() => {
    if (changeTable === 0) {
      dispatch(getAds('all'));
    }
  }, [changeTable]);

  console.log(ads)

  return (
    <>
      <TopBar setValue={setValue} value={value} setSearch={setSearch} />
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
            Active Ads
          </h3>
          <h3
            onClick={() => setChangeTable(2)}
            className={`fw-bold pointer text-grey ${
              changeTable === 2 && "active-table"
            }`}
          >
           Pending Ads
          </h3>{" "}
          <h3
            onClick={() => setChangeTable(3)}
            className={`fw-bold pointer text-grey ${
              changeTable === 3 && "active-table"
            }`}
          >
          Refused Ads
          </h3>
          <h3
            onClick={() => setChangeTable(4)}
            className={`fw-bold pointer text-grey ${
              changeTable === 4 && "active-table"
            }`}
          >
            Finished Ads
          </h3>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <AdsTable
              data={ads}
              action="Action"
            />
          </>
        )}
      </div>
    </>
  );
}
