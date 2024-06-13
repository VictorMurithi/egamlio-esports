"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const page = () => {
    const [selected, setSelected] = useState('1')
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value)
    }
    return (
        <>
            <section className="banner-section inner-banner coach gift-card-details">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Card details</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Card Details</li>
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

            <section className="card-preview">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-7 col-sm-8">
                                <div className="sidebar-area position-sticky top-0">
                                    <img src="/images/gift-card-4.png" alt="icon" />
                                    <div className="text-area">
                                        <h5>Start winning</h5>
                                        <p>Hope you enjoy this gift card.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="dashboard-section m-0">
                                    <div className="single-content m-0">
                                        <div className="head-area">
                                            <h5>Choose a style</h5>
                                            <p>Buy a Egamlio gift card</p>
                                        </div>
                                        <div className="table-area">
                                            <form action="#">
                                                <div className="radio-area mb-60">
                                                    <div className="radio-style">
                                                        <label className="single-radio active">
                                                            <input type="radio" name="payment" value="1" checked={selected === "1"} onChange={handleChange} />
                                                            <span className="checkmark"></span>
                                                            <span className="card-area">
                                                                <img src="/images/gift-card-5.png" alt="icon" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-style">
                                                        <label className="single-radio">
                                                            <input type="radio" name="payment" value="2" checked={selected === "2"} onChange={handleChange} />
                                                            <span className="checkmark"></span>
                                                            <span className="card-area">
                                                                <img src="/images/gift-card-6.png" alt="icon" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="radio-style">
                                                        <label className="single-radio">
                                                            <input type="radio" name="payment" value="3" checked={selected === "3"} onChange={handleChange} />
                                                            <span className="checkmark"></span>
                                                            <span className="card-area">
                                                                <img src="/images/gift-card-7.png" alt="icon" />
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="card-form">
                                                    <div className="head-area">
                                                        <h5>Gift Card Details</h5>
                                                        <p>Amount</p>
                                                        <ul>
                                                            <li><h4 className="active">500</h4></li>
                                                            <li><h4>700</h4></li>
                                                            <li><h4>1000</h4></li>
                                                        </ul>
                                                    </div>
                                                    <div className="row mt-40">
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="name">User Name</label>
                                                                <input type="text" id="name" placeholder="Enter your Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="email">Email</label>
                                                                <input type="text" id="email" placeholder="Enter your Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientName">Recipient Name</label>
                                                                <input type="text" id="recipientName" placeholder="Enter Your Recipient Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="recipientEmail">Recipient Email</label>
                                                                <input type="text" id="recipientEmail" placeholder="Enter Your Recipient Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="keepShort">Title (Keep it short)</label>
                                                                <input type="text" id="keepShort" placeholder="Start Winning" />
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="deliveryDate">Delivery Date</label>
                                                                <div className="input-box">
                                                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                                                    <img className="showPass" src="/images/icon/date-icon.png" alt="icon" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="single-input">
                                                                <label htmlFor="deliveryDate">Message</label>
                                                                <textarea cols={30} rows={5} placeholder="Hi there! I would like to get in touch because..."></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-4 col-xl-5 col-sm-7">
                                                            <button className="cmn-btn w-100 mt-3">Place your Order</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
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