import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../../hooks/UseDimension";
import NavigationBar from "./NavigationBar";
import Drawer from "./Drawer";

const Dashboard = () => {
  const { windowsWidth } = useWindowDimensions();

  const onWidthChange = () => {
    if (windowsWidth < 768) {
      return (
        <Container fluid>
          <Row>
            <Col className="navBrand-sm">
              <div>
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  EasyCart
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container fluid>
          <Row>
            <Col lg={2} md={3} className="navBrand">
              <div>
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  EasyCart
                </Link>
              </div>
            </Col>
            <Col lg={10} md={9}>
              <NavigationBar />
            </Col>
          </Row>
          <Row>
            <Col lg={2} md={3}>
              <Drawer />
            </Col>
            <Col lg={10} md={9}>
              
            </Col>
          </Row>
        </Container>
      );
    }
  };

  return <>{onWidthChange()}</>;
};

export default Dashboard;
