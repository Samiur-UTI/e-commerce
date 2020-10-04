// packages import
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components import
import Dashboard from "./components/admin/layout/Dashboard";
import AdminLogin from "./components/admin/pages/AdminLogin";
import AdminProfile from "./components/admin/pages/AdminProfile";

const app = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* Admin Routes */}
          <Route path="/admin" exact component={Dashboard} />
          <Route path="/admin/login" component={AdminLogin} />
          <Route path="/admin/profile" exact component={AdminProfile} />
        </Switch>
      </Router>
    </div>
  );
};

export default app;
