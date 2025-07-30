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
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <SystemPostComponent data={location?.state} />
      </div>
    </div>
  );
}
