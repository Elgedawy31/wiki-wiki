import Cookie from "cookie-universal";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
export default function RequireBack() {
  const { token } = useSelector((state) => state.auth);
  return token ? window.history.back() : <Outlet />;
}
