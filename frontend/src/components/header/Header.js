import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <img
          src="newslogo.png"
          alt=""
          width="100"
          height="70"
          className="d-inline-block align-text-top"
        />
        <Link to='/form'>Input</Link>
        <Link to='/dashboard'>Dashboard</Link>

        <span className="h12">News and Events</span>
      </div>
    </nav>
  );
}
