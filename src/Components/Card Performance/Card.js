import "./Card.css";
export default function Card(props) {
  return (
    <div className="card-performance rounded-20 d-flex align-items-center gap-5 justify-content-between py-4 px-3 mb-4">
      <div className="d-flex align-items-center gap-4 ">
        <img
          src={require("../../Assets/Home/profile.png")}
          alt="writer"
          width={"50px"}
        />
        <div>
          <p className="text-white fs-5 mb-0">Oliver Liam</p>
          <p className="text-grey fs-6 mb-0">Email : oliver@burrito.com</p>
        </div>
      </div>
      <div>
        <p className="text-white px-5 border-start pt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididuntut labore et doloremagna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident,
        </p>
      </div>
      <div className="d-flex align-self-start gap-2 justify-content-between">
        <div className="d-flex align-items-center">
          {props.img !== undefined && (
            <img
              src={require("../../Assets/Performance/Feedback.png")}
              alt="img"
              width={"25px"}
            />
          )}
          <p className="mb-0 text-white ms-1">{props.img}</p>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={require("../../Assets/Performance/delete.png")}
            alt="img"
            width={"25px"}
          />
          <p className="mb-0 ms-1 text-custom-delete">DELETE</p>
        </div>
      </div>
    </div>
  );
}
