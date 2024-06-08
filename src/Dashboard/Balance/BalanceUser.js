import TopBar from "../../Components/TopBar/TopBar";
import { Button } from "react-bootstrap";

import Facebook from "../../Assets/UserPage/Facebook.svg";
import Instagram from "../../Assets/UserPage/Instagram.svg";
import Twitter from "../../Assets/UserPage/Twitter.svg";
import PinkStatic from "../../Assets/UserPage/PinkStatic.svg";
import PurpleStatic from "../../Assets/UserPage/Purple.svg";
import Tick from "../../Assets/UserPage/Tick.svg";
import MasterCard from "../../Assets/UserPage/MasterCard.svg";
import Visa from "../../Assets/UserPage/Visa.svg";
import Balance from "../../Components/Balance Card/Balance";
import greenIcon from "../../Assets/Balance/Icon-green.png";
import redIcon from "../../Assets/Balance/icon-red.png";
import { useParams } from 'react-router-dom';

import { useGetOneTransactionQuery } from '../../store/actions/Transaction';
import userAvatar from "../../Assets/UserPage/avatar.png";

export default function BalanceUser() {



  const { id } = useParams();
  const { data, error, isLoading } = useGetOneTransactionQuery({ id });
  console.log(data)

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  // if (!data) {
  //   return <div>No transaction data found</div>;
  // }


  const userName = data ? data.user.name : '';
  const dollars = data ? data.dollars : '';
  const date = data ? data.date : '';
  const img = data ? data.user.img : '';

  const getCurrentDate = () => {
    const now = new Date();
    return now.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' });
  };


  return (
    <>
      <TopBar />
      <div className="text-white mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center ">
          <img
  src={img ? `https://ahmedroyale.com/${img}` : userAvatar}
  alt={userName}
  style={{ width: '70px', height: '70px', marginRight: "1rem" }}
/>
              <div>
              <h4 className="m-0">{userName}</h4>
              <h6 className="text-grey m-0">username</h6>
            </div>
          </div>
          <div
            className="d-flex align-items-center gap-5 rounded p-3"
            style={{
              background:
                "linear-gradient(96deg, #121327 49.37%, rgba(252, 21, 92, 0.80) 87.11%)",
            }}
          >
            <img src={require("../../Assets/Balance/coin.png")} alt="" />
            <h4 className="m-0">19,550</h4>
          </div>
        </div>

        <div className="d-flex align-items-stretch justify-content-center mt-4 row-gap-3">
          <div className="col-lg-5 col-6">
            <div className="rounded-20 bg-third-grad p-3 me-2 h-100">
              <h5>Profile bio</h5>
              <p className="text-grey">
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer
                is no. If two equally difficult paths, choose the one more
                painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <div
                style={{
                  background:
                    "linear-gradient(to left, #E0E1E200, #E0E1E2, #E0E1E228)",
                  height: "2px",
                  width: "100%",
                  display: "block",
                  margin: "20px 0",
                }}
              ></div>
              <p className="text-grey">
                Full Name:{" "}
                <span className="text-white fw-bold"> {userName} </span>
              </p>
              <p className="text-grey">
                Mobile:
                <span className="text-white fw-bold"> (+20) 123 1234 123 </span>
              </p>
              <p className="text-grey">
                Email:
                <span className="text-white fw-bold"> mark@simmmple.com </span>
              </p>
              <p className="text-grey">
                Location:
                <span className="text-white fw-bold"> United Emirates </span>
              </p>
              <p className="text-grey">
                Social Media:
                <img width="15px" className="mx-1" src={Facebook} alt="" />
                <img width="15px" className="me-1" src={Twitter} alt="" />
                <img width="15px" src={Instagram} alt="" />
              </p>
            </div>
          </div>

          <div className="col-lg-7 col-12">
            <div className="rounded-20 bg-third-grad p-3 h-100 ">
              <h5 className="mb-4">Invoices</h5>
              <Balance
                title="March, 01, 2020"
                ms="#MS-415646"
                balance="$180"
                type="PDF"
              />
              <Balance
                title="February, 10, 2021"
                ms="#RV-126749"
                balance="$250"
                type="PNG"
              />
              <Balance
                title="April, 05, 2020"
                ms="#FB-212562"
                balance="$560"
                type="PDF"
              />
              <Balance
                title="June, 25, 2019"
                ms="#QW-103578"
                balance="$120"
                type="PNG"
              />
              <Balance
                title="March, 01, 2019"
                ms="#AR-803481"
                balance="$300"
                type="PDF"
              />
            </div>
          </div>
        </div>

        <div className="col-12 mt-3 bg-third-grad p-3 rounded-20 px-5">
          <div className="d-flex align-items-center justify-content-between text-decoration-none mb-4">
            <div className="d-flex align-items-center gap-4">
            <img 
                      src={dollars > 0 ? greenIcon : redIcon} 
                      alt={userName} 
                />
              <div className="d-flex justify-content-center flex-column">
                <p className="mb-0 text-white fs-4">{userName}</p>
                <p className="mb-0 text-grey">
                <p className="mb-0 text-grey">{date || getCurrentDate()}</p>
                </p>
              </div>
            </div>
            <div>
            <p className={`mb-0 ${dollars > 0 ? 'text-green' : 'text-very-red'}`}>
                  {dollars}
                </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between text-decoration-none mb-4">
            <div className="d-flex align-items-center gap-4">
            <img 
                      src={dollars > 0 ? greenIcon : redIcon} 
                      alt={userName} 
                />
              <div className="d-flex justify-content-center flex-column">
                <p className="mb-0 text-white fs-4">{userName}</p>
                <p className="mb-0 text-grey">
                <p className="mb-0 text-grey">{date || getCurrentDate()}</p>
                </p>
              </div>
            </div>
            <div>
              <p className={`mb-0 ${dollars > 0 ? 'text-green' : 'text-very-red'}`}>
                  {dollars}
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
