import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4 ">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Portofolio.</h3>
          </Col>
          <Col className="text-end">
            {" "}
            {/* biar dikanan */}
            <a
              href="https://web.facebook.com/muhammadizzuddin.alfatih.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 mx-2"></i>
            </a>
            <a
              href="https://instagram.com/mialfatih?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 mx-2"></i>
            </a>
            <a href="https://wa.me/085591415756" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp text-white fs-1 mx-lg-3 mx-2"></i>
            </a>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <p className="text-center text-white-50">
              &copy; Copyright by Mialfatih Mastery 2023, All Come Right
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
