import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(): JSX.Element {
  return (
    <header className="navbar px-3">
      <div className="header">
        <div className="header-brand">
          <Link to="/" className="btn-link">
            Always Quiz
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
