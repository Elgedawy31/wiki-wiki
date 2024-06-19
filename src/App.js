import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import System from "./Dashboard/System/System";
import SystemPost from "./Dashboard/System/SystemPost";
import SystemReported from "./Dashboard/System/SystemReported";
import Performance from "./Dashboard/Performance/Performance";
import Performance2 from "./Dashboard/Performance/Perfomance2";
import UserManage from "./Dashboard/UserManange/UserManage";
import UserPage from "./Dashboard/UserManange/UserPage";
import Performance3 from "./Dashboard/Performance/Performance3";
import Performance4 from "./Dashboard/Performance/Performance4";
import Performance5 from "./Dashboard/Performance/Performance5";
import Balance from "./Dashboard/Balance/Balance";
import Login from "./Dashboard/Auth/Login";
import AddUser from "./Dashboard/Add User/AddUser";
import BalanceUser from "./Dashboard/Balance/BalanceUser";
import Notfication from "./Dashboard/Notfication/Notfication";
import RequireAuth from "./Dashboard/Auth/RequireAuth";
import Landing from "./Website/Landing";
import Ads from "./Dashboard/Ads/Ads";
import SingleAds from "./Dashboard/SingleAds/SingleAds";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route element={<RequireBack />}> */}
          <Route path="/login" element={<Login />} />
        {/* </Route> */}
        <Route element={<RequireAuth />}>
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/home" element={<Home />} />
          <Route
            path="/dashboard/content-management-system"
            element={<System />}
          />
          <Route path="/dashboard/performance" element={<Performance />} />
          <Route path="/dashboard/performance/2" element={<Performance2 />} />
          <Route path="/dashboard/performance/3" element={<Performance3 />} />
          <Route path="/dashboard/performance/4" element={<Performance4 />} />
          <Route path="/dashboard/performance/5" element={<Performance5 />} />
          <Route
            path="/dashboard/content-management-system/1"
            element={<SystemPost />}
          />
          <Route
            path="/dashboard/content-management-system/2"
            element={<SystemReported />}
          />
          <Route path="/dashboard/user-management" element={<UserManage />} />
          <Route path="/dashboard/user-management/:id" element={<UserPage />} />
          <Route path="/dashboard/balance" element={<Balance />} />
          <Route path="/dashboard/balance/:id" element={<BalanceUser />} />
          <Route path="/dashboard/notfication/" element={<Notfication />} />
          <Route path="/dashboard/ads/" element={<Ads />} />
          <Route path="/dashboard/ads/:id" element={<SingleAds />} />
        </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
