"use client"
import Link from "next/link";
import { useState } from "react";
import ModalVideo from 'react-modal-video'

const Howwork = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="how-works index-2">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6 order-xl-0 order-1">
                            <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                <div className="bg-area">
                                    <img className="bg-item" src="/images/how-works-popup.png" alt="image" />
                                </div>
                                <span onClick={() => setOpen(true)} className="mfp-iframe popupvideo position-absolute">
                                    <img src="/images/icon/popup-icon.png" alt="icon" />
                                </span>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="section-header">
                                <h5 className="sub-title">(IN LESS THAN 3-MINUTES)</h5>
                                <h2 className="title">BOOK YOUR FIRST SESSION</h2>
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
           <ModalVideo channel='youtube' isOpen={isOpen} videoId="Djz8Nc0Qxwk" onClose={() => setOpen(false)} />
        </section>
    );
};

export default Howwork;