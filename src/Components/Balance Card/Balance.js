export default function Balance(props) {
  return (
    <div className="d-flex aling-items-start justify-content-between mb-3">
      <div>
        <h6>{props.title}</h6>
        <p className="m-0 text-grey">{props.ms}</p>
      </div>
      <div className="d-flex gap-2 align-items-center">
        <p className="text-grey m-0">{props.balance}</p>
        <img
          width="20px"
          src={require("../../Assets/Performance/Feedback.png")}
          alt=""
        />
        <p className="m-0">{props.type}</p>
      </div>
    </div>
  );
}
