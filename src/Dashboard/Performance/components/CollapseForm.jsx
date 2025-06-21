/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import UserAutocomplete from "../../../Components/UserAutocomplete";
import userImg from "../../../Assets/Performance/user.png";
import { ImgsUrl } from "../../../Api/Api";
const CollapseForm = ({formData , setFormData}) => {
  // State for form fields


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    };

  // Handle change in form inputs
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle user selection from autocomplete
  const handleUserSelect = (selectedUser) => {
    setFormData({ 
      ...formData, 
      selectedUser: selectedUser,
      userName: selectedUser ? selectedUser.name : ''
    });
  };

  // Get user avatar URL
  const getUserAvatar = () => {
    if (formData.selectedUser?.img) {
      return formData.selectedUser.img.startsWith('http') 
        ? formData.selectedUser.img 
        : `${ImgsUrl}/${formData.selectedUser.img}`;
    }
    return userImg;
  };

  // Get user initials for placeholder
  const getUserInitials = () => {
    if (formData.selectedUser?.name) {
      return formData.selectedUser.name.charAt(0).toUpperCase();
    }
    return 'U';
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
                <div style={{ position: "relative", width: "60px", height: "60px" }}>
                  {formData.selectedUser?.img ? (
                    <img
                      style={{ 
                        width: "60px", 
                        height: "60px", 
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #fc155c"
                      }}
                      src={getUserAvatar()}
                      alt={formData.selectedUser?.name || "User"}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="null-img"
                    style={{ 
                      display: formData.selectedUser?.img ? 'none' : 'flex',
                      width: "60px", 
                      height: "60px",
                      fontSize: "24px"
                    }}
                  >
                    {getUserInitials()}
                  </div>
                </div>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Select User</Form.Label>
                  <UserAutocomplete
                    value={formData.selectedUser}
                    onChange={handleUserSelect}
                    placeholder="Search and select a user..."
                    className="custom-user-autocomplete"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="numberOfLives">
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
