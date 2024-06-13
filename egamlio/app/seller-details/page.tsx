import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <section className="banner-section inner-banner coaching coaching-details">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Instructor Profile</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Instructor Profile</li>
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

            <section className="coaching-details-section coaches seller">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="author-content mb-60">
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
                                                        <div className="location d-flex align-items-center">
                                                            <img src="/images/icon/user.png" alt="icon" />
                                                            <span>Member since Oct 2018</span>
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
                                                <h4 className="mb-0">PROFESSIONAL COACH</h4>
                                                <div className="coaches-area">
                                                    <div className="tags m-0 p-0 b-none">
                                                        <div className="d-fle">
                                                            <Link href="">League of Legends</Link>
                                                            <Link href="">VALORANT</Link>
                                                            <Link href="">Teamfight Tactics</Link>
                                                            <Link href="">Overwatch</Link>
                                                            <Link href="">Mobile Legends</Link>
                                                            <Link href="">FIFA 21</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-sm-8">
                                <div className="sidebar-item position-sticky top-0">
                                    <div className="sidebar-single para">
                                        <h5>ABOUT Me</h5>
                                        <p>Hey I'm Jaydon Curtis. I have been playing the game for 9 years, competetively for 6. I'm mostly known for being one of the best SoloQ players in Europe. I reach rank 1 consistently every year and have played all roles to challenger.</p>
                                        <p>I will give you the tools you need to analyze and fix your mistakes, help you develop a good mindset for improvement and come up with a practise routine.</p>
                                        <p>If you are interested in long term improvement i can help you.</p>
                                    </div>
                                    <div className="sidebar-single para">
                                        <h5>Languages</h5>
                                        <p className="mb-2">English - Fluent</p>
                                        <p>Dutch (Nederlands) - Fluent</p>
                                    </div>
                                    <div className="sidebar-single base-area">
                                        <div className="carousel-area active">
                                            <div className="mb-20 d-flex justify-content-between align-items-center">
                                                <h5 className="m-0">Languages</h5>
                                                <h6 className="m-0"> <span>8</span></h6>
                                            </div>
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
                            <div className="col-xl-8 col-lg-7">
                                <ul className="nav mb-20" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="coaching-tab" data-bs-toggle="tab"
                                            data-bs-target="#coaching" type="button" role="tab"
                                            aria-controls="coaching" aria-selected="true">coaching</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="courses-tab" data-bs-toggle="tab"
                                            data-bs-target="#courses" type="button" role="tab"
                                            aria-controls="courses" aria-selected="false">Cocourses</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="faqs-tab" data-bs-toggle="tab"
                                            data-bs-target="#faqs" type="button" role="tab"
                                            aria-controls="faqs" aria-selected="false">Faq</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="coaching" role="tabpanel"
                                        aria-labelledby="coaching-tab">
                                        <div className="tab-items coaching-section">
                                            <div className="row justify-content-center">
                                                <div className="col-xl-6">
                                                    <div className="single-item">
                                                        <div className="top-area">
                                                            <div className="thumb">
                                                                <img src="/images/coaching-item-6.png" alt="image" />
                                                                <span>Best Choice</span>
                                                            </div>
                                                            <div className="profile-area d-flex align-items-center">
                                                                <div className="profile-img d-flex justify-content-center">
                                                                    <img src="/images/coaching-profile-6.png" alt="image" />
                                                                    <span className="mdr">1</span>
                                                                </div>
                                                                <div className="profile-info">
                                                                    <h6>JAYLON GEIDT</h6>
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
                                                                <h6>LEAGUE OF LEGENDS COACHING</h6>
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
                                                <div className="col-xl-6">
                                                    <div className="single-item">
                                                        <div className="top-area">
                                                            <div className="thumb">
                                                                <img src="/images/coaching-item-7.png" alt="image" />
                                                                <span>Best Choice</span>
                                                            </div>
                                                            <div className="profile-area d-flex align-items-center">
                                                                <div className="profile-img d-flex justify-content-center">
                                                                    <img src="/images/coaching-profile-7.png" alt="image" />
                                                                    <span className="mdr">1</span>
                                                                </div>
                                                                <div className="profile-info">
                                                                    <h6>EMERSON BATOR</h6>
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
                                                                <h6>HIGH LEVEL COACHING, ANY ROLE!</h6>
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
                                                <div className="col-xl-6">
                                                    <div className="single-item">
                                                        <div className="top-area">
                                                            <div className="thumb">
                                                                <img src="/images/coaching-item-8.png" alt="image" />
                                                                <span>Best Choice</span>
                                                            </div>
                                                            <div className="profile-area d-flex align-items-center">
                                                                <div className="profile-img d-flex justify-content-center">
                                                                    <img src="/images/coaching-profile-8.png" alt="image" />
                                                                    <span className="mdr">1</span>
                                                                </div>
                                                                <div className="profile-info">
                                                                    <h6>OMAR BERGSON</h6>
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
                                                                <h6>LEAGUE OF LEGENDS ANALYZER</h6>
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
                                                <div className="col-xl-6">
                                                    <div className="single-item">
                                                        <div className="top-area">
                                                            <div className="thumb">
                                                                <img src="/images/coaching-item-9.png" alt="image" />
                                                                <span>Best Choice</span>
                                                            </div>
                                                            <div className="profile-area d-flex align-items-center">
                                                                <div className="profile-img d-flex justify-content-center">
                                                                    <img src="/images/coaching-profile-9.png" alt="image" />
                                                                    <span className="mdr">1</span>
                                                                </div>
                                                                <div className="profile-info">
                                                                    <h6>GUSTAVO STANTON</h6>
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
                                                                <h6>JUNGLE ROLE IN DEPTH COACHING</h6>
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
                                        <div className="reviews-area mt-30">
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
                                                    <p>Sort By</p>

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
                                    <div className="tab-pane fade" id="courses" role="tabpanel"
                                        aria-labelledby="courses-tab">
                                        <div className="tab-items coaching-section">
                                            <div className="row justify-content-center">
                                                <div className="col-xl-6">
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
                                                <div className="col-xl-6">
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
                                                                <h6>HIGH-LEVEL CSGO COACHING</h6>
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
                                                <div className="col-xl-6">
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
                                                                    <h6>MARCUS WORKMAN</h6>
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
                                                                <h6>PROFESSIONAL LOL COACHING</h6>
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
                                                <div className="col-xl-6">
                                                    <div className="single-item">
                                                        <div className="top-area">
                                                            <div className="thumb">
                                                                <img src="/images/coaching-item-5.png" alt="image" />
                                                                <span>Best Choice</span>
                                                            </div>
                                                            <div className="profile-area d-flex align-items-center">
                                                                <div className="profile-img d-flex justify-content-center">
                                                                    <img src="/images/coaching-profile-5.png" alt="image" />
                                                                    <span className="mdr">1</span>
                                                                </div>
                                                                <div className="profile-info">
                                                                    <h6>JAMES LUBIN</h6>
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
                                                                <h6>CHALLENGER MID COACHING</h6>
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
                                        <div className="reviews-area mt-30">
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
                                                    <p>Sort By</p>

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
                                    <div className="tab-pane fade" id="faqs" role="tabpanel"
                                        aria-labelledby="faqs-tab">
                                        <div className="faqs-section">
                                            <h5 className="mb-30">Faq</h5>
                                            <div className="accordion cus-mar" id="accordionFaq">
                                                <div className="accordion-item">
                                                    <h6 className="accordion-header" id="headingFaqsOne">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseFaqsOne" aria-expanded="false"
                                                            aria-controls="collapseFaqsOne">
                                                            What is your goal for the session?
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
                                                            I'VE MADE ORDER. WHAT NOW?
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
                                                            How do your sessions work?
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
                                                            How experienced are you?
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
                                                            What if I am unsatisfied with the sessions?
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