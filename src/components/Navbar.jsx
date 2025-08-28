import AOS from 'aos';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar" data-aos="fade-down">
            <div className="logo">
                <img src={require('./logo.png')} alt="AI Safety Logo" className="logo-image" />
                <h1>Ashoka AI Initiative (A student initiative)</h1>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/pages/Research">Research</Link>
                <Link to="/pages/Events">Events</Link>
                {/* <Link to="/pages/events">events</Link> */}
            </div>
        </nav>
    );
}

export default Navbar;