import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { videoData } from "../../config/videos-data";
import { VideoSource } from "../../context/VideoContext";
const RecomendedVideo = () => {
  const { setSrc } = useContext(VideoSource);
  return (
    <Container>
      <Row className="g-3">
        {videoData.map((items, index) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                className="shadow"
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#112240",
                  color: "#64FFDA",
                }}
                onClick={() => {
                  setSrc(items.url);
                  window.scroll(0, 0);
                }}
              >
                <Card.Img
                  variant="top"
                  height={200}
                  src={items.thumbnail}
                  style={{ objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="video__card__title">
                    {items.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <br />
      <br />
    </Container>
  );
};

export default RecomendedVideo;
