import React from "react";
import { Container, Card, Button } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function AssetMinderItem({ minder }) {
  const handleChange = (change, evt) => {};
  return (
    <Container className="mb-2">
      <Card>
        {/* <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        /> */}
        <Card.Body>
          <Card.Title>{minder.name}</Card.Title>
          <Form className="shadow p-4 mb-4 bg-white">
            <Row>
              <Col>
                <Form.Group controlId="form.expectedServicedate">
                  <Form.Label>Expected service date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Expected service date"
                    value={minder.expectedService}
                    onChange={(e) => handleChange("expectedServiceDate", e)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="form.actualServicedate">
                  <Form.Label>Actual service date</Form.Label>
                  <Form.Control type="date" placeholder="Actual service date"
                   value={minder.actualService}
                   onChange={(e) => handleChange("actualService", e)} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button variant="primary">Save</Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AssetMinderItem;
