import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <section className="about-us">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1 wow fadeInLeft">
                            <div className="sec-image d-rtl">
                                <img src="/images/about-us-img.png" className="max-un" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInright">
                            <div className="section-text">
                                <h5 className="sub-title">Elite Esports and Game Coaching</h5>
                                <h2 className="title">An Ultimate gaming coaching Platform</h2>
                                <p>Egamlio is a platform for gamers who want to improve their gaming skills by playing with professional gamers.</p>
                                <br />
                                <p>New gamers, say you want to improve your gaming skills, then search for gaming coaches who teach gaming tips and tricks while playing with you online.</p>
                            </div>
                            <div className="btn-area">
                                <Link href="about-us" className="cmn-btn">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;