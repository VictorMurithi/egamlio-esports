import React from 'react';

const Features = () => {
    return (
        <section className="features-second">
            <div className="overlay pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-header">
                                <h5 className="sub-title">ENJOY YOUR GAMING EXPERIENCE MORE</h5>
                                <h2 className="title">Quality rather than Quantity!</h2>
                                <p>“We are not another corporation with hundreds of random Coaches”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gap-3">
                        <div className="col-lg-7">
                            <div className="single-area d-flex align-items-center">
                                <div className="img-area">
                                    <img src="/images/icon/features-icon-1.png" alt="icon" />
                                </div>
                                <div className="text-area">
                                    <h5>Be Coached By The Best!</h5>
                                    <p>Our team consists only of Experienced Coaches who are currently in the Challenger League.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="single-area d-flex align-items-center">
                                <div className="img-area">
                                    <img src="/images/icon/features-icon-2.png" alt="icon" />
                                </div>
                                <div className="text-area">
                                    <h5>Improvment or Cash Back!</h5>
                                    <p>If you consider that you did not learn anything at all we will refund your money.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="single-area d-flex align-items-center">
                                <div className="img-area">
                                    <img src="/images/icon/features-icon-3.png" alt="icon" />
                                </div>
                                <div className="text-area">
                                    <h5>Coaching in Every Region</h5>
                                    <p>We will be coaching you regardless of the region and time zone from which you are playing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="single-area d-flex align-items-center">
                                <div className="img-area">
                                    <img src="/images/icon/features-icon-4.png" alt="icon" />
                                </div>
                                <div className="text-area">
                                    <h5>97% Satisfied Customers</h5>
                                    <p>All our existing customers have expressed their satisfaction with the coaching that we provide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;