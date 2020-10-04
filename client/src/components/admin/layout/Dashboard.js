import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} md={3} sm={12}>EasyCart</Col>
        <Col lg={10} md={9}sm={0}>
          <NavigationBar />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
