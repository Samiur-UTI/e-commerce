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
        <div>
          <NavigationBar />
          <Drawer />
        </div>
      );
    }
  };

  return <>{onWidthChange()}</>;
};

export default Dashboard;
