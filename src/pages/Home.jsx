import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import FallingText from '../components/FallingText';
import MagnetLines from '../components/MagnetLines';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// CREDIT
// Component inspired from Can Tastemel's original work for the lambda.ai landing page
// https://cantastemel.com

import Cubes from '../components/Cubes'

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
                    baseAngle={-45}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
                />
                <p data-aos="fade-up">
                    A group of undergraduate students working to maximise benefit and minimise harm caused by advanced AI systems.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default Home; 