import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <section className="banner-section inner-banner coach cart">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Careers</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Careers</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Banner Section end --> */}

            {/* <!-- Current Positions In start --> */}
            <section className="current-positions">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-xl-9 col-lg-10">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Current Positions</h5>
                                    <h2 className="title">Unlock Your Career at Egamlio</h2>
                                    <p>Grow with us and take your professional life to the next level.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-60">
                            <div className="col-lg-6 col-md-6">
                                <div className="single-item">
                                    <p className="mdr">Management</p>
                                    <h5>Office Manager</h5>
                                    <p>Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus</p>
                                    <Link href="career-single" className="cmn-btn">Apply Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-item">
                                    <p className="mdr">Developer</p>
                                    <h5>Senior Backend Developer</h5>
                                    <p>Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus</p>
                                    <Link href="career-single" className="cmn-btn">Apply Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-item">
                                    <p className="mdr">Developer</p>
                                    <h5>Jr Frontend Developer</h5>
                                    <p>Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus</p>
                                    <Link href="career-single" className="cmn-btn">Apply Now</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="single-item">
                                    <p className="mdr">Design</p>
                                    <h5>UI/UX and Product Designer</h5>
                                    <p>Proin sed eros ac libero auctor egestas. Duis maximus imperdiet ultricies. Donec finibus diam risus</p>
                                    <Link href="career-single" className="cmn-btn">Apply Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="bottom-item">
                                    <h3 className="title">Can´t find the perfect position?</h3>
                                    <p>Send us an email anyways! We will save your resume for next time a relevant position opens.We're always looking for talent</p>
                                    <Link href="contact" className="cmn-btn">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Current Positions In end --> */}

            {/* <!-- FAQs In start --> */}
            <section className="faqs-section">
                <div className="overlay pb-120">
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
        </>
    );
};

export default page;