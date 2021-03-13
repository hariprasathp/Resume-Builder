import React from "react";
import { Card, Nav } from "react-bootstrap";
import { Router, Route, Redirect } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import {
  ExperienceComponent,
  EducationComponent,
  SkillsComponent,
  HeaderComponent,
} from "../../components";
import { createBrowserHistory } from "history";

export const Sidebar: React.FC = () => {
  const customHistory = createBrowserHistory();

  return (
    <>
      <Router history={customHistory}>
        <Card style={{ position: "sticky", top: 2 }}>
          <Nav
            variant="pills"
            defaultActiveKey="/home"
            style={{ justifyContent: "space-evenly" }}
          >
            <Nav.Item>
              <Nav.Link href="/header">HEADER</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/experience">EXPERIENCE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/education">EDUCATION</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/skills">SKILLS</Nav.Link>
            </Nav.Item>
          </Nav>

          <Switch>
            <Route exact path="/" component={HeaderComponent} />
            <Route exact path="/header" component={HeaderComponent} />
            <Route path="/experience" component={ExperienceComponent} />
            <Route path="/education" component={EducationComponent} />
            <Route path="/skills" component={SkillsComponent} />
          </Switch>
        </Card>
      </Router>
    </>
  );
};
