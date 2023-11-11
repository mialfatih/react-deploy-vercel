import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100" id="home">
      <Container>
        <Row>
          <Col>
            <h1 className="text-white text-center fs-1 animate__animated animate__bounceIn">
              Biodata Portofolio
            </h1>
            <p className="text-white text-center text-white-60 animate__animated animate__bounceIn animate__delay-1s">
              Muhammad Izzuddin Al Fatih 2205330, Pendidikan Ilmu Komputer A
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
