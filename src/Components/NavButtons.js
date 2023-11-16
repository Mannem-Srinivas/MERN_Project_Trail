import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons() {
  return (
    <div className="NavButtons">
      <Link to="/" className="btn btn-outline-primary">
        <i className="fa-solid fa-house fa-lg me-2"></i>Home
      </Link>
      <Link to="/" className="btn btn-outline-primary">
        About
      </Link>
      <Link to="/" className="btn btn-outline-primary">
        <i className="fa-solid fa-calendar fa-lg me-2"></i>Events
      </Link>

      {/* Search */}
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Events"
          aria-label="Search"
        />
        <button className="btn btn-outline-primary d-flex align-items-center justify-content-center" type="submit">
          <i className="fa-solid fa-magnifying-glass fa-lg me-2" />Search
        </button>
      </form>
    </div>
  );
}