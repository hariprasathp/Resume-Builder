import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const HeaderComponent: React.FC = observer(() => {
  const { resumeStore } = useStore();

  const onChange = (
    event: React.ChangeEvent<
      (HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) & {
        key: number;
      }
    >
  ) => {
    // const index = event.currentTarget["key"];
    const propName = event.currentTarget.name;
    const value = event.currentTarget.value;
    resumeStore.header.update(propName, value);
  };
  return (
    <>
      <Form style={{ padding: "5%" }}>
        <Form.Group as={Row} controlId="formHorizontalName">
          <Form.Label column sm={3}>
            Full Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Full Name"
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalAddress">
          <Form.Label column sm={3}>
            Address
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="address"
              type="text "
              placeholder="Enter Address"
              onChange={onChange}
            />
          </Col>
          <Col sm={5} style={{ paddingTop: 10 }}>
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter City"
              onChange={onChange}
            />
          </Col>
          <Col sm={5} style={{ paddingTop: 10 }}>
            <Form.Control
              type="text "
              name="state"
              placeholder="Enter State"
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalMobile">
          <Form.Label column sm={3}>
            Mobile
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              onChange={onChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={onChange}
            />
          </Col>
        </Form.Group>
      </Form>
      ;
    </>
  );
});
