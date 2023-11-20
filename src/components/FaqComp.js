import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="faq">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold">Yang biasa ditanyakan</h2>
            <p className="text-center">
              Kalau gatau harus nanya, karna apa?
              karna aku adalah yin dan tidak akan pernah berubah apapun yang terjadi
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa saja jasa yang di tawarkan?
                </Accordion.Header>
                <Accordion.Body>
                  Membuat layouting baju
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Berapa lama waktu pengerjaan?
                </Accordion.Header>
                <Accordion.Body>
                  Tergantung dengan apa yang di pesan
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Berapa kisaran harga?</Accordion.Header>
                <Accordion.Body>
                  Murah da, paling 100.000
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Bagaimana cara order?</Accordion.Header>
                <Accordion.Body>
                Bisa menghubungi whatsapp 085591415756 atau dm @mialfatih
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;
