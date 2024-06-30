import { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Arrow from "../../../Assets/Performance/collapseArrow.png";
import info from "../../../Assets/Performance/info.png";
import redInfo from "../../../Assets/Performance/red-info.png";
import CollapseForm from "./CollapseForm";
import marin from "../../../Assets/Performance/martin.png";
import trash from "../../../Assets/Performance/Trash.png";
import RequireItem from "./RequireItem";
import { Button, Modal, Row, Toast } from "react-bootstrap";
import avatar from "../../../Assets/UserPage/avatar.png";
import { ImgsUrl } from "../../../Api/Api";
import { useDispatch, useSelector } from "react-redux";
import {
  addTarget,
  deleteTargetCat,
  getAllCategories,
  reset,
} from "../../../store/actions/performanceSlice";
function CollapseItem({ category }) {
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const [showCollapse, setShowCollapse] = useState(0);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [error, setError] = useState(false);
  const [activeTarget, setActiveTarget] = useState(null);
  const { targetAdded , targetDeleted } = useSelector((state) => state.performance);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    numberOfLives: "",
    startDate: "",
    numberOfCoins: "",
    endDate: "",
    streamingTime: "",
  });

  useEffect(() => {
    if (targetAdded) {
      dispatch(reset());
      dispatch(getAllCategories());
      setOpenCat(false);
    }
  }, [targetAdded]);
  useEffect(() => {
    if (targetDeleted) {
      dispatch(reset());
      dispatch(getAllCategories());
      setShowCollapse(0)
    }
  }, [targetDeleted]);

  const handleSubmit = () => {
    if (
      formData?.userName &&
      formData.numberOfLives &&
      formData?.startDate &&
      formData?.endDate &&
      formData?.numberOfCoins &&
      formData.streamingTime
    ) {
      dispatch(
        addTarget({
          end_time: formData?.endDate,
          coins: formData?.numberOfCoins,
          lives: formData?.numberOfLives,
          hours: formData?.streamingTime,
          start_time: formData?.startDate,
          category_target_id: category?.id,
          user_id: formData?.userName,
        })
      );
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const handleOpenUserDetails = (value) => {
    setShowCollapse(1);
    setActiveTarget(value);
  };

  console.log(activeTarget);

  const handleDeleteTarget = () =>{
    dispatch(deleteTargetCat(activeTarget?.id))
  }

  function calculateTimePercentage(achievedHours, totalHours) {
    // Helper function to convert time from HH:MM to minutes
    function convertToMinutes(time) {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    }
  
    // Convert both time values to minutes
    const achievedMinutes = convertToMinutes(achievedHours);
    const totalMinutes = convertToMinutes(totalHours);
  
    // Calculate the percentage
    const percentage = (achievedMinutes / totalMinutes) * 100;
  
    // Return the percentage, formatted to two decimal places
    return percentage.toFixed(2);
  }

  return (
    <div className=" mb-5 p-2">
      <div
        style={{
          backgroundColor:
            open || openCat || showCollapse === 1 ? "#D9D9D930" : "transparent",
        }}
        className="collapse-head d-flex align-items-center justify-content-between px-5 `"
      >
        <div className="logo d-flex align-items-center gap-3">
          <img
            src={category?.img ? `${ImgsUrl}/${category?.img}` : avatar}
            alt=""
            className="object-fit-contain rounded"
            style={{ width: "78px", height: "78px" }}
          />
          <h6 className="text-white">{category?.name}</h6>
        </div>
        <h2 style={{ color: "#ffffff50", opacity: open ? 1 : 0 }}>Users</h2>
        <div
          className="collapse-icons d-flex align-items-center justify-content-between "
          style={{ gap: "5rem" }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOpen(false);
              setShowCollapse(0);
              if (open) {
                setTimeout(() => {
                  setOpenCat((prev) => !prev);
                }, 300);
              } else {
                setOpenCat((prev) => !prev);
              }
            }}
          >
            <img
              style={{
                transform: openCat ? "rotate(180deg)" : "rotate(0)",
              }}
              src={Arrow}
              alt=""
            ></img>
          </div>
          <div style={{ cursor: "pointer" }} onClick={() => setShowCollapse(0)}>
            <img
              style={{
                opacity: showCollapse === 1 ? 1 : 0,
              }}
              src={redInfo}
              alt=""
            ></img>
          </div>
          {open ? (
            <h2
              onClick={() => {
                setOpenCat(false);
                setShowCollapse(0);
                if (openCat) {
                  setTimeout(() => {
                    setOpen((prev) => !prev);
                  }, 300);
                } else {
                  setOpen((prev) => !prev);
                }
              }}
              className="text-white"
              style={{ cursor: "pointer" }}
            >
              <button
                onClick={handleSubmit}
                style={{
                  width: "77px",
                  height: "32px",
                  borderRadius: "4px",
                  background:
                    "linear-gradient(180deg, #9057E5 0%, #CC475D 100%)",
                }}
                className="text-white "
              >
                Save
              </button>
            </h2>
          ) : (
            <h2
              onClick={() => {
                setOpenCat(false);
                setShowCollapse(0);
                if (openCat) {
                  setTimeout(() => {
                    setOpen((prev) => !prev);
                  }, 300);
                } else {
                  setOpen((prev) => !prev);
                }
              }}
              className="text-white"
              style={{ cursor: "pointer" }}
            >
              +
            </h2>
          )}
        </div>
      </div>
      {showCollapse === 0 && (
        <Collapse in={open}>
          <div
            style={{
              backgroundColor: open ? "#D9D9D920" : "transparent",
            }}
            className="py-3 px-4 collapse-content"
          >
            <CollapseForm formData={formData} setFormData={setFormData} />
          </div>
        </Collapse>
      )}
      {showCollapse === 0 && (
        <Collapse in={openCat}>
          <div
            style={{
              backgroundColor: openCat ? "#D9D9D920" : "transparent",
            }}
            className="py-3 px-4 collapse-content"
          >
            {/* <CollapseForm /> */}
            <div
              className="d-flex align-items-center  gap-4"
              style={{ flexWrap: "wrap" }}
            >
              {category?.targets?.length > 0 ? (
                category?.targets.map((ele) => (
                  <div
                    className="cat-user d-flex align-items-center gap-2 justify-content-center mb-4 pointer"
                    onClick={() => handleOpenUserDetails(ele)}
                  >
                    {ele?.user.img ? (
                      <img
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          objectFit: "contain",
                        }}
                        src={`${ImgsUrl}/${ele?.user.img}`}
                      ></img>
                    ) : (
                      <div
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "50%",
                          backgroundColor: "#d9d9d9",
                        }}
                        src={`${ImgsUrl}/${ele?.user.img}`}
                      ></div>
                    )}
                    <h4 className="text-white m-0">
                      {ele?.user?.name || "Unknown"}
                    </h4>
                  </div>
                ))
              ) : (
                <h1 className="text-white my-5 text-center w-100">
                  {" "}
                  No Users Here
                </h1>
              )}
            </div>
          </div>
        </Collapse>
      )}
      {showCollapse === 1 && activeTarget && (
        <Collapse in={showCollapse === 1}>
          <div
            style={{
              backgroundColor: showCollapse === 1 ? "#D9D9D920" : "transparent",
            }}
            className="py-3 px-4 collapse-content position-relative"
          >
            <div
              onClick={() => setOpenDeleteModal(true)}
              className="position-absolute d-flex gap-1  align-items-center justify-content-center"
              style={{ right: "32px", top: "16px", cursor: "pointer" }}
            >
              <h6 style={{ color: "red", marginBottom: "0" }} >Delete</h6>
              <img src={trash} alt="" />
            </div>
            <div className="d-flex gap-2 mb-4 flex-column align-items-center justify-content-center">
              {activeTarget?.user?.img ? (
                <img height='50px' src={`${ImgsUrl}/${activeTarget?.user?.img}`} alt="" />
              ) : (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#d9d9d9",
                  }}
                ></div>
              )}
              <h6 className="text-white">
                {activeTarget?.user?.name || "Unknown"}{" "}
              </h6>
            </div>

            <div>
              <RequireItem
                percent={(activeTarget?.achieved_lives /activeTarget?.lives) * 100}
                showCheck
                isCompleted={activeTarget?.achieved_lives === activeTarget?.lives}
                firstText="Number Of Lives"
                mainNum={activeTarget?.lives ||0}
                secNum={activeTarget?.achieved_lives ||0}
                secondText="REQUIRED Number of lives"
              />
              <RequireItem
                percent={calculateTimePercentage(activeTarget?.achieved_hours, activeTarget?.hours)}
                firstText="Time Consumed"
                isCompleted={activeTarget?.achieved_hours === activeTarget?.hours}
                mainNum={activeTarget?.hours ||0}
                secNum={activeTarget?.achieved_hours ||0}
                secondText="REQUIRED Time Consumed"
              />
              <RequireItem
                percent={(activeTarget?.achieved_coins /activeTarget?.coins) * 100}
                showCheck
                isCompleted={activeTarget?.achieved_coins === activeTarget?.coins}
                mainNum={activeTarget?.coins ||0}
                secNum={activeTarget?.achieved_coins ||0}
                firstText="Coins Collected"
                secondText="REQUIRED Coins Collected"
              />
            </div>
          </div>
        </Collapse>
      )}

      <Modal
        centered
        show={openDeleteModal}
        className="p-5"
        onHide={() => setOpenDeleteModal(false)}
      >
        <Modal.Body
          className="rounded d-flex align-items-center justify-content-center gap-4 flex-column"
          style={{ background: "#000000" }}
        >
          <h5 className="text-white text-center">
            Are you sure you want to delete this Target ?
          </h5>
          <div className="d-flex gap-2  flex-column align-items-center justify-content-center">
          {activeTarget?.user?.img ? (
                <img height='50px' src={`${ImgsUrl}/${activeTarget?.user?.img}`} alt="" />
              ) : (
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#d9d9d9",
                  }}
                ></div>
              )}
            <h6 className="text-white">{activeTarget?.user?.name} </h6>
          </div>

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
              onClick={() => handleDeleteTarget()}
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
              onClick={() => setOpenDeleteModal(false)}
            >
              No
            </Button>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CollapseItem;
