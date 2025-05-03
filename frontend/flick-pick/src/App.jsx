import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";

import LoginForm from "./pages/auth/LoginForm";
import SignUpForm from "./pages/auth/signupForm";
import Home from "./pages/dashboard/Home";
import CreatePoll from "./pages/dashboard/createPoll";
import Logout from "./pages/dashboard/logout";
import Settings from "./pages/dashboard/settings";

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/createPoll" element={<CreatePoll />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
