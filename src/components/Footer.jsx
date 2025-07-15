import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <nav className="footer">
            <h1 className="logo">AI Safety | An Ashoka Students' Initiative</h1>

            <div className="emails">
                <h1>Reach out to us:</h1>
                <h1>
                    <a href="mailto:pranav.aggarwal_ug2023@ashoka.edu.in">pranav.aggarwal_ug2023@ashoka.edu.in</a>
                </h1>
                <h1>
                    <a href="mailto:vaani.goenka_ug2024@ashoka.edu.in">vaani.goenka_ug2024@ashoka.edu.in</a>
                </h1>
            </div>
        </nav>
    );
}

export default Footer;