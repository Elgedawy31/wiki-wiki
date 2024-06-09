import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Arrow from "../../../Assets/Performance/collapseArrow.png";
import info from "../../../Assets/Performance/info.png";
import redInfo from "../../../Assets/Performance/red-info.png";
import CollapseForm from "./CollapseForm";
import marin from "../../../Assets/Performance/martin.png";
import trash from "../../../Assets/Performance/Trash.png";
import RequireItem from "./RequireItem";
import { Button, Modal, Row } from "react-bootstrap";
function CollapseItem({category}) {
  const [open, setOpen] = useState(false);
  const [showCollapse, setShowCollapse] = useState(0);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleChangeInfo = () => {
    if (showCollapse === 0) {
      setShowCollapse(1);
    } else {
      setShowCollapse(0);
    }
  };


  // console.log(category)

  return (
    <div className=" mb-5 p-2">
      <div
        style={{
          backgroundColor: open ? "#D9D9D930" : "transparent",
        }}
        className="collapse-head d-flex align-items-center justify-content-between px-5 `"
      >
        <div className="logo d-flex align-items-center gap-3">
          <span></span>
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
              setOpen((prev) => !prev);
              setShowCollapse(0);
            }}
          >
            <img
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0)",
              }}
              src={Arrow}
              alt=""
            ></img>
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleChangeInfo}>
            <img
              style={{
                opacity: open ? 1 : 0,
              }}
              src={showCollapse === 0 ? info : redInfo}
              alt=""
            ></img>
          </div>
          <h2 className="text-white" style={{ cursor: "pointer" }}>
            +
          </h2>
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
            <CollapseForm />
          </div>
        </Collapse>
      )}
      {showCollapse === 1 && (
        <Collapse in={open}>
          <div
            style={{
              backgroundColor: open ? "#D9D9D920" : "transparent",
            }}
            className="py-3 px-4 collapse-content position-relative"
          >
            <div
              onClick={() => setOpenDeleteModal(true)}
              className="position-absolute d-flex gap-1  align-items-center justify-content-center"
              style={{ right: "32px", top: "16px", cursor: "pointer" }}
            >
              <h6 style={{ color: "red", marginBottom: "0" }}>Delete</h6>
              <img src={trash} alt="" />
            </div>
            <div className="d-flex gap-2 mb-4 flex-column align-items-center justify-content-center">
              <img src={marin} alt="" />
              <h6 className="text-white">Martnilli </h6>
            </div>

            <div>
              <RequireItem
                percent="100%"
                showCheck
                isCompleted
                firstText="Number Of Lives"
                secondText="REQUIRED Number of lives"
              />
              <RequireItem
                percent="67%"
                firstText="Number Of Lives"
                secondText="REQUIRED Number of lives"
              />
              <RequireItem
                percent="100%"
                showCheck
                isCompleted
                firstText="Number Of Lives"
                secondText="REQUIRED Number of lives"
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
            Are you sure you want to delete this User ?
          </h5>
          <div className="d-flex gap-2  flex-column align-items-center justify-content-center">
              <img src={marin} alt="" />
              <h6 className="text-white">Martnilli </h6>
            </div>

          <Row className="gap-5">
            <Button
              style={{ width: "fit-content" , borderRadius:'20px' , backgroundColor:'#9057E5' , border:0 , width:'172px' , height:'50px' }}
              variant="secondary"
              className="text-white"
              onClick={() => setOpenDeleteModal(false)}
            >
              Yes
            </Button>
            <Button
              style={{ width: "fit-content" , borderRadius:'20px' , backgroundColor:'#FC155C' , border:0 , width:'172px' , height:'50px' }}
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
