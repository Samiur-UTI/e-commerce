// packages import
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components import
import AdminDashboard from "./components/admin/pages/AdminDashboard";
import AdminLogin from "./components/admin/pages/AdminLogin";

const app = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* Admin Routes */}
          <Route path="/admin" exact component={AdminDashboard} />
          <Route path="/admin/login" component={AdminLogin} />
        </Switch>
      </Router>
    </div>
  );
};

export default app;
