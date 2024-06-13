import React from 'react';

const HowWork = () => {
    return (
        <section className="how-works index-2 index-3">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 order-lg-0 order-1">
                            <div className="sec-image d-rtl">
                                <img src="/images/character.png" alt="image" className="max-un" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-header">
                                <h5 className="sub-title">Gaming Masterclasses & Coaching</h5>
                                <h2 className="title">How Egamlio works</h2>
                                <p>With Egamlio you book your sessions, instantly, and chat with coaches in real time (without breaking the bank).</p>
                            </div>
                            <div className="cus-mar">
                                <div className="single-item">
                                    <div className="thumb">
                                        <img src="/images/icon/how-works-icon-1.png" alt="icon" />
                                        <span className="xlr">01</span>
                                    </div>
                                    <div className="text-area">
                                        <h5>Choose Your Game</h5>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="thumb">
                                        <img src="/images/icon/how-works-icon-2.png" alt="icon" />
                                        <span className="xlr">02</span>
                                    </div>
                                    <div className="text-area">
                                        <h5>Find Your Coach</h5>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="thumb">
                                        <img src="/images/icon/how-works-icon-3.png" alt="icon" />
                                        <span className="xlr">03</span>
                                    </div>
                                    <div className="text-area">
                                        <h5>Become a pro</h5>
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

export default HowWork;