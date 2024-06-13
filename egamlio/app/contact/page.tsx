import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <section className="banner-section inner-banner coach contact">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Contact Us</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
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

            {/* <!-- Contact Info start --> */}
            <section className="contact-info">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row cus-mar">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-info">
                                    <div className="icon-area">
                                        <img src="/images/icon/headphones.png" alt="icon" />
                                    </div>
                                    <h5>Help & Support</h5>
                                    <p>support@egamlio.com</p>
                                    <span>(219) 555-0114</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-info">
                                    <div className="icon-area">
                                        <img src="/images/icon/sales.png" alt="icon" />
                                    </div>
                                    <h5>sales</h5>
                                    <p>support@egamlio.com</p>
                                    <span>(480) 555-0103</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-info">
                                    <div className="icon-area">
                                        <img src="/images/icon/press.png" alt="icon" />
                                    </div>
                                    <h5>press</h5>
                                    <p>support@egamlio.com</p>
                                    <span>(219) 555-0114</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Info end --> */}

            {/* <!-- Contact start --> */}
            <section className="contact-section">
                <div className="overlay pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-text">
                                    <h5 className="sub-title">Contact</h5>
                                    <h2 className="title">Get in touch  today!</h2>
                                    <p>We'd love to hear from you. Leave us a message using the form.Our team of experts welcome the chance to answer your questions</p>
                                </div>
                                <div className="social">
                                    <p className="mdr mb-3">Follow us on social media</p>
                                    <ul className="footer-link d-flex align-items-center">
                                        <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-twitch"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form action="#">
                                    <h4 className="mb-30">Drop Us a Line</h4>
                                    <div className="single-input">
                                        <label htmlFor="reviewName">Name</label>
                                        <input type="text" id="reviewName" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="reviewEmail">Email</label>
                                        <input type="text" id="reviewEmail" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="reviewEmail">My query is about</label>
                                        <select>
                                            <option value="1">Select a Support Category</option>
                                            <option value="2">Category 1</option>
                                            <option value="3">Category 2</option>
                                            <option value="4">Category 3</option>
                                        </select>
                                    </div>
                                    <div className="single-input">
                                        <label htmlFor="reviewMessage">Message</label>
                                        <textarea id="reviewMessage" cols={30} rows={5} placeholder="Hi there! I would like to get in touch because..."></textarea>
                                    </div>
                                    <button className="cmn-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact end --> */}

            {/* <!-- FAQs In start --> */}
            <section className="faqs-section contact">
                <div className="overlay">
                    <div className="container pt-120 pb-120">
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
        </>
    );
};

export default page;