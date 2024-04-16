import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categories/jackets">Vinterjackor</Link></li>
        <li><Link to="/categories/shirts">T-Shirts</Link></li>
        <li><Link to="/my-account">Mitt Konto</Link></li>
        <li><Link to="/support">Kundtjänst</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;