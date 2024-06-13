"use client"
import Link from 'next/link';
import { useState } from 'react';
import ModalVideo from 'react-modal-video'

const page = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="banner-section inner-banner loyalty-banner coach">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Become a coach</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Become a coach</li>
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

            {/* <!-- Become a coach start --> */}
            <section className="become-coach">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-text text-center">
                                    <h5 className="sub-title">Become a coach</h5>
                                    <h2 className="title">Earn money as an Game coach</h2>
                                    <p>Use your skills to help gamers improve and earn money easily.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area">
                                    <div className="icon-area">
                                        <img src="/images/icon/coach-icon-1.png" alt="icon" />
                                    </div>
                                    <h5>Earn Money</h5>
                                    <p>Get a chance to earn good income</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area">
                                    <div className="icon-area">
                                        <img src="/images/icon/coach-icon-2.png" alt="icon" />
                                    </div>
                                    <h5>Flexible Work Hours</h5>
                                    <p>Work according your schedule</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-area">
                                    <div className="icon-area">
                                        <img src="/images/icon/coach-icon-3.png" alt="icon" />
                                    </div>
                                    <h5>Get paid fast</h5>
                                    <p>Egamlio pays out weekly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Become a coach end --> */}

            {/* <!-- How it works start --> */}
            <section className="how-works become-coach">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Start Making Money </h5>
                                    <h2 className="title">Selling  in 3 steps.</h2>
                                    <p>Use your skills to help gamers improve and earn money easily.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row cus-mar">
                            <div className="col-md-4">
                                <div className="single-item text-center">
                                    <div className="thumb">
                                        <img src="/images/icon/how-works-icon-4.png" alt="icon" />
                                        <span className="xlr">01</span>
                                    </div>
                                    <div className="text-area">
                                        <h5>Create your account</h5>
                                        <p>Apply to coach and get approved.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-item mid text-center">
                                    <div className="thumb">
                                        <img src="/images/icon/how-works-icon-5.png" alt="icon" />
                                        <span className="xlr">02</span>
                                    </div>
                                    <div className="text-area">
                                        <h5>Start your coach lessons</h5>
                                        <p>Accept students and earn money</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-item text-center">
                                    <div className="thumb">
                                        <img src="/images/icon/how-works-icon-6.png" alt="icon" />
                                        <span className="xlr">03</span>
                                    </div>
                                    <div className="text-area">
                                        <h5>Get paid</h5>
                                        <p>Get paid every week.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-120 justify-content-center">
                            <div className="col-lg-8">
                                <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                    <div className="bg-area">
                                        <img className="bg-item" src="/images/how-works-popup.png" alt="image" />
                                    </div>
                                    <span className="mfp-iframe popupvideo position-absolute" onClick={()=>setOpen(true)}>
                                        <img src="/images/icon/popup-icon.png" alt="icon" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-12 text-center mt-40">
                                <Link href="coaches-details" className="cmn-btn">Apply to Coach</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- How it works end --> */}

            {/* <!-- FAQs In start --> */}
            <section className="faqs-section">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-7">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">You have a Questions</h5>
                                    <h2 className="title">We have answers</h2>
                                    <p>If you haven’t found your answer to your questions, Contact Us</p>
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
                                                Who can offer or sell services on the Marketplace?
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
                                                How do I choose a good price for my Coach?
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
                                                How do I get paid?
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
                                                How much can I earn on Egamlio?
                                            </button>
                                        </h6>
                                        <div id="collapseLeftFour" className="accordion-collapse collapse"
                                            aria-labelledby="headingLeftFour" data-bs-parent="#accordionFaqs">
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
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};

export default page;