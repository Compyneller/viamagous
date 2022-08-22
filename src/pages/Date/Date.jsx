import React, { useState } from "react";
import { InputGroup, Form, Container, Row, Col } from "react-bootstrap";
const Date = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="g-3">
        <Col sm={12} lg={4}>
          <InputGroup>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="datetime-local"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col sm={12} lg={4}>
          <InputGroup>
            <Form.Control
              placeholder="Duration"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col sm={12} lg={4}>
          <InputGroup>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              type="datetime-local"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="g-3">
        <Col sm={12} lg={4}>
          From : {fromDate}
        </Col>
        <Col sm={12} lg={4}>
          Duration : {duration}
        </Col>
        <Col sm={12} lg={4}>
          to : {fromDate + duration}
        </Col>
      </Row>
    </Container>
  );
};

export default Date;
