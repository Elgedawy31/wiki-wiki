import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import closeIcon from "../../Assets/Performance/Close.svg";
import { useState } from "react";

export default function Performance4() {
  const [interestsItems, setInterestsItems] = useState([]);
  const [interest, setInterest] = useState("");

  const handleAddInterest = () => {
    if (interest?.length > 0) {
      setInterestsItems((prev) => [...prev, interest]);
      setInterest("");
    }
  };

  const handleRemoveItem = (idx) => {
    const newList = interestsItems.filter((ele, index) => index !== idx);
    setInterestsItems(newList);
  };

  return (
    <div style={{ width: "90%" }} className="mx-auto">
      <div className="d-flex align-items-stretch justify-content-between my-4">
        <div className="d-flex flex-column justify-content-between col-8">
          <div className="mt-5">
            <p className="text-white fw-bold">Add an Interest</p>
            <div className="d-flex gap-3 mb-3 flex-wrap ">
              {interestsItems?.map((ele, idx) => (
                <div
                  key={ele}
                  className="d-flex p-2 px-4 align-items-center gap-4 bg-white rounded-20 w-fit-content"
                >
                  <p className="mb-0 text-purple-2 fw-bold">{ele}</p>
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemoveItem(idx)}
                    src={closeIcon}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex align-items-stretch  col-12">
            <input
              className="col-10 border-0 bg-super-grey p-3 rounded-pill"
              id="search"
              type="text"
              onChange={(ele) => setInterest(ele.target.value)}
              value={interest}
              placeholder="Add an Interest"
            />
            <button
              onClick={handleAddInterest}
              className="rounded-pill bg-purple-2 border-0 col-2 fw-bold text-uppercase text-white"
              style={{
                transform: "translate(-50px)",
                cursor: interest?.length > 0 ? "pointer" : "not-allowed",
              }}
            >
              Add
            </button>
          </div>
        </div>
        <div className="col-md-3">
          <img
            src={require("../../Assets/Performance/mobile-performance.png")}
            alt=""
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
}
