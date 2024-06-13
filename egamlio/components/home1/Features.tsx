import Link from 'next/link';
import React from 'react';

const Features = () => {
    return (
        <section className="features">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row cus-mar align-items-center">
                        <div className="col-lg-6">
                            <div className="section-top">
                                <div className="section-text">
                                    <h5 className="sub-title">Become a successful gamer</h5>
                                    <h2 className="title">Get the Esports Coaching You Want</h2>
                                    <p>Find gamers who care about the same things you do — whether you have shared values or common goals — and connect with them in a meaningful way.</p>
                                </div>
                                <div className="btn-area">
                                    <Link href="register" className="cmn-btn">Join Now!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-6">
                                    <div className="feature-item text-center">
                                        <div className="content-font">
                                            <div className="thumb">
                                                <img src="/images/icon/feature-icon-1.png" alt="icon" />
                                            </div>
                                            <h5>Community</h5>
                                        </div>
                                        <div className="content-back">
                                            <h5>Community</h5>
                                            <p>If there is any problem you have, we wont hesitate to solve it, just ask us!</p>
                                        </div>
                                    </div>
                                    <div className="feature-item text-center">
                                        <div className="content-font">
                                            <div className="thumb">
                                                <img src="/images/icon/feature-icon-2.png" alt="icon" />
                                            </div>
                                            <h5>Responsive</h5>
                                        </div>
                                        <div className="content-back">
                                            <h5>Responsive</h5>
                                            <p>If there is any problem you have, we wont hesitate to solve it, just ask us!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mt-60">
                                    <div className="feature-item text-center">
                                        <div className="content-font">
                                            <div className="thumb">
                                                <img src="/images/icon/feature-icon-3.png" alt="icon" />
                                            </div>
                                            <h5>Winner</h5>
                                        </div>
                                        <div className="content-back">
                                            <h5>Winner</h5>
                                            <p>If there is any problem you have, we wont hesitate to solve it, just ask us!</p>
                                        </div>
                                    </div>
                                    <div className="feature-item text-center">
                                        <div className="content-font">
                                            <div className="thumb">
                                                <img src="/images/icon/feature-icon-4.png" alt="icon" />
                                            </div>
                                            <h5>Endurance</h5>
                                        </div>
                                        <div className="content-back">
                                            <h5>Endurance</h5>
                                            <p>If there is any problem you have, we wont hesitate to solve it, just ask us!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;