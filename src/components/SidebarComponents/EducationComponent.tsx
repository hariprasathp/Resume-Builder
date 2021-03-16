import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useStore, Education } from "../../store";
import { observer } from "mobx-react";

interface IEducationFormProps {
  education: Education;
}

const EducationForm: React.FC<IEducationFormProps> = observer(
  ({ education }: IEducationFormProps) => {
    const onChange = (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const propName = event.currentTarget.name;
      const value = event.currentTarget.value;
      education.update(propName, value);
    };
    return (
      <Form>
        <Form.Group as={Row} controlId="formHorizontalInstitute">
          <Form.Label column sm={3}>
            Institute
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="institute"
              onChange={onChange}
              placeholder="Enter Institute Name"
              defaultValue={education.institute}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalDegree">
          <Form.Label column sm={3}>
            Degree
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="degree"
              onChange={onChange}
              placeholder="Enter Degree"
              defaultValue={education.degree}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalYear">
          <Form.Label column sm={3}>
            Graduated Year
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="graduatedYear"
              onChange={onChange}
              placeholder="Enter Year Graduated"
              defaultValue={education.graduatedYear}
            />
          </Col>
        </Form.Group>
      </Form>
    );
  }
);
export const EducationComponent: React.FC = observer(() => {
  const { resumeStore } = useStore();

  const buttonOnClick = () => {
    resumeStore.addNewEducation();
  };
  return (
    <div className="text-center" style={{ padding: "5%" }}>
      {resumeStore.education.map((item, index) => {
        return <EducationForm key={index} education={item} />;
      })}
      <Button onClick={buttonOnClick}>Add Education</Button>
    </div>
  );
});
