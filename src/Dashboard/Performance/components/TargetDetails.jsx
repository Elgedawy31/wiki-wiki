import React, { useState } from "react";
import "./TargetDetails.css";
import CollapseItem from "./CollapseItem";
import { Form } from "react-bootstrap";
function TargetDetails() {
  const [addNewItem, setAddNewItem] = useState(false);
  return (
    <div className="categories-section py-5 ">
      <div className="mb-5 px-5">
        <button
          style={{
            background:
              addNewItem && "linear-gradient(180deg, #9057E5 0%, #CC475D 100%)",
          }}
          onClick={() => setAddNewItem((prev) => !prev)}
        >
          Add Category {"   "} +{" "}
        </button>
      </div>
      {!addNewItem && (
        <div>
          <CollapseItem />
          <CollapseItem />
          <CollapseItem />
          <CollapseItem />
        </div>
      )}

      {addNewItem && (
        <div className="p-5 d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center justify-content gap-3 flex-column">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                cursor: "pointer",
                width: "194px",
                height: "194px",
                borderRadius: "50%",
                backgroundColor: "#D9D9D9",
                fontSize: "100px",
              }}
            >
              +
            </div>
            <h3 className="text-white">ADD PHOTO</h3>
          </div>
          <Form.Group className="mb-3" controlId="userName">
                  <Form.Label style={{fontSize:'25px'}} className="text-white">Category Name</Form.Label>
                  <Form.Control
                    style={{ background: "#D9D9D9",  width:'450px',  height: "67px" }}
                    type="text"
                    placeholder="UserName"
                  />
                </Form.Group>
        </div>
      )}
    </div>
  );
}

export default TargetDetails;
