/* eslint-disable no-unused-expressions */
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { AddAdmin, baseURL } from "../../Api/Api";
import { useState } from "react";
import LoadingSpinner from "../../Components/Loading/LoadingSpinner";

export default function AddUser() {
  const [form, setForm] = useState({
    user_name: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const [flag, setFlag] = useState(false);
  // Handle Change
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const [loading, setLoading] = useState(false);
  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/${AddAdmin}`, form);
      setAlert(res.data.message);
      setFlag(true);
      setLoading(false);
    } catch (err) {
      err;
      setLoading(false);
    }
  }
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="my-auto d-flex align-items-cneter justify-content-center min-vh-100 position-relative overflow-hidden">
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

          <div className="d-flex col-6 flex-column  justify-content-center">
            <p className="text-white">ADD NEW USER FOR WIKIWIKI DASHBOARD </p>
            <Form onSubmit={handleSubmit} className=" col-12">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  className="text-center py-3"
                  type="text"
                  placeholder="User Name"
                  required
                  onChange={handleChange}
                  value={form.user_name}
                  name="user_name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  className="text-center py-3"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  value={form.password}
                  name="password"
                />
              </Form.Group>
              {flag && <p className="text-success fw-bold">{alert}</p>}
              <div className="d-flex justify-content-center">
                <Button className="bg-primary-grad border-0 mt-2" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
          <div className="col-5 align-self-center d-flex align-items-center justify-conntent-center flex-column">
            <img src={require("../../Assets/Login/logoUser.png")} alt="logo" />
            <p className="text-white mt-2 mb-5">Wiki Wiki</p>
          </div>
        </div>
      )}
    </>
  );
}
