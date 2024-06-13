"use client"
import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
    return (
        <div className="counter-section index-2">
            <div className="container pb-120 wow fadeInUp">
                <div className="main-content">
                    <div className="row cus-mar">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-area d-flex align-items-center">
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
                        <div className="col-lg-6 col-md-6">
                            <div className="single-area d-flex align-items-center">
                                <div className="img-area">
                                    <img src="/images/icon/counter-icon-2.png" alt="icon" />
                                </div>
                                <div className="text-area">
                                    <h2><span className="counter">
                                        <CountUp end={67} redraw={true}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;