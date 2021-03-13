import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const EducationComponent: React.FC = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalInstitute">
        <Form.Label column sm={3}>
          Institute
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Institute Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalDegree">
        <Form.Label column sm={3}>
          Degree
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Enter Degree" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalYear">
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
