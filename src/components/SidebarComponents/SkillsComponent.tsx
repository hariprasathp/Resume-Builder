import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { useStore } from "../../store";
import { observer } from "mobx-react";
import { skills } from "../../assets/skills";

export const SkillsComponent: React.FC = observer(() => {
  const { resumeStore } = useStore();

  const onChange = (selected: string[]) => {
    resumeStore.skills.update(selected);
  };

  return (
    <Form style={{ padding: "5%" }}>
      <Form.Group as={Row} controlId="formHorizontalSkills">
        <Form.Label column sm={3}>
          Skills
        </Form.Label>
        <Col sm={10}>
          {/* <Form.Control
            type="text"
            onChange={onChange}
            placeholder="Enter Institute Name"
            defaultValue="Your Skills"
          ></Form.Control> */}
          <Typeahead multiple onChange={onChange} options={skills} />
        </Col>
      </Form.Group>
    </Form>
  );
});
