"use client"
import Link from 'next/link';
import React, { useId, useState } from 'react';
import Select, { StylesConfig } from "react-select";
interface Option {
    value: string;
    label: string;
}
const countryOptions = [
    { value: '1', label: 'Australia' },
    { value: '2', label: 'Canada' },
    { value: '3', label: 'USA' },
];
const currencyOptions = [
    { value: '1', label: 'USD ($)' },
    { value: '2', label: 'EURO (€)' },
    { value: '3', label: 'POUND (£)' },
];
const page = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(countryOptions[0]);
    const [selectedOption1, setSelectedOption1] = useState<Option | null | unknown>(currencyOptions[0]);

    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#282D4F",
            color: '#ffffff',
            width: 'auto',
            borderColor:'#4A54AF',
            height: '52px',
            borderRadius: '10px',
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
                                                    <img src="/images/icon/check-3.png" alt="icon" />
                                                    <span>Payment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right-profile">
                                        <Link href="booking-details-2" className="cmn-btn">Change</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-area mt-60">
                            <div className="section-text">
                                <h5 className="mb-2">Booking details</h5>
                                <p>Book sessions you wish to schedule now and save remaining for later.</p>
                            </div>
                            <div className="row card-items">
                                <div className="col-xl-9 col-lg-8">
                                    <form action="#">
                                        <div className="radio-area">
                                            <div className="radio-style">
                                                <label className="single-radio active">Credit Card
                                                    <input type="radio" name="payment" />
                                                    <span className="checkmark"></span>
                                                    <span className="card-area gap-4">
                                                        <img src="/images/icon/visa.png" alt="icon" />
                                                        <img src="/images/icon/mastercard.png" alt="icon" />
                                                    </span>
                                                </label>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="single-input">
                                                            <label htmlFor="cnumber">Card Number</label>
                                                            <input type="text" id="cnumber" placeholder="1234 1234 1234 1234" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="single-input">
                                                            <label htmlFor="cardname">Card holder’s Name</label>
                                                            <input type="text" id="cardname" placeholder="Enter Your Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="single-input">
                                                            <label htmlFor="carddate">Expiration date</label>
                                                            <input type="text" id="carddate" placeholder="DD/MM/YY" />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="single-input">
                                                            <label htmlFor="cvc">CVC</label>
                                                            <input type="text" id="cvc" placeholder="...." />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="single-input">
                                                            <label htmlFor="country">Country</label>
                                                            <Select
                                                                instanceId={useId()}
                                                                defaultValue={selectedOption}
                                                                onChange={setSelectedOption}
                                                                options={countryOptions}
                                                                components={{
                                                                    IndicatorSeparator: () => null,
                                                                }}
                                                                styles={customStyles}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="single-input">
                                                            <label htmlFor="cvc">Postal Code</label>
                                                            <input type="text" id="cvc" placeholder="Enter your postal code" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="radio-style">
                                                <label className="single-radio">Paypal
                                                    <input type="radio" name="payment" />
                                                    <span className="checkmark"></span>
                                                    <span className="card-area">
                                                        <img src="/images/icon/paypal.png" alt="icon" />
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-7 col-sm-9">
                                    <div className="payment time-info">
                                        <h6 className="m-2">Payment currency</h6>
                                        <Select
                                            instanceId={useId()}
                                            defaultValue={selectedOption1}
                                            onChange={setSelectedOption1}
                                            options={currencyOptions}
                                            components={{
                                                IndicatorSeparator: () => null,
                                            }}
                                            styles={customStyles}
                                        />
                                    </div>
                                    <div className="total-prize time-info text-center">
                                        <p className="mdr">Total Price</p>
                                        <h4>$255.00</h4>
                                        <label className="save">
                                            <input className="check" type="checkbox" />
                                            <span className="mdr">Save Payment Method</span>
                                        </label>
                                        <div className="btn-area mt-30">
                                            <Link href="#" className="cmn-btn">Pay $255.00</Link>
                                        </div>
                                    </div>
                                    <div className="protection d-flex align-items-start">
                                        <img src="/images/icon/protection.png" className="max-un" alt="icon" />
                                        <p className="mdr">For your own protection and for egamlio to assist in any potential
                                            disputes, it's important that you never make any payments outside of the platform.
                                        </p>
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