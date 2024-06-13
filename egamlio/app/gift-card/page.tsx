"use client"
import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
const Prev = ({ onClick }: any) => {
    return (
        <button onClick={onClick} className="prev d-flex align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></button>
    )
}
const Next = ({ onClick }: any) => {
    return (
        <button onClick={onClick} className="next d-flex align-items-center justify-content-center"><i className="fas fa-chevron-right"></i></button>
    )
}

const page = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <Prev />,
        nextArrow: <Next />,
        dotsClass: 'section-dots',
        customPaging: function () {
            return (
                <button className="dot" type="button" title="">
                    <span className="string"></span>
                </button>
            );
        },
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            }
        ]
    };
    const settings2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <Prev />,
        nextArrow: <Next />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    const settings3 = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <>
            <section className="banner-section inner-banner coach gift-card">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-10">
                                    <div className="main-content">
                                        <div className="top-area section-text">
                                            <h1 className="title">Gift HIpco Lessons</h1>
                                            <p>Perfect gift for gamers to get one on one coaching from the world's best players.</p>
                                        </div>
                                        <div className="bottom-area">
                                            <Link href="gift-card-details" className="cmn-btn mb-3">Buy a gift card</Link>
                                            <p>Have a card? <Link href="#">Redeem <img src="/images/icon/arrow-top.png" alt="icon" /></Link></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="sec-image d-none d-lg-block">
                                        <img src="/images/gift-card-illus.png" className="max-un" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="winning-more">
                    <div className="overlay pt-120 pb-120">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-header text-center">
                                        <h2 className="title">start winning more!</h2>
                                        <p>Give the gift of world-class video game coaching.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row cus-mar">
                                <div className="col-xl-4 col-lg-6">
                                    <div className="single-info">
                                        <div className="icon-area">
                                            <img src="/images/icon/winning-icon-1.png" alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h6>Step 1</h6>
                                            <h5>Choose digital gift card</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="single-info">
                                        <div className="icon-area">
                                            <img src="/images/icon/winning-icon-2.png" alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h6>Step 2</h6>
                                            <h5>Egamlio Send digital gift card</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="single-info">
                                        <div className="icon-area">
                                            <img src="/images/icon/winning-icon-3.png" alt="icon" />
                                        </div>
                                        <div className="text-area">
                                            <h6>Step 3</h6>
                                            <h5>Use your gift card coach</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Banner Section end --> */}

            {/* <!-- Winning Features start --> */}
            <section className="winning-features">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 cus-mar">
                                <div className="single-info">
                                    <div className="icon-area">
                                        <img src="/images/icon/winning-icon-4.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <h5>Learn from the Best</h5>
                                        <p>Egamlio coaches are among the best in the world in their game, world class sessions await.</p>
                                    </div>
                                </div>
                                <div className="single-info">
                                    <div className="icon-area">
                                        <img src="/images/icon/winning-icon-5.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <h5>Support every game</h5>
                                        <p>Egamlio aims to support every game we can .We are constantly adding coachses for more games every week</p>
                                    </div>
                                </div>
                                <div className="single-info">
                                    <div className="icon-area">
                                        <img src="/images/icon/winning-icon-6.png" alt="icon" />
                                    </div>
                                    <div className="text-area">
                                        <h5>Flexible Learning</h5>
                                        <p>Choose a date and time from your coaches schedule that works best for you.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="slider-area base-area">
                                    <div className="carousel-area active">
                                        <div className="mb-20 text-center">
                                            <img src="/images/icon/winning-icon-7.png" className="head-img" alt="image" />
                                            <h5 className="mb-3 mt-4">Choose a Games</h5>
                                        </div>
                                        <Slider {...settings} className="winning-carousel">
                                            <div className="single-slide">
                                                <div className="image-area">
                                                    <img src="/images/icon/winning-image-1.png" alt="image" />
                                                </div>
                                            </div>
                                            <div className="single-slide">
                                                <div className="image-area">
                                                    <img src="/images/icon/winning-image-2.png" alt="image" />
                                                </div>
                                            </div>
                                            <div className="single-slide">
                                                <div className="image-area">
                                                    <img src="/images/icon/winning-image-3.png" alt="image" />
                                                </div>
                                            </div>
                                            <div className="single-slide">
                                                <div className="image-area">
                                                    <img src="/images/icon/winning-image-4.png" alt="image" />
                                                </div>
                                            </div>
                                            <div className="single-slide">
                                                <div className="image-area">
                                                    <img src="/images/icon/winning-image-3.png" alt="image" />
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Winning Features end --> */}

            {/* <!-- Gift Card start --> */}
            <section className="gift-card">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-text text-center">
                                    <h2 className="title">Choose your Gift Card</h2>
                                    <p>A design that fits well for your gift</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider {...settings2} className="gift-carousel">
                                    <div className="single-slide">
                                        <div className="single">
                                            <div className="img-area">
                                                <img src="/images/gift-card-1.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single">
                                            <div className="img-area">
                                                <img src="/images/gift-card-2.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single">
                                            <div className="img-area">
                                                <img src="/images/gift-card-3.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single">
                                            <div className="img-area">
                                                <img src="/images/gift-card-3.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-slide">
                                        <div className="single">
                                            <div className="img-area">
                                                <img src="/images/gift-card-2.png" alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 text-center">
                                <Link href="gift-card-details-2" className="cmn-btn mt-4">Buy this gift card</Link>
                                <ul>
                                    <li>
                                        <img src="/images/icon/card-icon-1.png" alt="icon" />
                                        Fast delivery
                                    </li>
                                    <li>
                                        <img src="/images/icon/card-icon-2.png" alt="icon" />
                                        No expiration
                                    </li>
                                    <li>
                                        <img src="/images/icon/card-icon-3.png" alt="icon" />
                                        No expiration
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Gift Card end --> */}

            {/* <!-- Contact area start --> */}
            <section className="contact-area">
                <div className="overlay pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-text">
                                    <h2 className="title">Have Questions?</h2>
                                    <p>Here are some of the frequently asked questions. If you are have more queries, feel free to get in touch with us.</p>
                                </div>
                                <Link href="contact" className="cmn-btn alt">contact us</Link>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
                                <div className="sec-image">
                                    <img src="/images/contact-us-illus.png" alt="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact area end --> */}

            {/* <!-- Games Call action start --> */}
            <section className="games-call-action">
                <div className="overlay pb-120">
                    <div className="container-fluid wow fadeInUp">
                        <div className="row">
                            <Slider {...settings3}
                                className="games-action-carousel">
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-1.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-2.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-3.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-4.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-5.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-6.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-slide">
                                    <div className="single">
                                        <div className="img-area">
                                            <img src="/images/game-5.png" alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="buy-card pt-120 pb-120">
                                    <div className="section-text text-center">
                                        <h2 className="title">Go ahead, make someone’s day</h2>
                                        <p>The holder will be able to get lessons for a wide variety of games coached by world champions.</p>
                                    </div>
                                    <div className="btn-area text-center">
                                        <Link href="gift-card-details" className="cmn-btn">Buy this gift card</Link>
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