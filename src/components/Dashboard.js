import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
      <div className="card" style={{height:"90vh"}}>
        <div className="card-header">
          <div className="dashboard-header" >
            <span style={{margin: "auto 0px"}}>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
            </span>
            <span style={{margin: "auto 0px"}}>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Profile:</strong> Admin
            </span>
            <Link to="/update-profile" className="btn btn-primary">
              Update Profile
            </Link>
            <Button variant="link" onClick={handleLogout} className="red-button">
              Log Out
            </Button>
          </div>
        </div>


        <div className="card-body">
          <h5 className="card-title"> Content Header </h5>
          <p class="card-text">Content Text</p>
        </div>
      </div>
  );
}
