import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <section className="banner-section index index-3">
        <div className="overlay">
            <div className="banner-content">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-5 col-lg-6 col-md-8">
                            <div className="main-content">
                                <div className="top-area section-text">
                                    <h5 className="sub-title">FUTURE OF COACHING SERVICE</h5>
                                    <h1 className="title">IMPROVE  YOUR GAME</h1>
                                    <p className="xlr">Get better and unlock your potential in the games you love most</p>
                                </div>
                                <div className="bottom-area d-xxl-flex">
                                    <Link href="coaching" className="cmn-btn">Explore</Link>
                                    <Link href="how-works" className="cmn-btn alt">How it works<i className="icon-e-double-right-arrow"></i></Link>
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

export default Banner;