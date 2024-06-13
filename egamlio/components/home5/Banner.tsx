'use client';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Banner = () => {
    return (
        <section className="banner-section index index-5">
            <div className="overlay">
                <div className="shape-area">
                    <img src="/images/icon/crystal.png" className="shape-1" alt="icon" />
                    <img src="/images/icon/ether.png" className="shape-2" alt="icon" />
                </div>
                <div className="banner-content">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-start align-items-center">
                            <div className="offset-0 offset-xl-5 col-xl-7 col-lg-7">
                                <div className="main-content">
                                    <div className="top-area section-text">
                                        <h5 className="sub-title">Coaching from the Elite</h5>
                                        <h1 className="title">Find your eSports Coach and Win</h1>
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
            <div className="counter-section index-5">
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
                                            <CountUp end={1230} redraw={true} duration={3}>
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
                                            <CountUp end={328} redraw={true} duration={3}>
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
                                            <CountUp end={150} redraw={true} duration={3}>
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