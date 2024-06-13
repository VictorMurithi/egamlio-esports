import Link from 'next/link';
import React from 'react';

const Game = () => {
    return (
        <section className="games index-2">
            <div className="overlay pt-120 pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h5 className="sub-title">Gaming Masterclasses & Coaching</h5>
                                <h2 className="title">Optimize Your Skill Set</h2>
                                <p>A professional trainer will help you make better decisions, know what to watch out for, and level up quickly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <div className="thumb">
                                    <img src="/images/games-img-1.png" className="w-100" alt="icon" />
                                    <span className="mdr">3 Coaches</span>
                                </div>
                                <div className="text-area">
                                    <h5>Fortnite</h5>
                                    <div className="footer d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="star-area">
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                            </div>
                                            <p className="mdr">
                                                <span>240</span>
                                                <span>VOTES</span>
                                            </p>
                                        </div>
                                        <p className="mdr">$20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <div className="thumb">
                                    <img src="/images/games-img-2.png" className="w-100" alt="icon" />
                                    <span className="mdr">3 Coaches</span>
                                </div>
                                <div className="text-area">
                                    <h5>Rainbow Six</h5>
                                    <div className="footer d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="star-area">
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                            </div>
                                            <p className="mdr">
                                                <span>240</span>
                                                <span>VOTES</span>
                                            </p>
                                        </div>
                                        <p className="mdr">$20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-item">
                                <div className="thumb">
                                    <img src="/images/games-img-3.png" className="w-100" alt="icon" />
                                    <span className="mdr">3 Coaches</span>
                                </div>
                                <div className="text-area">
                                    <h5>league of legends</h5>
                                    <div className="footer d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="star-area">
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                            </div>
                                            <p className="mdr">
                                                <span>240</span>
                                                <span>VOTES</span>
                                            </p>
                                        </div>
                                        <p className="mdr">$20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center mt-40">
                            <Link href="coaching" className="cmn-btn alt">browse more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Game;