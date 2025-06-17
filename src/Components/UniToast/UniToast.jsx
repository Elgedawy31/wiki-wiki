import { useEffect } from "react";
import Toast from "react-bootstrap/Toast";
import { useDispatch } from "react-redux";

function UniToast({ setOpen, open, title, message, reset = () => {} }) {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
      // Check if reset is a function that returns an action (action creator) or just a regular function
      if (typeof reset === 'function') {
        const result = reset();
        // If reset() returns an object with type property, it's a Redux action
        if (result && typeof result === 'object' && result.type) {
          dispatch(result);
        }
        // If reset is just a regular function (like setState), it's already executed above
      }
    }, 2000);
  }, [open, dispatch, reset]);

  return (
    <Toast
      style={{
        backgroundColor: "#333",
        color: "white",
        position: "fixed",
        top: "5%",
        right: "5%",
        zIndex:1111111111111
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
