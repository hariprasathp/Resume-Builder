import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export const SkillsComponent: React.FC = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalSkills">
        <Form.Label column sm={3}>
          Skills
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Skills" />
        </Col>
      </Form.Group>
    </Form>
  );
};
