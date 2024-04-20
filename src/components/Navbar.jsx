import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="../../public/images/logo.jpg"
            alt="Freaky Fashion Logo"
          />
        </Link>
      </div>
      <SearchBar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories/jackets">Vinterjackor</Link>
        </li>
        <li>
          <Link to="/categories/shirts">T-Shirts</Link>
        </li>
        <li>
          <Link to="/my-account">Mitt Konto</Link>
        </li>
        <li>
          <Link to="/support">Kundtjänst</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
