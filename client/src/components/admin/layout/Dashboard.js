import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useWindowDimensions from "../../../hooks/UseDimension";
import NavigationBar from "./NavigationBar";

const Dashboard = () => {
  const { windowsWidth } = useWindowDimensions();

  const onWidthChange = () => {
    if (windowsWidth < 768) {
      return (
        <Container fluid>
          <Row>
            <Col>EasyCart</Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row>
            <Col lg={2} md={3}>
              EasyCart
            </Col>
            <Col lg={10} md={9}>
              <NavigationBar />
            </Col>
          </Row>
        </Container>
      );
    }
  };

  return onWidthChange();
};

export default Dashboard;
