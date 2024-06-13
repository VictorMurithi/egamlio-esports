import Link from 'next/link';
import React from 'react';

const Explore = () => {
    return (
        <section className="explore-now">
                <div className="overlay pt-120">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-text text-center">
                                    <h5 className="sub-title">IMPROVE WITH COURSES & COACHES</h5>
                                    <h2 className="title">ENJOY YOUR GAMING EXPERIENCE MORE</h2>
                                    <p>Egamlio is a platform dedicated to helping players get better at the video games and esports they love most</p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area text-center">
                                    <div className="icon-area">
                                        <img src="/images/icon/explore-now-icon-1.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <p className="mdr">INTERACTIVE</p>
                                        <h5>COURSES</h5>
                                    </div>
                                    <Link href="register" className="cmn-btn">ENROLL</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area text-center">
                                    <div className="icon-area">
                                        <img src="/images/icon/explore-now-icon-2.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <p className="mdr">LIVE 1 TO 1</p>
                                        <h5>COACHING</h5>
                                    </div>
                                    <Link href="register" className="cmn-btn">BOOK NOW</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area text-center">
                                    <div className="icon-area">
                                        <img src="/images/icon/explore-now-icon-3.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <p className="mdr">EVENTS & DISCORD</p>
                                        <h5>COMMUNITY</h5>
                                    </div>
                                    <Link href="register" className="cmn-btn">JOIN US</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Explore;