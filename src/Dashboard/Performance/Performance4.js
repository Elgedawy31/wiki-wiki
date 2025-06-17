import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import closeIcon from "../../Assets/Performance/Close.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInterest,
  deleteInterest,
  getAllInterests,
  reset,
} from "../../store/actions/InterestsSlice";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import UniToast from "../../Components/UniToast/UniToast";

export default function Performance4() {
  const [interestsItems, setInterestsItems] = useState([]);
  const { error, loading, InterestAdded, allInterests, DeleteInterest } =
    useSelector((state) => state.interests);
  const [interest, setInterest] = useState("");
  const dispatch = useDispatch();

  const handleAddInterest = () => {
    if (interest?.length > 0) {
      dispatch(addInterest({ name: interest }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(deleteInterest(id));
  };

  useEffect(() => {
    if (InterestAdded) {
      setInterest("");
      dispatch(getAllInterests());
      dispatch(reset());
    }
  }, [InterestAdded]);

  useEffect(() => {
    dispatch(getAllInterests());
  }, [dispatch]);

  useEffect(() => {
    if (allInterests?.length > 0) {
      setInterestsItems(allInterests);
    }
  }, [allInterests]);

  useEffect(() => {
    if (DeleteInterest) {
      dispatch(getAllInterests());
      dispatch(reset());
    }
  }, [DeleteInterest]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div style={{ width: "90%" }} className="mx-auto" data-aos="slide-up" data-aos-duration="800" data-aos-delay="300">
          {error && (
            <UniToast
              open={true}
              reset={reset}
              setOpen={() => {}}
              title="Interest Error"
              message={error}
            />
          )}
          <div className="d-flex align-items-stretch justify-content-between my-4">
            <div className="d-flex flex-column justify-content-between col-8">
              <div className="mt-5">
                <p className="text-white fw-bold">Add an Interest</p>
                <div className="d-flex gap-3 mb-3 flex-wrap ">
                  {interestsItems?.map((ele, idx) => (
                    <div
                      key={idx}
                      className="d-flex p-2 px-4 align-items-center gap-4 bg-white rounded-20 w-fit-content"
                    >
                      <p className="mb-0 text-purple-2 fw-bold">{ele.name}</p>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRemoveItem(ele?.id)}
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
      )}
    </>
  );
}
