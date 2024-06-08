import "./TopBar.css";
export default function TopBar({ value, setValue, setSearch }) {
  return (
    <>
      <div
        className="rounded d-flex align-items-center top-bar my-5"
        style={{ lineHeight: "74px" }}
      >
        <div
          className="flex-grow-1 d-flex align-items-center search ps-3 py-1"
          style={{ lineHeight: "74px" }}
        >
          <img
            style={{ cursor: "pointer" }}
            src={require("../../Assets/Home/search.png")}
            width={"25px"}
            className="me-3"
            alt="search"
            onClick={() => setSearch(true)}
          />
          <input
            className="col-11 bg-transparent border-0"
            id="search"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search For an User .."
          />
          {/* <label className="text-white" htmlFor="search">
            Search...
          </label> */}
        </div>
        <div className="col-3 d-flex align-items-center bg-black justify-content-around py-1 rounded-end">
          <p
            className="mb-0 text-white "
            style={{ height: "74px", fontSize: "20px", fontWeight: "400" }}
          >
            Username
          </p>
        </div>
      </div>
    </>
  );
}
