import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Podcast.css';
import './Global.css';
import MagnetLines from '../components/MagnetLines';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowRight } from 'react-icons/fa';
import { FaPenClip } from 'react-icons/fa6';

// 1. Define your tag-to-color mapping here
const tagColors = {
    'AI Policy': '#fde047', // Yellow
    'Open AI': '#60a5fa',   // Blue
    'AI Harm': '#f87171',   // Red
    'AI & Cognition': '#818cf8', // Indigo
    // Add any other tags and their desired colors here
};

// 2. Create a small, reusable Tag component
const Tag = ({ children }) => {
    // Look up the color from the map, or use a default gray if not found
    const backgroundColor = tagColors[children] || '#6b7280';

    const tagStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <div className="tag" style={tagStyle}>
            {children}
        </div>
    );
};


function Podcast() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="podcast">
            <Navbar />
            <div className="podcast-panel">
                <MagnetLines
                    rows={12}
                    columns={12}
                    containerSize="100%"
                    lineColor="rgba(255, 255, 255, 0.3)"
                    lineWidth="1px"
                    lineHeight="20px"
                    baseAngle={-45}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
                />
                <div className="podcast-header" data-aos="fade-up">
                    <p>
                        Coming <span class="highlighted-text">Soon.</span> Stay tuned.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Podcast;