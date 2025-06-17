import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { links } from "./NavLinks";
import Cookie from "cookie-universal";
import "./SideBar.css";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeToken } from "../../store/actions/AuthSlice";
export default function SideBar() {
  const cookie = Cookie();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    cookie.remove("token");
    dispatch(removeToken());
    navigate("/");
  };
  const location = useLocation();
  console.log();
  return (
    <div className="sidebar py-5 px-4 h-100">
      <div className="d-flex align-items-center flex-column mb-5">
        <img src={require("../../Assets/SideBar/logo.png")} alt="logo" />
        <p className="text-white text-center">wiki wiki</p>
      </div>
      <div className="d-flex align-items-center flex-column justify-content-center gap-4">
        {links.map((item, index) => (
          <NavLink key={index} to={item.url} className={"link p-2"}>
            {item.icon(location.pathname.includes(item.url) ? "white" : "rgb(158, 158, 158)")}
          </NavLink>
        ))}
      </div>
      <div
        className="mt-5 d-flex align-items-cneter justify-content-center flex-column "
        style={{ textAlign: "center" }}
      >
        {/* <Link to={"/add-user"} className="text-white text-decoration-none">
          ADD USER
        </Link> */}
        <Button
          className="bg-transparent border-0 text-red"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
