import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../components/context/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Login from "./Login";
import Privateroutes from "./Privateroutes";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-item justify-content-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <Privateroutes exact path="/" component={Dashboard} />
                <Privateroutes
                  path="/update-profile"
                  component={UpdateProfile}
                />

                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}
export default App;
