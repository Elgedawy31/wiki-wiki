import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import UniToast from "../../Components/UniToast/UniToast";
import { AddNotification, reset } from "../../store/actions/NotificationSlice";

export default function Notfication() {
  const { error, notificationSent, loading } = useSelector(
    (state) => state.notifications
  );
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (error) {
      setOpen(true);

    }
  }, [error]);
  useEffect(() => {
    if (notificationSent) {
      setOpen(true);
    }
  }, [notificationSent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddNotification({ body, title }));
  };

  return (
    <>
      {open && notificationSent && (
        <UniToast
          open={open}
          reset={reset}
          setOpen={setOpen}
          title="Notification"
          message="Notification Sent !"
        />
      )}
      {open && error && (
        <UniToast
          open={open}
          setOpen={setOpen}
          title="Notification Error"
          message={error}
        />
      )}
      <div className="text-white">
        <div className="d-flex gap-3">
          <h1 className="m-0 text-uppercase">notification settings</h1>
          <img src={require("../../Assets/Notfication/Notef..png")} alt="" />
        </div>
        <div className="d-flex align-items-end justify-content-between mt-5">
          <Form
            onSubmit={handleSubmit}
            className="col-7 d-flex aling-items-center justify-content-between flex-wrap"
          >
            <Form.Group controlId="title" className="mb-3 col-lg-7 col-12 ">
              <Form.Label className="text-uppercase">
                Notification Title
              </Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                required
                type="text"
                className="bg-super-grey"
              />
            </Form.Group>
            <Form.Group controlId="title" className="mb-3 col-lg-7 col-12 ">
              <Form.Label className="text-uppercase">
                Notification Description
              </Form.Label>
              <Form.Control
                onChange={(e) => setBody(e.target.value)}
                required
                as="textarea"
                rows="7"
                className="bg-super-grey"
              />
            </Form.Group>
            <div className="col-4"></div>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label className="text-uppercase">
                Notification PHOTO
              </Form.Label>
              <div className="position-relative">
                <img
                  src={photo || require("../../Assets/Notfication/box.png")}
                  alt="Notification"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                {!photo && (
                  <h1
                    onClick={() => document.getElementById("fileInput").click()}
                    style={{ cursor: "pointer" }}
                    className="position-absolute top-50 start-50 translate-middle m-0"
                  >
                    +
                  </h1>
                )}
                {photo && (
                  <h1
                    onClick={() => setPhoto(null)}
                    style={{ cursor: "pointer" }}
                    className="position-absolute top-50 start-50 translate-middle m-0 text-danger"
                  >
                    -
                  </h1>
                )}
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
            </Form.Group>
            <div className="col-6 mt-auto">
              <Button
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading && "not-allowed",
                }}
                type="submit"
                className="bg-purple-2 border-0 px-4 py-2"
                controlId="title"
              >
                Done
              </Button>
            </div>
          </Form>
          <div>
            <img src={require("../../Assets/Notfication/mobile.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
