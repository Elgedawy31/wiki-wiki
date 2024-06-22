import { ImgsUrl } from "../../Api/Api";
import "./Card.css";
export default function Card({ data, setOpen, setActiveId }) {
  return (
    <div className="card-performance rounded-20 d-flex align-items-center gap-5 justify-content-between py-4 px-3 mb-4">
      <div className="d-flex align-items-center gap-4 ">
        <img
          src={
            data?.user?.img
              ? `${ImgsUrl}/${data?.user?.img}`
              : require("../../Assets/UserPage/avatar.png")
          }
          alt="writer"
          width={"50px"}
        />
        <div>
          <p className="text-white fs-5 mb-0">{data?.user?.name}</p>
          <p className="text-grey fs-6 mb-0">{data?.user?.nick_name}</p>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <p className="text-white px-5 border-start pt-3">{data?.report}</p>
      </div>
      <div className="d-flex align-self-start gap-2 justify-content-between">
        {/* <div className="d-flex align-items-center">
            <img
              src={require("../../Assets/Performance/Feedback.png")}
              alt="img"
              width={"25px"}
            />
          <p className="mb-0 text-white ms-1">img</p>
        </div> */}
        <div
          onClick={() => {
            setActiveId(data?.id);
            setOpen(true);
          }}
          style={{ cursor: "pointer" }}
          className="d-flex align-items-center"
        >
          <img
            src={require("../../Assets/Performance/delete.png")}
            alt="img"
            width={"25px"}
          />
          <p className="mb-0 ms-1 text-custom-delete">delete</p>
        </div>
      </div>
    </div>
  );
}
