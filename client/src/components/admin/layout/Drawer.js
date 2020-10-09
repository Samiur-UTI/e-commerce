import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faUser, faList, faLayerGroup, faCaretSquareDown, faCog } from "@fortawesome/free-solid-svg-icons";

const Drawer = () => {
  return (
    <div className="drawer">
      <div className="drawerItem">
        <FontAwesomeIcon
          icon={faHome}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Dashboard
      </div>
      <div className="drawerItem">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Orders
      </div>
      <div className="drawerItem">
        <FontAwesomeIcon
          icon={faUser}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Customers
      </div>
      <div className="drawerItem">
        <FontAwesomeIcon
          icon={faList}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Products
      </div>
      <div className="drawerItem">
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Collections
      </div>
      <div className="drawerItem">
        <FontAwesomeIcon
          icon={faCaretSquareDown}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Navigation
      </div>
      <div className="drawerItem Setting">
        <FontAwesomeIcon
          icon={faCog}
          className="mr-2"
          style={{ fontSize: "1.2rem" }}
        />
        Settings
      </div>
    </div>
  );
};

export default Drawer;
