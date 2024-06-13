"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const page = () => {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <section className="banner-section inner-banner coaching coaching-details">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-10">
                                    <div className="main-content">
                                        <h1>Coaching</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Coaching</li>
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

            <section className="coaching-details-second">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="head-items">
                                    <div className="left-profile">
                                        <div className="profile-img d-flex justify-content-between">
                                            <img src="/images/author-profile-2.png" className="max-un" alt="image" />
                                        </div>
                                        <div className="text-area">
                                            <p>Participant <span>-</span> 10 hours Pack With</p>
                                            <h4>Jaydon Curtis</h4>
                                            <ul>
                                                <li>
                                                    <img src="/images/icon/check-3.png" alt="icon" />
                                                    <span>Booking Time & Date</span>
                                                </li>
                                                <li>
                                                    <span className="dot">......</span>
                                                </li>
                                                <li>
                                                    <span className="round"></span>
                                                    <span>Payment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right-profile">
                                        <Link href="booking-details" className="cmn-btn">Change</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-area mt-60">
                            <div className="section-text">
                                <h5 className="mb-2">Booking details</h5>
                                <p>Book sessions you wish to schedule now and save remaining for later.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-8">
                                    <Calendar value={value} />
                                </div>
                                <div className="col-lg-4">
                                    <div className="time-info">
                                        <div className="items">
                                            <h5>Wednesday, Jun 16</h5>
                                            <p className="mdr">5:00 pm - 6:00 pm (1 hour) </p>
                                        </div>
                                        <Link href="booking-details" className="cmn-btn alt">Change</Link>
                                    </div>
                                    <div className="time-bottom mt-40">
                                        <p>What are your goals for this session?</p>
                                        <form action="#">
                                            <textarea cols={30} rows={2} placeholder="Write here"></textarea>
                                            <button className="cmn-btn alt">Save Sessain</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="footer-area">
                                    <Link href="booking-details" className="d-flex align-items-center">
                                        <i className="icon-e-double-right-arrow"></i>
                                        PreVious
                                    </Link>
                                    <div className="right-item d-flex align-items-center">
                                        <h4>$255.00 <span>(€212.4)</span></h4>
                                        <Link href="booking-details-3" className="cmn-btn">Continue</Link>
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