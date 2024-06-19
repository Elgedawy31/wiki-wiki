import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import { useDispatch } from "react-redux";

function UniToast({ setOpen, open, title, message, reset = () => {} }) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      dispatch(reset());
    }, 2000);
  }, [open]);

  return (
    <Toast
      style={{
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: "5%",
        right: "5%",
      }}
    >
      <Toast.Header closeButton style={{ background: "#555", color: "white" }}>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
}

export default UniToast;
