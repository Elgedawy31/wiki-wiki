import { Button, Modal, Row } from "react-bootstrap";
import { ImgsUrl } from "../../Api/Api";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContent, reset } from "../../store/actions/ManagementSlice";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import UniToast from "../UniToast/UniToast";

export default function SystemPostComponent({ data }) {
  const [openForDelete, setopenForDelete] = useState(false);
  const { deleted , error, loading } = useSelector((state) => state.management);
  const [reason, setReason] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBanned = () => {
    dispatch(deleteContent({ id: data?.id, reason }));
  };

  useEffect(() => {
    if (deleted) {
      dispatch(reset());
      navigate("/dashboard/content-management-system");
    }
  }, [deleted]);

  return (
    <>
      {error && (
        <UniToast
          open={true}
          reset={reset}
          setOpen={() => {}}
          title="Delete Post Error"
          message={error}
        />
      )}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="post py-4 px-5 d-flex align-items-stretch justify-content-between my-5 mx-4">
          <div className="col-7 d-flex flex-column justify-content-between mb-2">
            <div>
              <div className="d-flex align-items-center gap-4 mb-5">
                <img
                  src={
                    data?.user?.img
                      ? `${ImgsUrl}/${data?.user?.img}`
                      : "../../Assets/System/Ellipse 1.png"
                  }
                  alt="user"
                  // onError={(e) => console.log('error')}
                  width={"150px"}
                />
                <div>
                  <p className="text-white fs-1 fst-italic">
                    {data?.user?.name || "UNKNOWN"}
                  </p>
                  <p className="text-grey fs-3">
                    {data?.user?.nick_name || "UNKNOWN"}
                  </p>
                </div>
              </div>
              <h6 className="text-white fst-italic fs-1">
                {data?.caption || ".."}
              </h6>
              <div className="d-flex align-items-center my-4">
                {data?.artist_image && (
                  <img src={require(data?.artist_image)} alt="bander" />
                )}
                <p className="mb-0 text-white ms-3 fst-italic">
                  {data?.artist_name}
                </p>
              </div>
              <p className="text-white">
                Post Date : {dayjs(data?.created_at).format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-5">
              <Button
                onClick={() => setopenForDelete(true)}
                className="bg-delete text-white rounded py-3 col-3 border-0"
              >
                Delete
              </Button>
              <Button className="bg-warning text-white rounded py-3 col-3 border-0">
                Warning
              </Button>
              <Button className="bg-dark text-white rounded py-3 col-3 border-0">
                Ban
              </Button>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <img
              src={require("../../Assets/System/mobilePost.png")}
              alt="mobile"
            />
          </div>

          <Modal
            centered
            show={openForDelete}
            className="p-5"
            onHide={() => setopenForDelete(false)}
          >
            <Modal.Body
              className="rounded d-flex align-items-center justify-content-center gap-4 flex-column"
              style={{ background: "#000000" }}
            >
              <h5 className="text-white text-center">
                Please write the reason to delete this
              </h5>

              <input
                value={reason}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                style={{
                  background: "white",
                  border: "1px solid white",
                  width: "90%",
                }}
                className="rounded  px-4 py-2"
                type="text"
              ></input>

              <Row className="gap-5">
                <Button
                  style={{
                    width: "fit-content",
                    borderRadius: "20px",
                    backgroundColor: "#9057E5",
                    border: 0,
                    width: "172px",
                    height: "50px",
                  }}
                  variant="secondary"
                  className="text-white"
                  onClick={() => handleBanned()}
                >
                  Yes
                </Button>
                <Button
                  style={{
                    width: "fit-content",
                    borderRadius: "20px",
                    backgroundColor: "#FC155C",
                    border: 0,
                    width: "172px",
                    height: "50px",
                  }}
                  variant="secondary"
                  className="text-white"
                  onClick={() => setopenForDelete(false)}
                >
                  No
                </Button>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}
