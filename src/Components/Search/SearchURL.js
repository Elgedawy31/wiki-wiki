import { Button } from "react-bootstrap";

export default function SearchURL() {
  return (
    <div className="text-white d-flex align-items-center justify-content-center gap-3 flex-column">
      <h4>Enter complete URL of the post </h4>
      <div className="d-flex align-items-stretch justify-content-center col-12">
        <input
          className="col-7 border-0 bg-super-grey p-3 rounded-pill"
          id="search"
          type="text"
          placeholder="Enter complete URL of the post ..."
        />
        <Button
          className="rounded-pill bg-primary-grad border-0 col-1 fw-bold text-uppercase"
          style={{ transform: "translate(-80px)" }}
        >
          Go
        </Button>
      </div>
    </div>
  );
}
