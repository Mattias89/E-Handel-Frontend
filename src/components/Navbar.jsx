import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav>
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/images/logo.jpg" alt="Freaky Fashion Logo" />
        </Link>
      </div>
      <SearchBar />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Byxor</Link>
        </li>
        <li>
          <Link>T-Shirts</Link>
        </li>
        <li>
          <Link>Mitt Konto</Link>
        </li>
        <li>
          <Link>Kundtjänst</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
