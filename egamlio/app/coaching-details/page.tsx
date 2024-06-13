"use client";
import React, { useId, useState } from 'react';
import { StylesConfig } from 'react-select';
import Select from 'react-select';
import ModalVideo from 'react-modal-video'
import Link from 'next/link';

interface Option {
    value: string;
    label: string;
}
const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'relevent', label: 'Most Relevent' },
];
const participentOptions = [
    { value: '1', label: '1 Participent' },
    { value: '2', label: '2 Participents' },
    { value: '3', label: '3 Participents' },
];
const timeOptions = [
    { value: '10', label: '10 Hours' },
    { value: '15', label: '15 Hours' },
    { value: '20', label: '20 Hours' },
];

const page = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(sortOptions[0]);
    const [selectedOption2, setSelectedOption2] = useState<Option | null | unknown>(participentOptions[1]);
    const [selectedOption3, setSelectedOption3] = useState<Option | null | unknown>(timeOptions[0]);
    const [isOpen, setOpen] = useState(false)
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#1B1D4D",
            color: '#ffffff',
            width: 'auto'
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#ffffff' : '#000',
            backgroundColor: state.isSelected ? '#1B1D4D' : '#ffffff'
        }),
        singleValue: base => ({
            ...base,
            border: 'none',
            color: '#fff'
        }),
    };
    return (
        <>
         <ModalVideo channel='youtube' isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
            <section className="banner-section inner-banner coaching coaching-details">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="main-content">
                                        <h1>Coaching Details</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Coaching Details</li>
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

            {/* <!-- Coaching Details start --> */}
            <section className="coaching-details-section">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-9 col-xl-12">
                                <div className="author-content">
                                    <div className="profile-area d-flex">
                                        <div className="profile-bage position-relative">
                                            <div className="profile-img d-flex justify-content-center">
                                                <img src="/images/author-profile.png" className="max-un" alt="image" />
                                                <span className="mdr">1</span>
                                            </div>
                                            <div className="base-area">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="bage-head mt-3">
                                                        <button className="bage"><img src="/images/icon/trigger1.png" alt="icon" /></button>
                                                        <button className="bage"><img src="/images/icon/trigger2.png" alt="icon" /></button>
                                                        <button className="bage"><img src="/images/icon/trigger3.png" alt="icon" /></button>
                                                    </div>
                                                    <div className="carousel-area">
                                                        <h6 className="title">ACHIEVEMENTS <span>8</span><i className="fas fa-times"></i></h6>
                                                        <div className="achievement-carousel">
                                                            <div className="single-slide">
                                                                <div className="box">
                                                                    <div className="content">
                                                                        <p>XMG Captains</p>
                                                                        <p><span>1st</span> Place <span>2022</span></p>
                                                                    </div>
                                                                    <div className="torpy">
                                                                        <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-slide">
                                                                <div className="box">
                                                                    <div className="content">
                                                                        <p>MLG Pro League</p>
                                                                        <p><span>1st</span> Place <span>2022</span></p>
                                                                    </div>
                                                                    <div className="torpy">
                                                                        <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-slide">
                                                                <div className="box">
                                                                    <div className="content">
                                                                        <p>MLG Pro League</p>
                                                                        <p><span>1st</span> Place <span>2022</span></p>
                                                                    </div>
                                                                    <div className="torpy">
                                                                        <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-slide">
                                                                <div className="box">
                                                                    <div className="content">
                                                                        <p>MLG Pro League</p>
                                                                        <p><span>1st</span> Place <span>2022</span></p>
                                                                    </div>
                                                                    <div className="torpy">
                                                                        <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-slide">
                                                                <div className="box">
                                                                    <div className="content">
                                                                        <p>The International</p>
                                                                        <p><span>13th</span> Place <span>2022</span></p>
                                                                    </div>
                                                                    <div className="torpy">
                                                                        <img src="/images/icon/tropy-icon-1.png" alt="icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-info w-100">
                                            <div className="top-area d-flex align-items-center justify-content-between">
                                                <div className="name-area">
                                                    <h5 className="mb-3">JAYDON CURTIS ...</h5>
                                                    <div className="review-vote d-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <div className="star-area">
                                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                                <Link href=""><i className="fas fa-star-half-alt"></i></Link>
                                                            </div>
                                                            <p className="mdr">
                                                                <span>240</span>
                                                                <span>VOTES</span>
                                                            </p>
                                                        </div>
                                                        <div className="location d-flex align-items-center">
                                                            <img src="/images/icon/maps.png" alt="icon" />
                                                            <span>UNITED STATES</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="message-area d-flex align-items-center justify-content-between">
                                                    <Link href="" className="cmn-btn"><i className="fab fa-youtube"></i></Link>
                                                    <Link href="" className="cmn-btn"><i className="fas fa-comment-alt"></i></Link>
                                                    <Link href="" className="cmn-btn alt"><i className="fas fa-comments comment"></i>
                                                        Send Message</Link>
                                                </div>
                                            </div>
                                            <div className="bottom-area">
                                                <p>I will give you challenger coaching in league of legends</p>
                                                <div className="coach-since">
                                                    <div className="single-since">
                                                        <h5>2020</h5>
                                                        <p>Coach Since</p>
                                                    </div>
                                                    <div className="single-since">
                                                        <h5>21</h5>
                                                        <p>Orders Completed</p>
                                                    </div>
                                                    <div className="single-since">
                                                        <h5>2</h5>
                                                        <p>Orders in Progress</p>
                                                    </div>
                                                    <div className="single-since b-none">
                                                        <h5>100.0%</h5>
                                                        <p>Of buyers recommend</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="content-single mt-60">
                                    <div className="content-head mb-4 d-flex align-items-center justify-content-between">
                                        <h5>Customers voice</h5>
                                        <Link href="">See all reviews</Link>
                                    </div>
                                    <div className="content-area d-flex">
                                        <div className="img-area">
                                            <img src="/images/customers.png" className="max-un" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <div className="bottom d-flex align-items-center">
                                                <h6>Ahmad Curtis</h6>
                                                <div className="flag-area d-flex align-items-center">
                                                    <img src="/images/icon/flag-usa.png" alt="image" />
                                                    <span>United States</span>
                                                </div>
                                                <div className="star-area">
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <span>(5)</span>
                                                </div>
                                            </div>
                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                back again</p>
                                        </div>
                                    </div>
                                    <ul className="nav mt-60 mb-40" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                                                data-bs-target="#description" type="button" role="tab"
                                                aria-controls="description" aria-selected="true">Description</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="information-tab" data-bs-toggle="tab"
                                                data-bs-target="#information" type="button" role="tab"
                                                aria-controls="information" aria-selected="false">Coach information</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="availability-tab" data-bs-toggle="tab"
                                                data-bs-target="#availability" type="button" role="tab"
                                                aria-controls="availability" aria-selected="false">Coach availability</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="faqs-tab" data-bs-toggle="tab" data-bs-target="#faqs"
                                                type="button" role="tab" aria-controls="faqs" aria-selected="false">faq</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                                data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews"
                                                aria-selected="false">reviews <span>(7)</span></button>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="description" role="tabpanel"
                                            aria-labelledby="description-tab">
                                            <div className="tab-items">
                                                <div className="description">
                                                    <h5 className="mb-20">Description</h5>
                                                    <div className="paragraph">
                                                        <p>Hi, I'm Jaydon Curtis I'm a professional League of legends player who
                                                            played for almost one year and a half in the Italian ERL Pg Nationals. I
                                                            hit Grand master 400 lp in s10 and 300 lp in s11.</p>
                                                        <p>The main point of this coaching is to improve your quality of life in
                                                            ranked games and to get as many lp as possible the fastest way. Of
                                                            course i believe that coaching should be focussed on becoming a better
                                                            player but first you need to be in a good elo where you can play in an
                                                            healthy environment skills whise and macro whise.</p>
                                                        <p>I'm going to teach you how to think, how to find the best way to win the
                                                            game.</p>
                                                    </div>
                                                    <ul>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>Playing from behind/ahead</span>
                                                        </li>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>Build creation for your main champions (choosing the right items
                                                                in the game/explaining)</span>
                                                        </li>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>Wave management</span>
                                                        </li>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>Micro / Macro decision making</span>
                                                        </li>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>Challenger Coach</span>
                                                        </li>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>All you ever need to improve</span>
                                                        </li>
                                                        <li>
                                                            <img src="/images/icon/check.png" alt="icon" />
                                                            <span>Super friendly and engaging</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="faqs-section mt-40">
                                                            <h5 className="mb-30">Things to keep in mind</h5>
                                                            <div className="accordion cus-mar" id="accordionFaqs">
                                                                <div className="accordion-item">
                                                                    <h6 className="accordion-header" id="headingLeftOne">
                                                                        <button className="accordion-button collapsed" type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseLeftOne"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseLeftOne">
                                                                            Payment Policy
                                                                        </button>
                                                                    </h6>
                                                                    <div id="collapseLeftOne"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="headingLeftOne"
                                                                        data-bs-parent="#accordionFaqs">
                                                                        <div className="accordion-body">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit. Donec in nibh ut odio tempus
                                                                                malesuada ac bibendum diam. In sollicitudin, dui
                                                                                a rutrum semper, lectus dui ultrices nisl, vitae
                                                                                facilisis arcu sem in ligula.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h6 className="accordion-header" id="headingLeftTwo">
                                                                        <button className="accordion-button collapsed" type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseLeftTwo"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseLeftTwo">
                                                                            Cancellation Policy
                                                                        </button>
                                                                    </h6>
                                                                    <div id="collapseLeftTwo"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="headingLeftTwo"
                                                                        data-bs-parent="#accordionFaqs">
                                                                        <div className="accordion-body">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit. Donec in nibh ut odio tempus
                                                                                malesuada ac bibendum diam. In sollicitudin, dui
                                                                                a rutrum semper, lectus dui ultrices nisl, vitae
                                                                                facilisis arcu sem in ligula.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="accordion-item">
                                                                    <h6 className="accordion-header" id="headingLeftThree">
                                                                        <button className="accordion-button collapsed" type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#collapseLeftThree"
                                                                            aria-expanded="false"
                                                                            aria-controls="collapseLeftThree">
                                                                            Refund Policy
                                                                        </button>
                                                                    </h6>
                                                                    <div id="collapseLeftThree"
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby="headingLeftThree"
                                                                        data-bs-parent="#accordionFaqs">
                                                                        <div className="accordion-body">
                                                                            <p>Lorem ipsum dolor sit amet, consectetur
                                                                                adipiscing elit. Donec in nibh ut odio tempus
                                                                                malesuada ac bibendum diam. In sollicitudin, dui
                                                                                a rutrum semper, lectus dui ultrices nisl, vitae
                                                                                facilisis arcu sem in ligula.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="information" role="tabpanel"
                                            aria-labelledby="information-tab">
                                            <div className="info-tab-items">
                                                <h5 className="mb-20">Description</h5>
                                                <ul>
                                                    <li>
                                                        <span>COACHING EXPERIENCE</span>
                                                        <span>:</span>
                                                        <span>25+ hours</span>
                                                    </li>
                                                    <li>
                                                        <span>HOURS PLAYED</span>
                                                        <span>:</span>
                                                        <span>2000 – 3000 Hours</span>
                                                    </li>
                                                    <li>
                                                        <span>LANGUAGE</span>
                                                        <span>:</span>
                                                        <span>English</span>
                                                    </li>
                                                    <li>
                                                        <span>PLATFORM</span>
                                                        <span>:</span>
                                                        <span>PC</span>
                                                    </li>
                                                    <li>
                                                        <span>LOCATION</span>
                                                        <span>:</span>
                                                        <span>North America (East), North America (West)</span>
                                                    </li>
                                                    <li>
                                                        <span>YOUR RANK</span>
                                                        <span>:</span>
                                                        <span>Champion League, Contender & Open League, Not Ranked</span>
                                                    </li>
                                                    <li>
                                                        <span>PLAYLIST</span>
                                                        <span>:</span>
                                                        <span>Duo, Solo, Squad, Creative, Zone Wars</span>
                                                    </li>
                                                    <li>
                                                        <span>CONTROLLER</span>
                                                        <span>:</span>
                                                        <span>Keyboard & Mouse, Xbox & PS4 Controller, Mobile</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="availability" role="tabpanel"
                                            aria-labelledby="availability-tab">
                                            <div className="info-tab-items">
                                                <div className="section-text">
                                                    <h5 className="mb-20">Coach Availability</h5>
                                                    <p className="mdr">Timezone: <span>EST (UTC-5)</span> If you want to have a chat
                                                        before placing an order just message me</p>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <span>MONDAY</span>
                                                        <span>:</span>
                                                        <span>5:00pm - 10:00pm</span>
                                                    </li>
                                                    <li>
                                                        <span>TUESDAY</span>
                                                        <span>:</span>
                                                        <span>5:00pm - 10:00pm</span>
                                                    </li>
                                                    <li>
                                                        <span>WEDNESDAY</span>
                                                        <span>:</span>
                                                        <span>5:00pm - 10:00pm</span>
                                                    </li>
                                                    <li>
                                                        <span>THURSDAY</span>
                                                        <span>:</span>
                                                        <span>5:00pm - 10:00pm</span>
                                                    </li>
                                                    <li>
                                                        <span>FRIDAY</span>
                                                        <span>:</span>
                                                        <span>5:00pm - 10:00pm</span>
                                                    </li>
                                                    <li>
                                                        <span>SATURDAY</span>
                                                        <span>:</span>
                                                        <span>4:00pm - 9:00pm</span>
                                                    </li>
                                                    <li>
                                                        <span>SUNDAY</span>
                                                        <span>:</span>
                                                        <span>1:00pm - 8:00pm</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="faqs" role="tabpanel" aria-labelledby="faqs-tab">
                                            <div className="row">
                                                <div className="col-lg-11">
                                                    <div className="faqs-section">
                                                        <h5 className="mb-30">Faq</h5>
                                                        <div className="accordion cus-mar" id="accordionFaq">
                                                            <div className="accordion-item">
                                                                <h6 className="accordion-header" id="headingFaqsOne">
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFaqsOne" aria-expanded="false"
                                                                        aria-controls="collapseFaqsOne">
                                                                        What servers do you play on? Can you coach me if I play
                                                                        on X server?
                                                                    </button>
                                                                </h6>
                                                                <div id="collapseFaqsOne" className="accordion-collapse collapse"
                                                                    aria-labelledby="headingFaqsOne"
                                                                    data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit. Donec in nibh ut odio tempus malesuada ac
                                                                            bibendum diam. In sollicitudin, dui a rutrum semper,
                                                                            lectus dui ultrices nisl, vitae facilisis arcu sem
                                                                            in ligula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h6 className="accordion-header" id="headingFaqsTwo">
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFaqsTwo" aria-expanded="false"
                                                                        aria-controls="collapseFaqsTwo">
                                                                        What roles do you play?
                                                                    </button>
                                                                </h6>
                                                                <div id="collapseFaqsTwo" className="accordion-collapse collapse"
                                                                    aria-labelledby="headingFaqsTwo"
                                                                    data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit. Donec in nibh ut odio tempus malesuada ac
                                                                            bibendum diam. In sollicitudin, dui a rutrum semper,
                                                                            lectus dui ultrices nisl, vitae facilisis arcu sem
                                                                            in ligula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h6 className="accordion-header" id="headingFaqsThree">
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFaqsThree"
                                                                        aria-expanded="false" aria-controls="collapseFaqsThree">
                                                                        Languages?
                                                                    </button>
                                                                </h6>
                                                                <div id="collapseFaqsThree" className="accordion-collapse collapse"
                                                                    aria-labelledby="headingFaqsThree"
                                                                    data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit. Donec in nibh ut odio tempus malesuada ac
                                                                            bibendum diam. In sollicitudin, dui a rutrum semper,
                                                                            lectus dui ultrices nisl, vitae facilisis arcu sem
                                                                            in ligula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h6 className="accordion-header" id="headingFaqsFour">
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFaqsFour" aria-expanded="false"
                                                                        aria-controls="collapseFaqsFour">
                                                                        What will we use to communicate?
                                                                    </button>
                                                                </h6>
                                                                <div id="collapseFaqsFour" className="accordion-collapse collapse"
                                                                    aria-labelledby="headingFaqsFour"
                                                                    data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit. Donec in nibh ut odio tempus malesuada ac
                                                                            bibendum diam. In sollicitudin, dui a rutrum semper,
                                                                            lectus dui ultrices nisl, vitae facilisis arcu sem
                                                                            in ligula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h6 className="accordion-header" id="headingFaqsFive">
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFaqsFive" aria-expanded="false"
                                                                        aria-controls="collapseFaqsFive">
                                                                        Why is delivery time 7 days?
                                                                    </button>
                                                                </h6>
                                                                <div id="collapseFaqsFive" className="accordion-collapse collapse"
                                                                    aria-labelledby="headingFaqsFive"
                                                                    data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit. Donec in nibh ut odio tempus malesuada ac
                                                                            bibendum diam. In sollicitudin, dui a rutrum semper,
                                                                            lectus dui ultrices nisl, vitae facilisis arcu sem
                                                                            in ligula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="accordion-item">
                                                                <h6 className="accordion-header" id="headingFaqsSix">
                                                                    <button className="accordion-button collapsed" type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target="#collapseFaqsSix" aria-expanded="false"
                                                                        aria-controls="collapseFaqsSix">
                                                                        What is a verbal coaching session?
                                                                    </button>
                                                                </h6>
                                                                <div id="collapseFaqsSix" className="accordion-collapse collapse"
                                                                    aria-labelledby="headingFaqsSix"
                                                                    data-bs-parent="#accordionFaq">
                                                                    <div className="accordion-body">
                                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                                            elit. Donec in nibh ut odio tempus malesuada ac
                                                                            bibendum diam. In sollicitudin, dui a rutrum semper,
                                                                            lectus dui ultrices nisl, vitae facilisis arcu sem
                                                                            in ligula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                            <div className="reviews-area">
                                                <div className="head-area d-flex justify-content-between align-items-center">
                                                    <div className="head-left d-flex align-items-center">
                                                        <h5 className="m-0">7 Reviews</h5>
                                                        <div className="star-area">
                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                            <span>(5)</span>
                                                        </div>
                                                    </div>
                                                    <div className="head-right d-flex align-items-center">
                                                        <p className='mr-2'>Sort By</p>
                                                        <Select
                                                            instanceId={useId()}
                                                            defaultValue={selectedOption}
                                                            onChange={setSelectedOption}
                                                            options={sortOptions}
                                                            components={{
                                                                IndicatorSeparator: () => null,
                                                            }}
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="review-details">
                                                    <ul className="left-area">
                                                        <li className="highlight">
                                                            <span>5 Stars</span>
                                                            <span className="line-bar"></span>
                                                            <span>(7)</span>
                                                        </li>
                                                        <li>
                                                            <span>4 Stars</span>
                                                            <span className="line-bar"></span>
                                                            <span>(0)</span>
                                                        </li>
                                                        <li>
                                                            <span>3 Stars</span>
                                                            <span className="line-bar"></span>
                                                            <span>(0)</span>
                                                        </li>
                                                        <li>
                                                            <span>2 Stars</span>
                                                            <span className="line-bar"></span>
                                                            <span>(0)</span>
                                                        </li>
                                                        <li>
                                                            <span>1 Stars</span>
                                                            <span className="line-bar"></span>
                                                            <span>(0)</span>
                                                        </li>
                                                    </ul>
                                                    <div className="right-area">
                                                        <h6 className="m-0 mb-3">Rating Breakdown</h6>
                                                        <ul>
                                                            <li>
                                                                <span>Seller communication level</span>
                                                                <span>5<i className="fas fa-star"></i></span>
                                                            </li>
                                                            <li>
                                                                <span>Recommend to a friend</span>
                                                                <span>5<i className="fas fa-star"></i></span>
                                                            </li>
                                                            <li>
                                                                <span>Service as described</span>
                                                                <span>5<i className="fas fa-star"></i></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="cus-mar mt-60">
                                                    <h5 className="mb-20">Customers voice</h5>
                                                    <div className="content-area d-flex mb-30">
                                                        <div className="img-area">
                                                            <img src="/images/customers-2.png" className="max-un" alt="image" />
                                                        </div>
                                                        <div className="info-area">
                                                            <div className="bottom d-flex align-items-center">
                                                                <h6>Ahmad Curtis</h6>
                                                                <div className="flag-area d-flex align-items-center">
                                                                    <img src="/images/icon/flag-usa.png" alt="image" />
                                                                    <span>United States</span>
                                                                </div>
                                                                <div className="star-area">
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </div>
                                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                                back again</p>
                                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                                <p className="mdr">Published 1 week ago</p>
                                                                <Link href="">
                                                                    <img src="/images/icon/like.png" alt="icon" />
                                                                    Helpful
                                                                </Link>
                                                                <Link href="">
                                                                    <img src="/images/icon/dislike.png" alt="icon" />
                                                                    Not Helpful
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-area d-flex mb-30">
                                                        <div className="img-area">
                                                            <img src="/images/customers-3.png" className="max-un" alt="image" />
                                                        </div>
                                                        <div className="info-area">
                                                            <div className="bottom d-flex align-items-center">
                                                                <h6>Ahmad Curtis</h6>
                                                                <div className="flag-area d-flex align-items-center">
                                                                    <img src="/images/icon/flag-usa.png" alt="image" />
                                                                    <span>United States</span>
                                                                </div>
                                                                <div className="star-area">
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </div>
                                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                                back again</p>
                                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                                <p className="mdr">Published 1 week ago</p>
                                                                <Link href="">
                                                                    <img src="/images/icon/like.png" alt="icon" />
                                                                    Helpful
                                                                </Link>
                                                                <Link href="">
                                                                    <img src="/images/icon/dislike.png" alt="icon" />
                                                                    Not Helpful
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-area d-flex mb-30">
                                                        <div className="img-area">
                                                            <img src="/images/customers-4.png" className="max-un" alt="image" />
                                                        </div>
                                                        <div className="info-area">
                                                            <div className="bottom d-flex align-items-center">
                                                                <h6>Ahmad Curtis</h6>
                                                                <div className="flag-area d-flex align-items-center">
                                                                    <img src="/images/icon/flag-usa.png" alt="image" />
                                                                    <span>United States</span>
                                                                </div>
                                                                <div className="star-area">
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </div>
                                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                                back again</p>
                                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                                <p className="mdr">Published 1 week ago</p>
                                                                <Link href="">
                                                                    <img src="/images/icon/like.png" alt="icon" />
                                                                    Helpful
                                                                </Link>
                                                                <Link href="">
                                                                    <img src="/images/icon/dislike.png" alt="icon" />
                                                                    Not Helpful
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content-area d-flex mb-30">
                                                        <div className="img-area">
                                                            <img src="/images/customers-5.png" className="max-un" alt="image" />
                                                        </div>
                                                        <div className="info-area">
                                                            <div className="bottom d-flex align-items-center">
                                                                <h6>Ahmad Curtis</h6>
                                                                <div className="flag-area d-flex align-items-center">
                                                                    <img src="/images/icon/flag-usa.png" alt="image" />
                                                                    <span>United States</span>
                                                                </div>
                                                                <div className="star-area">
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <span>(5)</span>
                                                                </div>
                                                            </div>
                                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                                back again</p>
                                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                                <p className="mdr">Published 1 week ago</p>
                                                                <Link href="">
                                                                    <img src="/images/icon/like.png" alt="icon" />
                                                                    Helpful
                                                                </Link>
                                                                <Link href="">
                                                                    <img src="/images/icon/dislike.png" alt="icon" />
                                                                    Not Helpful
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="show-more">
                                                        <Link href="">Show more</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="coaching-section loyalty pt-120">
                                        <h5 className="mb-30 pt-120 border-area">similar Coaching</h5>
                                        <div className="row cus-mar">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-item">
                                                    <div className="top-area">
                                                        <div className="thumb">
                                                            <img src="/images/coaching-item-2.png" alt="image" />
                                                            <span>Best Choice</span>
                                                        </div>
                                                        <div className="profile-area d-flex align-items-center">
                                                            <div className="profile-img d-flex justify-content-center">
                                                                <img src="/images/coaching-profile-2.png" alt="image" />
                                                                <span className="mdr">1</span>
                                                            </div>
                                                            <div className="profile-info">
                                                                <h6>ANGEL KENTER</h6>
                                                                <div className="review-vote">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="star-area">
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star-half-alt"></i></Link>
                                                                        </div>
                                                                        <p className="mdr">
                                                                            <span>240</span>
                                                                            <span>VOTES</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="base-area">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="bage-head">
                                                                            <button className="bage"><img src="/images/icon/trigger1.png" alt="icon" /></button >
                                                                            <button className="bage"><img src="/images/icon/trigger2.png" alt="icon" /></button >
                                                                            <button className="bage"><img src="/images/icon/trigger3.png" alt="icon" /></button >
                                                                        </div>
                                                                        <div className="carousel-area">
                                                                            <h6 className="title">ACHIEVEMENTS <span>8</span><i className="fas fa-times"></i></h6>
                                                                            <div className="achievement-carousel">
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>XMG Captains</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>The International</p>
                                                                                            <p><span>13th</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-1.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="aurthor-content">
                                                        <div className="mid-area">
                                                            <h6>ROCKET LEAGUE COACH</h6>
                                                            <ul>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    Challenger Coach
                                                                </li>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    All you ever need to improve
                                                                </li>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    Super friendly and engaging
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="footer-area d-flex align-items-center justify-content-between">
                                                            <p className="xlr">$30.00/HR</p>
                                                            <div className="right-content d-flex align-items-center justify-content-between">
                                                                <Link href="coaching-details" className="cmn-btn alt">Book Now</Link>
                                                                <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-item">
                                                    <div className="top-area">
                                                        <div className="thumb">
                                                            <img src="/images/coaching-item-3.png" alt="image" />
                                                            <span>Best Choice</span>
                                                        </div>
                                                        <div className="profile-area d-flex align-items-center">
                                                            <div className="profile-img d-flex justify-content-center">
                                                                <img src="/images/coaching-profile-3.png" alt="image" />
                                                                <span className="mdr">1</span>
                                                            </div>
                                                            <div className="profile-info">
                                                                <h6>ROGER DOKIDIS</h6>
                                                                <div className="review-vote">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="star-area">
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star-half-alt"></i></Link>
                                                                        </div>
                                                                        <p className="mdr">
                                                                            <span>240</span>
                                                                            <span>VOTES</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="base-area">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="bage-head">
                                                                            <button className="bage"><img src="/images/icon/trigger1.png" alt="icon" /></button>
                                                                            <button className="bage"><img src="/images/icon/trigger2.png" alt="icon" /></button>
                                                                            <button className="bage"><img src="/images/icon/trigger3.png" alt="icon" /></button>
                                                                        </div>
                                                                        <div className="carousel-area">
                                                                            <h6 className="title">ACHIEVEMENTS <span>8</span><i className="fas fa-times"></i></h6>
                                                                            <div className="achievement-carousel">
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>XMG Captains</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>The International</p>
                                                                                            <p><span>13th</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-1.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="aurthor-content">
                                                        <div className="mid-area">
                                                            <h6>HIGH-LEVEL CSGO</h6>
                                                            <ul>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    Challenger Coach
                                                                </li>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    All you ever need to improve
                                                                </li>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    Super friendly and engaging
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="footer-area d-flex align-items-center justify-content-between">
                                                            <p className="xlr">$30.00/HR</p>
                                                            <div className="right-content d-flex align-items-center justify-content-between">
                                                                <Link href="coaching-details" className="cmn-btn alt">Book Now</Link>
                                                                <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-item">
                                                    <div className="top-area">
                                                        <div className="thumb">
                                                            <img src="/images/coaching-item-4.png" alt="image" />
                                                            <span>Best Choice</span>
                                                        </div>
                                                        <div className="profile-area d-flex align-items-center">
                                                            <div className="profile-img d-flex justify-content-center">
                                                                <img src="/images/coaching-profile-4.png" alt="image" />
                                                                <span className="mdr">1</span>
                                                            </div>
                                                            <div className="profile-info">
                                                                <h6>Jerome Bell</h6>
                                                                <div className="review-vote">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="star-area">
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star"></i></Link>
                                                                            <Link href=""><i className="fas fa-star-half-alt"></i></Link>
                                                                        </div>
                                                                        <p className="mdr">
                                                                            <span>240</span>
                                                                            <span>VOTES</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="base-area">
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="bage-head">
                                                                            <button className="bage"><img src="/images/icon/trigger1.png" alt="icon" /></button>
                                                                            <button className="bage"><img src="/images/icon/trigger2.png" alt="icon" /></button>
                                                                            <button className="bage"><img src="/images/icon/trigger3.png" alt="icon" /></button>
                                                                        </div>
                                                                        <div className="carousel-area">
                                                                            <h6 className="title">ACHIEVEMENTS <span>8</span><i className="fas fa-times"></i></h6>
                                                                            <div className="achievement-carousel">
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>XMG Captains</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>MLG Pro League</p>
                                                                                            <p><span>1st</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-2.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="single-slide">
                                                                                    <div className="box">
                                                                                        <div className="content">
                                                                                            <p>The International</p>
                                                                                            <p><span>13th</span> Place <span>2022</span></p>
                                                                                        </div>
                                                                                        <div className="torpy">
                                                                                            <img src="/images/icon/tropy-icon-1.png" alt="icon" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="aurthor-content">
                                                        <div className="mid-area">
                                                            <h6>Mid lane control mages..</h6>
                                                            <ul>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    Challenger Coach
                                                                </li>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    All you ever need to improve
                                                                </li>
                                                                <li>
                                                                    <img src="/images/icon/check.png" alt="icon" />
                                                                    Super friendly and engaging
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="footer-area d-flex align-items-center justify-content-between">
                                                            <p className="xlr">$30.00/HR</p>
                                                            <div className="right-content d-flex align-items-center justify-content-between">
                                                                <Link href="coaching-details" className="cmn-btn alt">Book Now</Link>
                                                                <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-5 col-md-6 col-sm-10">
                                <div className="position-sticky top-0">
                                    <div className="sidebar-area">
                                        <form action="#">
                                            <div className="how-works sidebar">
                                                <div
                                                    className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item" src="/images/popup-video-bg.png" alt="image" />
                                                    </div>
                                                    <span className="mfp-iframe" onClick={() => setOpen(true)}>
                                                        <img src="/images/icon/popup-icon.png" alt="icon" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sidebar-top">
                                                <div className="text-center">
                                                    <h6>Choose your coaching</h6>
                                                    <h4>$30.00/HR</h4>
                                                </div>
                                                <div
                                                    className="select-area gap-2 d-flex justify-content-between align-items-center">
                                                    <Select
                                                        instanceId={useId()}
                                                        defaultValue={selectedOption2}
                                                        onChange={setSelectedOption2}
                                                        options={participentOptions}
                                                        components={{
                                                            IndicatorSeparator: () => null,
                                                        }}
                                                        styles={customStyles}
                                                    />
                                                    <Select
                                                        instanceId={useId()}
                                                        defaultValue={selectedOption3}
                                                        onChange={setSelectedOption3}
                                                        options={timeOptions}
                                                        components={{
                                                            IndicatorSeparator: () => null,
                                                        }}
                                                        styles={customStyles}
                                                    />
                                                </div>
                                                <div className="platforms d-flex justify-content-center align-items-center">
                                                    <Link href=""><img src="/images/icon/platforms-icon-1.png" alt="icon" /></Link>
                                                    <Link href=""><img src="/images/icon/platforms-icon-2.png" alt="icon" /></Link>
                                                    <Link href=""><img src="/images/icon/platforms-icon-3.png" alt="icon" /></Link>
                                                </div>
                                                <h6 className="title">Lesson Packs</h6>
                                                <div className="radio-area">
                                                    <label className="single-radio abs-area">3 Hours Pack
                                                        <span className="abs mdr">Top Choice</span>
                                                        <input type="radio" name="loan" />
                                                        <span className="checkmark"></span>
                                                        <span className="discount">-7% discount</span>
                                                    </label>
                                                    <label className="single-radio">5 Hours Pack
                                                        <input type="radio" name="loan" />
                                                        <span className="checkmark"></span>
                                                        <span className="discount">-10% discount</span>
                                                    </label>
                                                    <label className="single-radio abs-area">10 Hours Pack
                                                        <span className="abs mdr">Best Value</span>
                                                        <input type="radio" name="loan" />
                                                        <span className="checkmark"></span>
                                                        <span className="discount">-15% discount</span>
                                                    </label>
                                                </div>
                                                <div className="input-area d-flex align-items-center">
                                                    <input type="text" placeholder="Enter Coupon" />
                                                    <button className="cmn-btn">Apply</button>
                                                </div>
                                            </div>
                                            <div className="sidebar-bottom">
                                                <h5>$255.00 <span>(€212.4)</span></h5>
                                                <Link href="booking-details" className="cmn-btn w-100">Next Step</Link>
                                                <Link href="cart" className="cmn-btn w-100 active">Add To Cart</Link>
                                            </div>
                                        </form>
                                        <div className="card-area">
                                            <img src="/images/visa.png" alt="icon" />
                                            <img src="/images/paypal.png" alt="icon" />
                                            <img src="/images/card-1.png" alt="icon" />
                                            <img src="/images/card-2.png" alt="icon" />
                                            <img src="/images/card-3.png" alt="icon" />
                                        </div>
                                        <div className="delivery text-center">
                                            <p className="mdr">Recent Delivery - <span>June 15, 2022</span></p>
                                        </div>
                                    </div>
                                    <div className="protection d-flex align-items-start">
                                        <img src="/images/icon/protection.png" className="max-un" alt="icon" />
                                        <p className="mdr">For your own protection and for egamlio to assist in any potential
                                            disputes, it's important that you never make any payments outside of the platform.
                                        </p>
                                    </div>
                                    <div className="tags">
                                        <h6>Related Tags</h6>
                                        <div className="d-fle">
                                            <Link href="">league of legends</Link>
                                            <Link href="">coaching</Link>
                                            <Link href="">Lol</Link>
                                            <Link href="">Coach</Link>
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