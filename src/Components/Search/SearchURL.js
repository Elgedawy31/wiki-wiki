import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PickAPost } from "../../store/actions/ManagementSlice";

export default function SearchURL() {
  const { postDetails, loading } = useSelector((state) => state.management);

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(PickAPost({ search: name }));
  };


  return (
    <div className="text-white d-flex align-items-center justify-content-center gap-3 flex-column">
      <h4>Enter complete ID of the post </h4>
      <div className="d-flex align-items-stretch justify-content-center col-12">
        <input
          onChange={(e) => setName(e.target.value)}
          className="col-7 border-0 bg-super-grey p-3 rounded-pill"
          id="search"
          type="text"
          placeholder="Enter complete ID of the post ..."
        />
        <Button
          onClick={handleSubmit}
          className="rounded-pill bg-primary-grad border-0 col-1 fw-bold text-uppercase"
          style={{
            transform: "translate(-80px)",
            opacity: loading ? 0.7 : 1,
            cursor: loading && "not-allowed",
          }}
        >
          Go
        </Button>
      </div>
    </div>
  );
}
