import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import closeIcon from "../../Assets/Performance/Close.svg";
import "./performance.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSticker } from "../../store/actions/InterestsSlice";
import UniToast from "../../Components/UniToast/UniToast";

export default function Performance5() {
  const [interestsItems, setInterestsItems] = useState([]);
  const { error } = useSelector((state) => state.interests);
  const [open, setOpen] = useState(false);
  const [interest, setInterest] = useState("");
  const [img, setImg] = useState(null);

  const dispatch = useDispatch();

  const handleAddInterest = () => {
    if (interest?.length > 0 && img !== null) {
      const formData = new FormData();
      formData.append("name", interest);
      formData.append("img", img);
      dispatch(addSticker(formData));
      // setInterestsItems((prev) => [...prev, { name: interest, img }]);
      // setInterest("");
      // setImg(null);
    }
  };

  const handleRemoveItem = (idx) => {
    const newList = interestsItems.filter((ele, index) => index !== idx);
    setInterestsItems(newList);
  };

  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);
  return (
    <div style={{ width: "90%" }} className="mx-auto">
      {open && error && (
        <UniToast
          open={open}
          setOpen={setOpen}
          title="Notification Error"
          message={error}
        />
      )}
      <div className="d-flex align-items-stretch justify-content-between my-4">
        <div className="d-flex flex-column justify-content-between col-8">
          <div className="mt-5">
            <p className="text-white fw-bold">Add An Sticker</p>
            <div className="d-flex align-items-stretch mb-5 col-12 ">
              <input
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                type="text"
                className="rounded-pill border-0 col-5 py-3 px-3"
              />
              <div className="position-relative col-3 border-0 rounded-20">
                <label htmlFor="add-gift" className="add-gift pointer ">
                  <img
                    className="position-absolute w-100 h-100  object-fit-cover"
                    src={img && URL.createObjectURL(img)}
                  />
                  <div style={{ zIndex: 1111 }}>+</div>{" "}
                </label>
                <input
                  onChange={(e) => setImg(e.target.files[0])}
                  className="col-9 border-0 bg-super-grey d-none"
                  id="add-gift"
                  type="file"
                />
              </div>
              <Button
                style={{
                  cursor:
                    interest?.length > 0 && img !== null
                      ? "pointer"
                      : "not-allowed",
                }}
                onClick={handleAddInterest}
                className=" bg-purple-2 border-0 col-2 py-3 rounded-pill fw-bold text-uppercase"
              >
                Add
              </Button>
            </div>
            <div className="d-flex align-items-center gap-5 flex-wrap ">
              {interestsItems?.map((ele, idx) => (
                <div
                  className="d-flex p-2 position-relative  align-items-center justify-content-end gap-4  rounded-20 w-fit-content mb-5"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                >
                  <img
                    className="w-100 h-100 position-absolute "
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src={ele?.img && URL.createObjectURL(ele.img)}
                  ></img>
                  <img
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      cursor: "pointer",
                    }}
                    className="align-self-start rounded-lg bg-white"
                    onClick={() => handleRemoveItem(idx)}
                    src={closeIcon}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <img
            src={require("../../Assets/Performance/performance5.png")}
            alt=""
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
