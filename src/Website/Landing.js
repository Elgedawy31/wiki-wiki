import { Container } from "react-bootstrap";
import Line from "../Assets/Landing/Line.svg";
import apple from "../Assets/Landing/apple.svg";
import Google from "../Assets/Landing/Google Play.svg";
import { Link } from "react-router-dom";
import "./landing.css";

// import Logo from "../Assets/Landing/Logo.svg";
export default function Landing() {
  return (
    <>
      <div className="min-vh-100 position-relative overflow-hidden">
        <img
          className="img-lan-2 position-absolute bottom-0 end-0 z-n1"
          src={require("../Assets/Landing/Ellipse 1.png")}
          alt="blurRed"
        />
        <img
          className="img-lan position-absolute bottom-0 end-0 z-n1"
          src={require("../Assets/Landing/Ellipse 2.png")}
          alt="blurBlue"
        />
        <Container className="my-5">
          <div className="d-flex align-items-center gap-4 mb-0">
            <img
              src={require("../Assets/Landing/logo.png")}
              alt="logo"
              width={"50px"}
            />
            <p className="mb-0 text-white fs-3 fw-bold">Wiki Wiki </p>
          </div>
          <div className="d-flex flex-wrap flex-md-row flex-column-reverse justify-content-between">
            <div>
              <div>
                <p className="display-3 fw-normal mb-0 lh-1  text-white">
                  Get<span className="ms-3 text-purple">Everything</span>
                </p>
                <p className="display-3 fw-normal lh-2 text-white">
                  Live<span className="ms-3 text-banfsagi-2">Everything</span>
                </p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <p className="text-white mb-0">Download it now for free</p>
                <img src={Line} alt="line" />
              </div>
              <div className="mt-4">
                <p className="text-white mb-0">Available now in</p>
              </div>
              <div className="link-landing d-flex align-items-center gap-4 h-auto mt-3">
                <Link>
                  <img className="px-3 py-2" src={Google} alt="" />
                </Link>
                <Link className="ms-2">
                  <img className="px-3 py-2" src={apple} alt="" />
                </Link>
              </div>
              <div className="mt-3">
                <img src={require("../Assets/Landing/qrCode.png")} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex justify-content-center align-self-center my-4">
              <img
                src={require("../Assets/Landing/iPhone 15 Pro.png")}
                alt="phone"
                width={"100%"}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
