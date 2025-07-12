import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BlogPost.css';
import MagnetLines from '../components/MagnetLines';
import Navbar from '../components/Navbar';
import { FaPenClip, FaArrowLeft, FaShare, FaHeart, FaBookmark } from 'react-icons/fa6';

function BlogPost() {
    const tagColorMap = {
        "AI Policy": "rgba(255, 235, 59, 0.8)",     // Yellow
        "Open AI": "rgba(76, 175, 80, 0.8)",       // Green
        "AI Harm": "rgba(244, 67, 54, 0.8)",       // Red
        "AI & Cognition": "rgba(156, 39, 176, 0.8)", // Purple
        "AI Safety": "rgba(33, 150, 243, 0.8)",    // Blue
        "Research": "rgba(255, 152, 0, 0.8)",      // Orange
        "Ethics": "rgba(121, 85, 72, 0.8)",        // Brown
        "Machine Learning": "rgba(96, 125, 139, 0.8)" // Blue Grey
    };

    const getTagStyle = (tagName) => {
        return {
            backgroundColor: tagColorMap[tagName] || "rgba(158, 158, 158, 0.8)"
        };
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="blog-post">
            <Navbar />
            <div className="blog-post-panel">
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
                <button className="back-button">
                    <FaArrowLeft />
                    Back to Research
                </button>
                <div className="blog-post-header" data-aos="fade-up">
                    <div className="post-meta">
                        <div className="article-info">
                            <FaPenClip />
                            <div className="date">
                                11th July, 2025
                            </div>
                        </div>
                        <div className="post-actions">
                            <button className="action-btn">
                                <FaHeart />
                            </button>
                            <button className="action-btn">
                                <FaBookmark />
                            </button>
                            <button className="action-btn">
                                <FaShare />
                            </button>
                        </div>
                    </div>
                    <div className="tag-container">
                        <div className="tag" style={getTagStyle("AI Policy")}>AI Policy</div>
                        <div className="tag" style={getTagStyle("Open AI")}>Open AI</div>
                    </div>
                    <h1>California Senator decides not to hold developers accountable</h1>
                    <p className="subtitle">
                        An in-depth analysis of the recent policy decisions and their implications for AI development and regulation.
                    </p>
                    <div className="view-summary-btn-container">
                        <button className="action-btn">
                            View Summary
                        </button>
                    </div>
                </div>
            </div>

            <div className="blog-post-content">
                <article className="post-article" data-aos="fade-up">
                    <div className="content-section">
                        <h2>The Current State of AI Regulation</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </p>
                    </div>

                    <div className="content-section">
                        <h2>Policy Implications</h2>
                        <p>
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </p>
                        <blockquote>
                            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form."
                        </blockquote>
                        <p>
                            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        </p>
                    </div>

                    <div className="content-section">
                        <h2>Future Considerations</h2>
                        <p>
                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <ul>
                            <li>Enhanced regulatory frameworks for AI development</li>
                            <li>Greater transparency requirements for AI systems</li>
                            <li>Improved accountability measures for developers</li>
                            <li>Better public engagement in AI policy decisions</li>
                        </ul>
                    </div>

                    <div className="content-section">
                        <h2>Conclusion</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                        </p>
                        <p>
                            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                    </div>
                </article>

                <div className="post-footer" data-aos="fade-up">
                    <div className="author-info">
                        <div className="author-avatar">
                            <div className="avatar-placeholder">AU</div>
                        </div>
                        <div className="author-details">
                            <h3>Author Name</h3>
                            <p>Research Lead at AI Safety Initiative</p>
                        </div>
                    </div>
                    <div className="post-engagement">
                        <div className="engagement-stats">
                            <span>23 likes</span>
                            <span>5 bookmarks</span>
                            <span>12 shares</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;