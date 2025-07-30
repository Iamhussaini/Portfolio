import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const MyCvNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar" style={{ height: "70px", minHeight: "70px" }}>
      <div className="navbar-container">
        <ul className="nav-links" style={{marginLeft: 0}}>
          <li><a href="#home" onClick={e => {e.preventDefault(); navigate('/');}}>Home</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default MyCvNavbar;
