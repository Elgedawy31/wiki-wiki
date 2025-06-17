/* eslint-disable no-unused-expressions */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function RequireAuth() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
 (token)
  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [navigate]);

  return token && <Outlet />;
}
