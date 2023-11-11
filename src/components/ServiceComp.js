import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const SericeComp = () => {
  return (
    <div className=" service min-vh-100 d-flex align-items-center" id="service">
      {" "}
      {/* min vh untuk ukuran web div */}
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">
              About Me
            </h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
              Designer service for resolve your problem.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          {" "}
          {/* ketika diukuran large(lg) tetep 3, kalo ukuran < 768 jadi 2, justify agar saat mengecil dia ada ditengah */}
          <Col className="text-center py-4 px-3">
            <i class="fa-solid fa-graduation-cap fs-2 mb-3"></i>
            <h5 className="fw-bold">Pendidikan</h5>
            <p>Universitas Pendidikan Indonesia</p>
          </Col>
          <Col className="text-center py-4 px-3">
            <i class="fa-solid fa-location-dot fs-2 mb-3"></i>
            <h5 className="fw-bold">Alamat</h5>
            <p>Jln. Gegerkalong Girang</p>
          </Col>
          <Col className="text-center py-4 px-3">
            <i class="fa-solid fa-award fs-2 mb-3"></i>
            <h5 className="fw-bold">Achievement</h5>
            <p>Juara 1 menahan rasa sakit</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SericeComp;
