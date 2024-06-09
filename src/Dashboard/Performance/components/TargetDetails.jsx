import React, { useEffect, useState } from "react";
import "./TargetDetails.css";
import CollapseItem from "./CollapseItem";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, reset } from "../../../store/actions/performanceSlice";
function TargetDetails({ allCategories }) {
  const [addNewItem, setAddNewItem] = useState(false);
  const [name, setName] = useState("");

  const { categoryAdded } = useSelector((state) => state.performance);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name?.length > 0) {
      dispatch(addCategory({ name }));
    }
  };

  useEffect(() => {
    if (categoryAdded) {
      dispatch(reset());
      setAddNewItem(false);
    }
  }, [categoryAdded]);

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
          {allCategories?.map((ele) => (
            <CollapseItem category={ele} />
          ))}
        </div>
      )}

      {addNewItem && (
        <div className="p-5 d-flex align-items-center justify-content-around">
          <button
            className="mt-4"
            style={{
              background: "linear-gradient(180deg, #9057E5 0%, #CC475D 100%)",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label style={{ fontSize: "25px" }} className="text-white">
              Category Name
            </Form.Label>
            <Form.Control
              style={{ background: "#D9D9D9", width: "450px", height: "67px" }}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="UserName"
            />
          </Form.Group>
        </div>
      )}
    </div>
  );
}

export default TargetDetails;
