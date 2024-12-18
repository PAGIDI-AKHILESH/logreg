// src/components/Navbar.js import React from 'react';
import { Link } from 'react-router-dom'; const Navbar = () => {
    return (
    <nav>
     
    <ul>
    <li><Link to="/workshops">Workshops</Link></li>
    <li><Link to="/conferences">Conferences</Link></li>
    <li><Link to="/meetups">Meetups</Link></li>
    </ul>
    </nav>
    );
    };
    export default Navbar;
    