import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import FallingText from '../components/FallingText';
import MagnetLines from '../components/MagnetLines';
import Navbar from '../components/Navbar';


function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="home">
            <Navbar />
            <div className="home-panel">
                <MagnetLines
                    rows={12}
                    columns={12}
                    containerSize="100%"
                    lineColor="rgba(255, 255, 255, 0.3)"
                    lineWidth="1px"
                    lineHeight="20px"
                    baseAngle={0}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
                />
                <p>
                    A RIGOROUS RESEARCH AND DISCUSSION GROUP FOCUSING ON THE BROADEST SENSE OF WHAT IT MEANS TO HAVE GOOD AI
                </p>
            </div>

            <div class="section-1">
                <FallingText
                    text={`AI around us can break easily.`}
                    highlightWords={["AI", "break", "easily"]}
                    highlightClass="highlighted"
                    trigger="auto"
                    backgroundColor="transparent"
                    wireframes={false}
                    gravity={0.56}
                    fontSize="2rem"
                    mouseConstraintStiffness={0.9}
                />
            </div>
        </div>
    );
}

export default Home; 