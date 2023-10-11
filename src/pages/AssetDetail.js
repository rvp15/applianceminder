import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/AssetDetail.module.css";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";

function AssetDetail() {
  const [asset, setAsset] = useState({
    location: "22 Skylark Ct, Marlboro, NJ 07746",
    brandName: "Samsung",
    modelNumber: "123-456-7890",
    serialNumber: "S12345-56789",
  });

  return (
    <Container className={styles.assetdetail}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Selected Asset Details</Accordion.Header>
          <Accordion.Body>
            <Form className="shadow p-4 mb-4 bg-white">
              <Row>
                <Col>
                  <Form.Group controlId="form.Name">
                    <Form.Label>Property Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Property Location"
                      value={asset.location}
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {" "}
                  <Form.Group controlId="form.Name">
                    <Form.Label>Brand Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Brand Name"
                      value={asset.brandName}
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="form.Name">
                    <Form.Label>Model Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Model Number"
                      value={asset.modelNumber}
                      disabled
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="form.Name">
                    <Form.Label>Serial Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Serial Number"
                      value={asset.serialNumber}
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default AssetDetail;
