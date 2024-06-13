"use client";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'
const HowWork = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="how-works second">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h5 className="sub-title">IMPROVE WITH COURSES & COACHES</h5>
                                <h2 className="title">Explore our Coaches</h2>
                                <p>Find Coaches of your eSports game</p>
                            </div>
                        </div>
                    </div>
                    <div className="popup-section justify-content-center text-center">
                        <h4>see how it works</h4>
                        <div className="popup-area pt-120 pb-120">
                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                <span onClick={() => setOpen(true)} className="mfp-iframe popupvideo position-absolute">
                                    <img src="/images/icon/popup-icon.png" alt="icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row main-content">
                        <div className="col-md-4">
                            <div className="single-item text-center">
                                <div className="thumb">
                                    <img src="/images/icon/how-works-icon-1.png" alt="icon" />
                                    <span className="xlr">01</span>
                                </div>
                                <div className="text-area">
                                    <h5>Choose Your Game</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-item text-center">
                                <div className="thumb">
                                    <img src="/images/icon/how-works-icon-2.png" alt="icon" />
                                    <span className="xlr">02</span>
                                </div>
                                <div className="text-area">
                                    <h5>Find Your Coach</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-item text-center">
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
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="Djz8Nc0Qxwk" onClose={() => setOpen(false)} />
        </section>
    );
};

export default HowWork;