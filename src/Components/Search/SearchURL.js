import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PickAPost, reset } from "../../store/actions/ManagementSlice";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";
import UniToast from "../UniToast/UniToast";

export default function SearchURL() {
  const { postDetails, loading } = useSelector((state) => state.management);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(PickAPost({ search: name }));
  };

  useEffect(() => {
    if (postDetails?.data?.length > 0) {
      navigate("/dashboard/content-management-system/post-details", {
        state: postDetails?.data[0],
      });
      dispatch(reset());
    } else {
      // setOpen(true);
      // setTimeout(() => {
      //   setOpen(false);
      // }, 2000);
    }
  }, [postDetails]);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="text-white d-flex align-items-center justify-content-center gap-3 flex-column">
          {open && (
            <UniToast
              open={open}
              setOpen={setOpen}
              reset={reset}
              title="Pic Post Error"
              message="No Post Details"
            />
          )}
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
              disabled={name === ""}
              onClick={handleSubmit}
              className="rounded-pill bg-primary-grad border-0 col-1 fw-bold text-uppercase"
              style={{
                transform: "translate(-80px)",
                opacity: loading || name === "" ? 0.7 : 1,
                cursor: loading || (name === "" && "not-allowed"),
              }}
            >
              Go
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
