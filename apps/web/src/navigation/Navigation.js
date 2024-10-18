import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navigation;
