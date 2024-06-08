/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import userImg from "../../../Assets/Performance/user.png";
const CollapseForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    userName: "",
    NumberOfLives: "",
    startDate: "",
    numberOfCoins: "",
    endDate: "",
    streamingTime: "",
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here
    formData;
  };

  // Handle change in form inputs
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row style={{ gap: "10rem" }} className="position-relative">
          <div
            className="position-absolute "
            style={{
              background: "white",
              maxWidth: "2px",
              left: "50%",
              height: "100%",
              padding: 0,
            }}
          ></div>
          <Col>
            <Row className="d-flex align-items-center justify-content-center">
              <Col md={2}>
                <img
                  style={{ width: "60px", height: "60px" }}
                  src={userImg}
                  alt=""
                ></img>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="userName">
                  <Form.Label className="text-white">userName</Form.Label>
                  <Form.Control
                    style={{ background: "#D9D9D9", height: "67px" }}
                    type="text"
                    placeholder="UserName"
                    value={formData.userName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="NumberOfLives">
              <Form.Label className="text-white">Number Of Lives</Form.Label>
              <Form.Control
                style={{ background: "#D9D9D9", height: "67px" }}
                type="number"
                placeholder="Number Of Lives"
                value={formData.NumberOfLives}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="startDate">
                  <Form.Label className="text-white">Start Date</Form.Label>
                  <Form.Control
                    style={{ background: "#D9D9D9", height: "67px" }}
                    type="date"
                    placeholder="Start Date"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="numberOfCoins">
                  <Form.Label className="text-white">
                    {" "}
                    Number Of Coins
                  </Form.Label>
                  <Form.Control
                    style={{ background: "#D9D9D9", height: "67px" }}
                    type="number"
                    placeholder="Number Of Coins"
                    value={formData.numberOfCoins}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="endDate">
                  <Form.Label className="text-white">End Date</Form.Label>
                  <Form.Control
                    style={{ background: "#D9D9D9", height: "67px" }}
                    type="date"
                    placeholder="End Date"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="streamingTime">
                  <Form.Label className="text-white">Streaming time</Form.Label>
                  <Form.Control
                    style={{ background: "#D9D9D9", height: "67px" }}
                    type="time"
                    placeholder="Streaming Time"
                    value={formData.streamingTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CollapseForm;
