import Link from 'next/link';
import React from 'react';

const CallAction = () => {
    return (
        <section className="call-action">
            <div className="overlay pb-120">
                <div className="container wow fadeInUp">
                    <div className="main-content">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-6">
                                <div className="text-area">
                                    <div className="section-text">
                                        <h2 className="title">Improve Your  Skill Now!</h2>
                                        <p>Enjoy Your Gaming Experience More</p>
                                    </div>
                                    <Link href="register" className="cmn-btn">Join Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="sec-image">
                                    <img src="/images/call-to-action.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallAction;