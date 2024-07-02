import { Link, useNavigate } from "react-router-dom";
import Card from "../../Components/Card Performance/Card";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { useEffect, useState } from "react";
import {
  deleteFeedBack,
  getAllFeedBacks,
  reset,
} from "../../store/actions/FeefBackSlice";
import { Button, Modal, Row } from "react-bootstrap";
import UniToast from "../../Components/UniToast/UniToast";
import Months from "../../Components/Statics/Months";
import AreaChart from "../../Components/charts/AreaChart";
import dayjs from "dayjs";

export default function Performance2() {
  const { error, loading, deleted, feedbacks } = useSelector(
    (state) => state.feedback
  );
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFeedBacks());
  }, [dispatch]);

  const handleDelete = () => {
    dispatch(deleteFeedBack(activeId));
    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      setOpenError(true);
    }
  }, [error]);
  useEffect(() => {
    if (deleted) {
      setOpenError(true);
    }
  }, [deleted]);

  // console.log(feedbacks)
  return (
    <>
      {openError && (
        <UniToast
          open={openError}
          reset={reset}
          setOpen={setOpenError}
          title="FeedBack Error"
          message={error}
        />
      )}
      {openError && deleted && (
        <UniToast
          open={openError}
          reset={reset}
          setOpen={setOpenError}
          title="FeedBack Deleted"
          message="FeedBack Deleted Successfully"
        />
      )}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ width: "90%" }} className="mx-auto">
          <div className="bg-seconder-grad rounded-20 performance py-4 px-5 mt-4">
            <h3 className="text-white my-4">Feedbacks</h3>
            <div>
              <>
                {feedbacks?.data?.length > 0 ? (
                  <>
                    {feedbacks?.data?.map((ele) => (
                      <Card
                        setActiveId={setActiveId}
                        setOpen={setOpen}
                        data={ele}
                      />
                    ))}
                  </>
                ) : (
                  <h1 className="my-5 text-center text-white">No Feedbacks Yet</h1>
                )}
              </>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="bg-seconder-grad-performance rounded-20 py-md-4 py-2 px-md-4 px-2  text-white h-100">
              <div className="d-flex align-items-center justify-content-between">
                <div className="flex-grow-1">
                  <h4>Reports Analyses </h4>
                  <p>
                    <span className="text-custom-delete"> (+5) more </span>
                    <span className="text-grey"> Than the last month</span>
                  </p>
                </div>
                <div className="p-2 d-flex align-item-center gap-5">
                  <div className="d-flex align-items-center gap-2 pointer" onClick={() => navigate('/dashboard/content-management-system')}>
                    <img
                      src={require("../../Assets/Performance/lab.png")}
                      alt="lab"
                      width={"25px"}
                    />
                    <p  className="mb-0 text-seconde-color">
                      Open Content Management System
                    </p>
                  </div>
                  <p className="mb-0 text-white fw-bold">{dayjs().format('YYYY')}</p>
                </div>
              </div>
              {/* {feedbacks?.active_users && (
              <AreaChart
                data={feedbacks?.active_users?.data}
                labels={feedbacks?.active_users?.labels}
              /> )} */}
            </div>
          </div>
          <div className="position-absolute my-3 me-3 bottom-0 end-0 ">
            <div className="d-flex align-items-center gap-3">
              <Link to="/performance/">
                <img
                  src={require("../../Assets/Performance/Arrow.png")}
                  alt=""
                />
              </Link>
              <Link to="/performance/3">
                <img
                  src={require("../../Assets/Performance/Arrow.png")}
                  style={{ rotate: "180deg" }}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      <Modal centered show={open} className="p-5" onHide={() => setOpen(false)}>
        <Modal.Body
          className="rounded d-flex align-items-center justify-content-center gap-4 flex-column"
          style={{ background: "#000000" }}
        >
          <h5 className="text-white text-center">
            Are you sure you want to delete this FeedBack ?
          </h5>
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
              onClick={() => handleDelete()}
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
              onClick={() => setOpen(false)}
            >
              No
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
