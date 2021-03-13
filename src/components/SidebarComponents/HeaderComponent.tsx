import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const HeaderComponent: React.FC = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalName">
        <Form.Label column sm={3}>
          Full Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Full Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={3}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Enter Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalAddress">
        <Form.Label column sm={3}>
          Address
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text " placeholder="Enter Street" />
        </Col>
        <Col sm={5} style={{ paddingTop: 10 }}>
          <Form.Control type="text " placeholder="Enter City" />
        </Col>
        <Col sm={5}>
          <Form.Control type="text " placeholder="Enter State" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalMobile">
        <Form.Label column sm={3}>
          Mobile
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Mobile Number" />
        </Col>
      </Form.Group>
    </Form>
  );
};
