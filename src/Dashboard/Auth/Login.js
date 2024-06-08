import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/actions/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { loading, error , token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    const values = { email: form.email, password: form.password };

    dispatch(loginAction({ values }));
  }

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    if(token){
      navigate('/dashboard/home')
    }
  }, [error , token]);

  console.log(token)
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="my-auto d-flex align-items-cneter justify-content-center flex-column min-vh-100 position-relative overflow-hidden">
          <img
            className="position-absolute top-0 end-0 z-n1"
            src={require("../../Assets/Dashboard/blurRed.png")}
            alt="blurRed"
          />
          <img
            className="position-absolute bottom-0 start-0 z-n1"
            src={require("../../Assets/Dashboard/blurBlue.png")}
            alt="blurBlue"
          />
          <div className="d-flex align-items-center justify-conntent-center flex-column">
            <img src={require("../../Assets/Login/logo.png")} alt="logo" />
            <p className="text-white mt-2 mb-5">Wiki Wiki</p>
          </div>
          <div className="d-flex justify-content-center">
            <Form onSubmit={handleSubmit} className="col-md-8 col-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="text-center py-3"
                  type="email"
                  placeholder="email"
                  required
                  onChange={handleChange}
                  name="email"
                  value={form.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="text-center py-3"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  name="password"
                  value={form.password}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button className="bg-primary-grad border-0 mt-2" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
