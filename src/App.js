import { Route, Routes } from "react-router-dom";
import Home from "./Dashboard/Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import System from "./Dashboard/System/System";
import SystemPost from "./Dashboard/System/SystemPost";
import SystemReported from "./Dashboard/System/SystemReported";
import Performance from "./Dashboard/Performance/Performance";
import UserManage from "./Dashboard/UserManange/UserManage";
import UserPage from "./Dashboard/UserManange/UserPage";
import Balance from "./Dashboard/Balance/Balance";
import Login from "./Dashboard/Auth/Login";
import AddUser from "./Dashboard/Add User/AddUser";
import BalanceUser from "./Dashboard/Balance/BalanceUser";
import Notfication from "./Dashboard/Notfication/Notfication";
import RequireAuth from "./Dashboard/Auth/RequireAuth";
import Landing from "./Website/Landing";
import Ads from "./Dashboard/Ads/Ads";
import SingleAds from "./Dashboard/SingleAds/SingleAds";
import NewSection from "./Dashboard/NewSection/NewSection";
import NotFound from "./Dashboard/NotFound/NotFound";
import Management from "./Management/Management";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { profile } from "./store/actions/ProfileSlice";

function App() {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(profile())
  } , [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route element={<RequireBack />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/new-sec" element={<NewSection />} />
        {/* </Route> */}
        <Route element={<RequireAuth />}>
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/management" element={<Management />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/home" element={<Home />} />
            <Route
              path="/dashboard/content-management-system"
              element={<System />}
            />
            <Route path="/dashboard/performance" element={<Performance />} />
            <Route
              path="/dashboard/content-management-system/post-details"
              element={<SystemPost />}
            />
            <Route
              path="/dashboard/content-management-system/:id"
              element={<SystemReported />}
            />
            <Route path="/dashboard/user-management" element={<UserManage />} />
            <Route
              path="/dashboard/user-management/:id"
              element={<UserPage />}
            />
            <Route path="/dashboard/balance" element={<Balance />} />
            <Route path="/dashboard/balance/:id" element={<BalanceUser />} />
            <Route path="/dashboard/notfication/" element={<Notfication />} />
            <Route path="/dashboard/ads/" element={<Ads />} />
            <Route path="/dashboard/ads/:id" element={<SingleAds />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
