import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

const HowWorks = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="how-works">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h5 className="sub-title">Gaming Masterclasses & Coaching</h5>
                                <h2 className="title">How Egamlio works</h2>
                                <p>A professional trainer will help you make better decisions, know what to watch out for, and level up quickly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
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
                            <div className="single-item mid text-center">
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
                    <div className="row pt-120 justify-content-center">
                        <div className="col-lg-8">
                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                <div className="bg-area">
                                    <img className="bg-item" src="/images/how-works-popup.png" alt="image" />
                                </div>
                                <span onClick={()=> setOpen(true)} className="mfp-iframe popupvideo position-absolute">
                                    <img src="/images/icon/popup-icon.png" alt="icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="Djz8Nc0Qxwk" onClose={() => setOpen(false)} />
        </section>
    );
};

export default HowWorks;