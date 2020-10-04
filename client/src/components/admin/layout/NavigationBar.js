// package import
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

// component import

// style import

const NavigationBar = () => {
  return (
    <Navbar bg="light" variant="light"  className="px-5">
      {/* <Navbar.Brand as={Link} to="/admin">
        Easycart
      </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto d-flex align-items-center">
          {/* Notification Dropdown Starts */}
          <NavDropdown
            title={
              <div className="nav-dropdown">
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ fontSize: "1.5rem"}}
                  className="icon"
                />
              </div>
            }
            className="notification mr-3"
            alignRight
            id="dropdown-menu-align-right"
          >
            <NavDropdown.Item as={Link} to="/orders">
              5 new orders to fullfill
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/orders">
              Ricky Monster has ordered 3 new products
            </NavDropdown.Item>
          </NavDropdown>
          {/* Notification Dropdown Ends */}

          {/* Admin Profile Dropdown Starts */}
          <NavDropdown
            title={
              <div className="nav-dropdown">
                <Image
                  src="https://barefootmedia.co.uk/wp-content/uploads/2016/01/Chris-user-profile.jpg"
                  roundedCircle
                  height="40"
                  width="40"
                  className="mr-2 pa-0"
                />
                John Doe
              </div>
            }
            id="basic-nav-dropdown"
            className="nav-profile"
          >
            {/* Dropdown Options */}
            <NavDropdown.Item as={Link} to="/admin/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/admin/login">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          {/* Admin Profile Dropdown Starts Ends */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
