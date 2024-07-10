import { Button } from "react-bootstrap";
import "./System.css";
import { useEffect } from "react";
import SystemPostComponent from "../../Components/System/SystemPostComponent";
import TopBar from "../../Components/TopBar/TopBar";
import { useLocation, useNavigate } from "react-router-dom";
export default function SystemPost() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!location?.state?.id) {
      navigate("/dashboard/content-management-system");
    }
  }, [location?.state]);
  return (
    <div>
      <TopBar showSearch={false} />
      <SystemPostComponent data={location?.state} />
    </div>
  );
}
