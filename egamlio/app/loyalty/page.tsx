import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
               <section className="banner-section inner-banner loyalty-banner">
        <div className="overlay">
            <div className="banner-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="main-content">
                                <h2>Loyalty Program</h2>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb d-flex align-items-center">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Loyalty Program</li>
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

    {/* <!-- Loyalty Program start --> */}
    <section className="loyalty-program">
        <div className="overlay pt-120 pb-120">
            <div className="container wow fadeInUp">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-text text-center">
                            <h5 className="sub-title">Egamlio's loyalty system</h5>
                            <h2 className="title">Loyalty Program</h2>
                            <p>Loyalty program consists of four different tiers, offering various cashback amounts</p>
                        </div>
                    </div>
                </div>
                <div className="row cus-mar">
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-program">
                            <div className="icon-area">
                                <img src="/images/icon/tier-icon-1.png" alt="image" />
                            </div>
                            <h4>Tier 1</h4>
                            <p className="xlr">75 EUR Spent or 5 orders</p>
                            <span className="mdr">Life-Time 3% Cashback</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-program">
                            <div className="icon-area">
                                <img src="/images/icon/tier-icon-2.png" alt="image" />
                            </div>
                            <h4>Tier 2</h4>
                            <p className="xlr">200 EUR spent or 10 orders</p>
                            <span className="mdr">Life-Time 5% Cashback</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-program">
                            <div className="icon-area">
                                <img src="/images/icon/tier-icon-3.png" alt="image" />
                            </div>
                            <h4>Tier 3</h4>
                            <p className="xlr">300 EUR spent or 20 orders</p>
                            <span className="mdr">Life-Time 7% Cashback</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="single-program">
                            <div className="icon-area">
                                <img src="/images/icon/tier-icon-4.png" alt="image" />
                            </div>
                            <h4>Tier 4</h4>
                            <p className="xlr">500 EUR Spent or 30 orders</p>
                            <span className="mdr">Life-Time 12% Cashback</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Loyalty Program end --> */}

    {/* <!-- Call To Action start --> */}
    <section className="call-action-third">
        <div className="overlay">
            <div className="container">
                <div className="main-content pt-120 pb-120">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-area">
                                <h4 className="mb-3">Learn how you can start game coaching today</h4>
                                <Link href="coaching" className="cmn-btn">Get Coaching</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Call To Action end --> */}

    {/* <!-- Coaching start --> */}
    <section className="coaching-section loyalty">
        <div className="overlay pt-120 pb-120">
            <div className="container">
                <h3 className="mb-20">Top Coaches</h3>
                <div className="row cus-mar">
                    <div className="col-xxl-3 col-xl-4 col-md-6">
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
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
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
                                        <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                        <Link href="#" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
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
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
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
                                        <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                        <Link href="#" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
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
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
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
                                        <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                        <Link href="#" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-6">
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
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star"></i></Link>
                                                    <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
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
                                        <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                        <Link href="#" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
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