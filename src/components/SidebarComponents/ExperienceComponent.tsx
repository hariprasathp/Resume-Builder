import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useStore, Experience } from "../../store";
import { observer } from "mobx-react";

interface IExperienceFormProps {
  experience: Experience;
}

const ExperienceForm: React.FC<IExperienceFormProps> = observer(
  ({ experience }: IExperienceFormProps) => {
    const onChange = (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const propName = event.currentTarget.name;
      const value = event.currentTarget.value;
      experience.update(propName, value);
    };

    return (
      <Form>
        <Form.Group as={Row} controlId="formHorizontalCompany">
          <Form.Label column sm={3}>
            Company
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter Company"
              name="company"
              onChange={onChange}
              defaultValue={experience.company}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalDesignation">
          <Form.Label column sm={3}>
            Designation
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Enter Designation"
              name="designation"
              onChange={onChange}
              defaultValue={experience.designation}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalExperienceYear">
          <Form.Label column sm={3}>
            Year
          </Form.Label>
          <Col sm={3}>
            <Form.Control
              type="number"
              placeholder="From"
              name="yearStart"
              onChange={onChange}
              defaultValue={experience.yearStart}
            />
          </Col>
          -
          <Col sm={3}>
            <Form.Control
              type="number"
              placeholder="To"
              name="yearEnd"
              onChange={onChange}
              defaultValue={experience.yearEnd}
            />
          </Col>
        </Form.Group>
      </Form>
    );
  }
);

export const ExperienceComponent: React.FC = observer(() => {
  const { resumeStore } = useStore();

  const buttonOnClick = () => {
    resumeStore.addNewExperience();
  };

  return (
    <div className="text-center" style={{ padding: "5%" }}>
      {resumeStore.experience.map((item, index) => {
        return <ExperienceForm key={index} experience={item} />;
      })}
      <Button onClick={buttonOnClick}>Add Experience</Button>
    </div>
  );
});
