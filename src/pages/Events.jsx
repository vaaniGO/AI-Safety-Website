import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import './Research.css';
import './Events.css';
import MagnetLines from '../components/MagnetLines';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { FaPenClip } from 'react-icons/fa6';
import GoogleCalendarDayEmbed from '../components/calendar-day';

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
        <div className="events">
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
                        Research Reading Groups & Events
                    </p>
                    <div className="arrow-container">
                        <FaArrowDown />
                    </div>
                </div>
            </div>

            <div className="body">


                <div className="info-section">
                    <h2>Research Reading Group (RRG) Logistics</h2>
                    <p>
                        Research Reading Groups enable a critical engagement with and a deeper understanding of systems, their development and limitations. At AAII, we aim to foster a culture of rigorous research and inquiry. The RRGs are a space for collaborative learning, discussion and exploration of key topics in AI safety.
                        The first few meetings will focus on foundational papers related to our research themes (one if which is Safety in RL). Subsequently, we will explore more recent papers and topics of interest to the group. Members are encouraged to suggest papers and topics for future meetings.

                        RRG meetings take place on Tuesdays and Thursdays. Location, timings, pre-reads and outcomes are available in the google calendar event descriptions. Members of Ashoka University are welcome to join the meetings in person.
                    </p>

                </div>

                <div className="calendar-section">
                    <h2>Upcoming Events</h2>


                    <div className="calendar-container">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=c_cc2a19d4c35bda6dbaad33e35989838c3a06abdad484cf62c5b96f6adeee6020%40group.calendar.google.com&ctz=Asia%2FKolkata&bgcolor=%23000000&color=%23ffffff&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
                            style={{
                                border: 0,
                                width: '100%',
                                height: '600px',
                                borderRadius: '12px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                filter: 'invert(1) hue-rotate(180deg)',
                                background: '#000000'
                            }}
                            frameBorder="0"
                            scrolling="no"
                            title="Events Calendar"
                        ></iframe>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default Research;