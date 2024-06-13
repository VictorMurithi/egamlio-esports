import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


const Banner = () => {
    return (
        <section className="banner-section index">
            <div className="overlay">
                <div className="banner-content">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="main-content">
                                    <div className="top-area section-text">
                                        <h5 className="sub-title">Esport coaching Platform</h5>
                                        <h1 className="title">Hire a Pro Coach</h1>
                                        <p className="xlr">Browse through hundreds of gaming coaches who will help you improve
                                            your skills</p>
                                    </div>
                                    <div className="bottom-area d-xxl-flex">
                                        <form action="#" className="w-100">
                                            <div className="form-group d-flex justify-content-between align-items-center">
                                                <div className="input-area d-flex align-items-center flex-auto">
                                                    <img src="/images/icon/search-icon.png" alt="icon" />
                                                    <input type="text" placeholder="Search Coach" />
                                                </div>
                                                <button className="cmn-btn">Find Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-4">
                                <div className="sec-image">
                                    <img src="/images/banner-illus.png" className="max-un" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-section">
                <div className="container wow fadeInUp">
                    <div className="main-content">
                        <div className="row cus-mar">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area d-flex align-items-center justify-content-start">
                                    <div className="img-area">
                                        <img src="/images/icon/counter-icon-1.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <h2><span className="counter">
                                            <CountUp end={1230} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </span></h2>
                                        <p>Games</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area d-flex align-items-center justify-content-start justify-content-md-center">
                                    <div className="img-area">
                                        <img src="/images/icon/counter-icon-2.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <h2><span className="counter">
                                            <CountUp end={398} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </span><span>K</span></h2>
                                        <p>Pro Coaches</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area d-flex align-items-center justify-content-start justify-content-lg-end">
                                    <div className="img-area">
                                        <img src="/images/icon/counter-icon-3.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <h2><span className="counter">
                                            <CountUp end={150} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                            </CountUp>
                                        </span></h2>
                                        <p>Champions</p>
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