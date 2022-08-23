import React, { useState } from "react";
import { InputGroup, Form, Container, Row, Col, Button } from "react-bootstrap";
const Date = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [result, setResult] = useState("Ex. 10 Days");
  const handleSubmit = (e) => {
    e.preventDefault();
    const diff = new window.Date(fromDate) - new window.Date(toDate);
    const diffTime = Math.abs(diff);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setResult(diffDays + " " + "days");
  };

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-50 ">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
            <Form.Label>From Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter From Date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>To Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter email"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Result</Form.Label>
            <Form.Control type="number" disabled placeholder={result} />
          </Form.Group>
          <Button variant="outline-primary" className="w-100" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Date;
