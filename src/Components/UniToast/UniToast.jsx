import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";

function UniToast({ setOpen, open, title, message }) {
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, [open]);

  return (
    <Toast  style={{ backgroundColor: "#333", color: "white" }}>
      <Toast.Header closeButton style={{ background: "#555", color: "white" }}>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default UniToast;
