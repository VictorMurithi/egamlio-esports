import Link from 'next/link';
import React from 'react';

const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="overlay pb-120">
                <div className="container">
                    <div className="main-content">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-xl-6 cus-mar">
                                <div className="section-text">
                                    <h5 className="sub-title">Why Choose Us</h5>
                                    <h2 className="title">Make your game play shine</h2>
                                    <p>Start with coaching from our gaming experts. Our coaches teach you all the tips to be player one in our Masterclass coaching video sessions</p>
                                </div>
                                <Link href="register" className="cmn-btn alt">Join Now</Link>
                            </div>
                            <div className="col-xl-6 res-mar">
                                <div className="row align-items-center">
                                    <div className="col-6 cus-mar">
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/icon/choose-us-icon-1.png" alt="icon" />
                                            </div>
                                            <h5>Get mentored by the Best in the Game.</h5>
                                        </div>
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/icon/choose-us-icon-2.png" alt="icon" />
                                            </div>
                                            <h5>Experience the grind of a Pro.</h5>
                                        </div>
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/icon/choose-us-icon-3.png" alt="icon" />
                                            </div>
                                            <h5>Engage in Interactive sessions</h5>
                                        </div>
                                    </div>
                                    <div className="col-6 cus-mar">
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/icon/choose-us-icon-4.png" alt="icon" />
                                            </div>
                                            <h5>Compete in Egamlio Tournaments.</h5>
                                        </div>
                                        <div className="single-item">
                                            <div className="thumb">
                                                <img src="/images/icon/choose-us-icon-5.png" alt="icon" />
                                            </div>
                                            <h5>Connect with top Esports teams.</h5>
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

export default ChooseUs;