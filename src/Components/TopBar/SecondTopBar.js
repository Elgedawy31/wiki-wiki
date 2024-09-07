export default function SecondTopBar({title, status }) {
  const handleStatus = () => {
    switch (status) {
      case "active":
        return (
          <div
            style={{ color: "#24FF01", fontSize: "20px", fontWeight: "400" , textTransform:'uppercase' }}
          >
            {status}
          </div>
        );

      case "paused":
        return (
          <div
            style={{ color: "#FF9C27", fontSize: "20px", fontWeight: "400" , textTransform:'uppercase' }}
          >
            {status}
          </div>
        );

      case "finished":
        return (
          <div
            style={{ color: "#C197FF", fontSize: "20px", fontWeight: "400" , textTransform:'uppercase' }}
          >
            {status}
          </div>
        );

      case "pending":
        return (
          <div
            style={{ color: "#EBFF00", fontSize: "20px", fontWeight: "400" , textTransform:'uppercase' }}
          >
            {status}
          </div>
        );

      case "refused":
        return (
          <div
            style={{ color: "#FF0000", fontSize: "20px", fontWeight: "400" , textTransform:'uppercase' }}
          >
            {status}
          </div>
        );

      default:
        return (
          <div
            style={{ color: "#EBFF00", fontSize: "20px", fontWeight: "400" , textTransform:'uppercase' }}
          >
            {status}
          </div>
        );
    }
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between mt-5"
        style={{ marginBottom: "150px" }}
      >
        <div>
          <div className="d-flex align-items-center gap-3">
            <h1 className="text-white text-uppercase fw-bold">{title}</h1>
            <img src={require("../../Assets/SideBar/ads.png")} alt="laptop" />
          </div>
          {handleStatus()}
        </div>
        <div className=" px-5 py-4 rounded d-flex align-items-center bg-black justify-content-around py-1 rounded-end me-3">
          <p className="mb-0 text-white">Username</p>
        </div>
      </div>
    </>
  );
}
