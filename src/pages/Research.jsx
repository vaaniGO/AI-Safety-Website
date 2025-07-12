import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Research.css';
import MagnetLines from '../components/MagnetLines';
import Navbar from '../components/Navbar';
import { FaArrowRight, FaBookOpen, FaCalendar, FaChartLine, FaClock, FaPen, FaReadme, FaResearchgate, FaUsers } from 'react-icons/fa';
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


function Research() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="research">
            <Navbar />
            <div className="research-panel">
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
                <div className="research-header" data-aos="fade-up">
                    <p>
                        Exploring the frontiers of AI safety through rigorous research and collaboration.
                    </p>
                </div>
            </div>

            <div className="research-content">
                <div className="research-section" data-aos="fade-up">
                    <div className="article-info">
                        <FaPenClip />
                        <div className="date">
                            11th July, 2025
                        </div>
                    </div>
                    {/* 3. Use the new Tag component instead of divs */}
                    <div className="tag-container">
                        <Tag>AI Policy</Tag>
                        <Tag>Open AI</Tag>
                    </div>
                    <h2>California Senator decides not to hold developers accountable</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className="read-more">
                        <FaArrowRight />
                        <span>Read more</span>
                    </div>
                </div>

                <div className="research-section" data-aos="fade-up" data-aos-delay="200">
                    <div className="article-info">
                        <FaPenClip />
                        <div className="date">
                            11th July, 2025
                        </div>
                    </div>
                    {/* Use the new Tag component here as well */}
                    <div className="tag-container">
                        <Tag>AI Harm</Tag>
                        <Tag>AI & Cognition</Tag>
                    </div>
                    <h2>AI makes developers spend more time instead of less</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className="read-more">
                        <FaArrowRight />
                        <span>Read more</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Research;