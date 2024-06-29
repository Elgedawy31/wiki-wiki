import React, { useEffect, useState } from "react";
import "./TargetDetails.css";
import CollapseItem from "./CollapseItem";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, reset } from "../../../store/actions/performanceSlice";
function TargetDetails({ allCategories ,getAllCategories }) {
  const [addNewItem, setAddNewItem] = useState(false);
  const [name, setName] = useState("");

  const [photo, setPhoto] = useState(null);
  const [file, setFile] = useState([]);
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

  const { categoryAdded } = useSelector((state) => state.performance);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name?.length > 0) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("img", file);
      dispatch(addCategory(formData));
    }
  };

  useEffect(() => {
    if (categoryAdded) {
      dispatch(reset());
      dispatch(getAllCategories());
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
        <>
          <div className="p-5 d-flex align-items-center justify-content-around">
            <div className="position-relative">
              <img
                src={photo || require("../../../Assets/Notfication/box.png")}
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
                  style={{
                    cursor: "pointer",
                    fontSize: "100px",
                    fontWeight: "bold",
                  }}
                  className="position-absolute top-50 start-50 translate-middle m-0"
                >
                  +
                </h1>
              )}
              {photo && (
                <h1
                  onClick={() => setPhoto(null)}
                  style={{
                    cursor: "pointer",
                    fontSize: "100px",
                    fontWeight: "bold",
                  }}
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
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label style={{ fontSize: "25px" }} className="text-white">
                Category Name
              </Form.Label>
              <Form.Control
                style={{
                  background: "#D9D9D9",
                  width: "450px",
                  height: "67px",
                }}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="UserName"
              />
            </Form.Group>
          </div>

          <button
            className="mt-4 d-flex align-items-center justify-content-center "
            style={{
              marginLeft: "auto",
              marginRight: "3rem",
              background: "linear-gradient(180deg, #9057E5 0%, #CC475D 100%)",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default TargetDetails;
