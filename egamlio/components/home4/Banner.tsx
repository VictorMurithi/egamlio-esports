import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <section className="banner-section index index-4">
            <div className="overlay">
                <div className="banner-content">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-xl-8 col-md-8">
                                <div className="main-content">
                                    <div className="top-area section-text text-center">
                                        <h5 className="sub-title">Esport coaching Platform</h5>
                                        <h1 className="title">Take your game to the next level</h1>
                                        <p>Get your game analyzed asynchronously by top quality coaches and start winning</p>
                                    </div>
                                    <div className="bottom-area d-xxl-flex justify-content-center">
                                        <form action="#" className="w-100">
                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                <div className="input-area d-flex align-items-center flex-auto">
                                                    <img src="/images/icon/search-icon-2.png" alt="icon" />
                                                    <input type="text" placeholder="Search Coach" />
                                                </div>
                                                <button className="cmn-btn">Find Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-now">
                <div className="overlay">
                    <div className="container">
                        <div className="row cus-mar align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area text-center">
                                    <div className="icon-area">
                                        <img src="/images/icon/explore-now-icon-1.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <p className="mdr text-center">INTERACTIVE</p>
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
                                        <p className="mdr">EVENTS &amp; DISCORD</p>
                                        <h5>COMMUNITY</h5>
                                    </div>
                                    <Link href="register" className="cmn-btn">JOIN US</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;