import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Switch, Router, Route, Redirect, Link } from "react-router-dom";
import {
  ExperienceComponent,
  EducationComponent,
  SkillsComponent,
  HeaderComponent,
} from "../../components";

export const Sidebar: React.FC = () => {
  return (
    <>
      <Card style={{ position: "sticky", minHeight: "20vh" }}>
        <Nav
          variant="pills"
          defaultActiveKey="/home"
          style={{ justifyContent: "space-evenly" }}
        >
          <Nav.Item>
            <Nav.Link as={Link} to="/header">
              HEADER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/experience">
              EXPERIENCE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/education">
              EDUCATION
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/skills">
              SKILLS
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route path="/header" component={HeaderComponent} />
          <Route path="/experience" component={ExperienceComponent} />
          <Route path="/education" component={EducationComponent} />
          <Route path="/skills" component={SkillsComponent} />
          <Route path="/" render={() => <Redirect to="/header" />} />
        </Switch>
      </Card>
    </>
  );
};
