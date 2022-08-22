import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home.scss";
import login from "../../assets/icons8-password.gif";
import video from "../../assets/icons8-film-reel.gif";
import date from "../../assets/icons8-calendar.gif";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home__container">
      <Container>
        <h1>Viamagus Assignment</h1>
        <br />
        <Row className="g-3">
          <Col sm={12} lg={4}>
            <Card
              className="home__card shadow"
              onClick={() => navigate("/login")}
            >
              <Card.Body>
                <div className="card__content">
                  <img src={login} alt="" />
                  <br />
                  <h1>Login</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            {" "}
            <Card
              className="home__card shadow"
              onClick={() => navigate("/video")}
            >
              <Card.Body>
                <div className="card__content">
                  <img src={video} alt="" />
                  <br />
                  <h1>Video</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            {" "}
            <Card
              className="home__card shadow"
              onClick={() => navigate("/date")}
            >
              <Card.Body>
                <div className="card__content">
                  <img src={date} alt="" />
                  <br />
                  <h1>Date</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
