import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/theme.scss";
import "../../../styles/AdminLogin.css";

const AdminLogin = () => {
  //admin login form
  const formRender = () => {
    return (
      <form>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <input type="submit" value="Login" className="btn btn-dark" />
      </form>
    );
  };

  const navbarRender = () => {
    return (
      <Navbar
        bg="dark"
        variant="dark"
        style={{ paddingTop: "0.3125rem", paddingBottom: ".3125rem" }}
      >
        <Navbar.Brand as={Link} to="/admin" className="navbar-brand">
          Easycart
        </Navbar.Brand>
      </Navbar>
    );
  };
  return (
    <div>
      {navbarRender()}
      <div className="login-container">
        <Card>
          <Card.Header className="text-light text-center cardHeader">
            <FontAwesomeIcon icon={faUserShield} style={{ fontSize: "2rem" }} />
            <div className="p-1">Admin Login</div>
          </Card.Header>
          <Card.Body>{formRender()}</Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
