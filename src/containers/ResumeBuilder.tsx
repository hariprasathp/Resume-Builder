import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar/Sidebar";
import { Sheet } from "./Sheet/Sheet";

export const ResumeBuilder: React.FC = () => {
  return (
    <>
      <Navbar bg="dark" style={{ height: "7vh" }}>
        <h3 style={{ color: "white" }}>Resume Builder</h3>
      </Navbar>
      <Container
        fluid
        style={{
          backgroundColor: "rgba(150,150,150,0.1)",
          padding: "10px 0px",
        }}
      >
        <Row>
          <Col xs={6} md={4}>
            <Sidebar />
          </Col>
          <Col xs={12} md={8} style={{ left: "5%" }}>
            <Sheet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
