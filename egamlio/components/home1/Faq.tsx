import React from 'react';

const Faq = () => {
    return (
        <section className="faqs-section">
            <div className="overlay pb-120 ">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h5 className="sub-title">Frequently Asked Questions</h5>
                                <h2 className="title">If you got questions we have answer</h2>
                                <p>We have a list of frequently asked questions about us</p>
                            </div>
                        </div>
                    </div>
                    <div className="row cus-mar justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="accordionFaqs">
                                <div className="accordion-item">
                                    <h6 className="accordion-header" id="headingLeftOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseLeftOne" aria-expanded="false"
                                            aria-controls="collapseLeftOne">
                                            WHAT IS EGAMLIO?
                                        </button>
                                    </h6>
                                    <div id="collapseLeftOne" className="accordion-collapse collapse"
                                        aria-labelledby="headingLeftOne" data-bs-parent="#accordionFaqs">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h6 className="accordion-header" id="headingLeftTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseLeftTwo" aria-expanded="false"
                                            aria-controls="collapseLeftTwo">
                                            I'VE MADE ORDER. WHAT NOW?
                                        </button>
                                    </h6>
                                    <div id="collapseLeftTwo" className="accordion-collapse collapse"
                                        aria-labelledby="headingLeftTwo" data-bs-parent="#accordionFaqs">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h6 className="accordion-header" id="headingLeftThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseLeftThree" aria-expanded="false"
                                            aria-controls="collapseLeftThree">
                                            CAN I GET A DISCOUNT ON THIS PRICE?
                                        </button>
                                    </h6>
                                    <div id="collapseLeftThree" className="accordion-collapse collapse"
                                        aria-labelledby="headingLeftThree" data-bs-parent="#accordionFaqs">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h6 className="accordion-header" id="headingLeftFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseLeftFour" aria-expanded="false"
                                            aria-controls="collapseLeftFour">
                                            HOW CAN I KNOW YOU ARE LEGIT?
                                        </button>
                                    </h6>
                                    <div id="collapseLeftFour" className="accordion-collapse collapse"
                                        aria-labelledby="headingLeftFour" data-bs-parent="#accordionFaqs">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h6 className="accordion-header" id="headingLeftFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseLeftFive" aria-expanded="false"
                                            aria-controls="collapseLeftFive">
                                            WHY GET A COACH FROM EGAMLIO?
                                        </button>
                                    </h6>
                                    <div id="collapseLeftFive" className="accordion-collapse collapse"
                                        aria-labelledby="headingLeftFive" data-bs-parent="#accordionFaqs">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nibh ut odio tempus malesuada ac bibendum diam. In sollicitudin, dui a rutrum semper, lectus dui ultrices nisl, vitae facilisis arcu sem in ligula.</p>
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

export default Faq;