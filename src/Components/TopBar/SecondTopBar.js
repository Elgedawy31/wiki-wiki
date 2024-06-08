export default function SecondTopBar() {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between mt-5"
        style={{ marginBottom: "150px" }}
      >
        <div>
          <h1 className="text-white text-uppercase fw-bold">
            Content Management System
            <img src={require("../../Assets/TopBar/Laptop.png")} alt="laptop" />
          </h1>
        </div>
        <div className="col-3 d-flex align-items-center bg-black justify-content-around py-1 rounded-end me-3">
          <p className="mb-0 text-white">Username</p>
          <img
            src={require("../../Assets/Home/profile.png")}
            width={"50px"}
            alt="profile"
          />
        </div>
      </div>
    </>
  );
}
