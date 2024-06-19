import { useEffect, useState } from "react";
import Table from "../../Components/Table/Table";
import SecondTopBar from "../../Components/TopBar/SecondTopBar";
import SearchURL from "../../Components/Search/SearchURL";
import { Axios } from "../../Api/axios";
import { GetReported, GetSpotted, baseURL } from "../../Api/Api";
import { useSelector } from "react-redux";

export default function System() {
  const [changeTable, setChangeTable] = useState(0);
  const [spottedData, setSpottedData] = useState([]);
  const [reportData, setReportData] = useState([]);
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await Axios.get(
          `https://ahmedroyale.com/api/Admin-Content-view/reported`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReportData(res.data?.data);
      } catch {
        // console.log("dosent wwork");
      }
    };

    getContent();
  }, []);
  console.log(reportData?.data);
  return (
    <>
      <SecondTopBar title='Content Management System' img={require("../../Assets/TopBar/Laptop.png")} />
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
          Pick a post
        </h3>
      </div>
      {changeTable === 0 ? (
        <Table
          data={spottedData}
          action="View"
          path="1"
          secondCol="Post ID"
          date="Date"
          report=""
          reportedUser=""
        />
      ) : changeTable === 1 ? (
        <Table
          data={reportData}
          action="View"
          path="1"
          secondCol="Post Discerption"
          date="Date"
          report="Report"
          reportedUser="Reported User"
        />
      ) : (
        <SearchURL />
      )}
    </>
  );
}
