import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const ExperienceComponent: React.FC = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalCompany">
        <Form.Label column sm={3}>
          Company
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Company" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalLocation">
        <Form.Label column sm={3}>
          Location
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Location" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalDesignation">
        <Form.Label column sm={3}>
          Designation
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Designation" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalExperienceYear">
        <Form.Label column sm={3}>
          Year
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="Date" placeholder="From" />
        </Col>
        <Col sm={10}>
          <Form.Control type="Date" placeholder="To" />
        </Col>
      </Form.Group>
    </Form>
  );
};
