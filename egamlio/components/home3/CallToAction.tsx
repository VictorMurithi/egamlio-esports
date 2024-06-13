import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
    return (
        <section className="call-to-action">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="main-content">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-4 cus-mar">
                                    <div className="section-text">
                                        <h5 className="sub-title">Become Player One</h5>
                                        <h2 className="title">Unable to hit the Rank you aim for?</h2>
                                        <p>Take your gaming skills to the next level in our Masterclass coaching.</p>
                                    </div>
                                    <Link href="coaching-grid-list" className="cmn-btn alt">browse more</Link>
                                </div>
                                <div className="col-lg-6">
                                    <div className="row align-items-center">
                                        <div className="col-6">
                                            <div className="feature-item text-center">
                                                <div className="thumb">
                                                    <img src="/images/call-action-image-1.png" alt="icon" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 gap-3">
                                            <div className="feature-item text-center">
                                                <div className="thumb mb-20">
                                                    <img src="/images/call-action-image-2.png" alt="icon" />
                                                </div>
                                            </div>
                                            <div className="feature-item text-center">
                                                <div className="thumb">
                                                    <img src="/images/call-action-image-3.png" alt="icon" />
                                                </div>
                                            </div>
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

export default CallToAction;