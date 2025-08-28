import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <nav className="footer">
            <h1 className="logo">Ashoka AI Initiative (A student initiative)</h1>

            <div className="emails">
                <h1>Reach out to us: <span>
                    <a href="mailto:aaii@ashoka.edu.in">aaii@ashoka.edu.in</a></span></h1>
                <h1>Pranav Aggarwal & Vaani Goenka</h1>
            </div>
        </nav>
    );
}

export default Footer;