import Link from 'next/link';
import React from 'react';

const TopCoaches = () => {
    return (
        <section className="top-coches">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-text text-center">
                                    <h5 className="sub-title">Start your journey today!</h5>
                                    <h2 className="title">TOP COACHES</h2>
                                    <p>Ready to improve? Learn from the best.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-item text-center">
                                    <div className="thumb">
                                        <img src="/images/top-coches-1.png" alt="image" />
                                    </div>
                                    <h5>Zaire Dokidis</h5>
                                    <p className="mdr">Age of Empires 2</p>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-twitch"></i></Link>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-item text-center">
                                    <div className="thumb">
                                        <img src="/images/top-coches-2.png" alt="image" />
                                    </div>
                                    <h5>Zaire Dorwart</h5>
                                    <p className="mdr">Learn dota 2</p>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-twitch"></i></Link>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-item text-center">
                                    <div className="thumb">
                                        <img src="/images/top-coches-3.png" alt="image" />
                                    </div>
                                    <h5>Ahmad Dokidis</h5>
                                    <p className="mdr">League Of Legends</p>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-twitch"></i></Link>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-item text-center">
                                    <div className="thumb">
                                        <img src="/images/top-coches-4.png" alt="image" />
                                    </div>
                                    <h5>Lydia Torff</h5>
                                    <p className="mdr">Age of Empires 2</p>
                                    <div className="social">
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-twitch"></i></Link>
                                        <Link href="#"><i className="fab fa-youtube"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt-40">
                                <Link href="#" className="cmn-btn alt">browse more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default TopCoaches;