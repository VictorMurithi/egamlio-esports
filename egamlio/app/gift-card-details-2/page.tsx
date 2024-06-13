"use client"
import Link from 'next/link';
import React, { useId, useState } from 'react';
import Select, { StylesConfig } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Option {
    value: string;
    label: string;
}
const sortOptions = [
    { value: '1', label: '(GMT +01:00) London (1:16 PM)' },
    { value: '2', label: '(GMT +02:00) London (3:16 PM)' },
    { value: '3', label: '(GMT +03:00) London (5:16 PM)' },
];
const page = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(sortOptions[0]);
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#242882",
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
                                <div className="coaching-details-second m-0">
                                    <div className="content-area">
                                        <form action="#">
                                            <div className="radio-area">
                                                <div className="head-area">
                                                    <h4>You're  paying <span>$52.00</span> USD</h4>
                                                </div>
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
                                                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
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
                                                                    options={sortOptions}
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
                                                <div className="radio-style second">
                                                    <label className="single-radio">Paypal
                                                        <input type="radio" name="payment" />
                                                        <span className="checkmark"></span>
                                                        <span className="card-area">
                                                            <img src="/images/icon/paypal.png" alt="icon" />
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="btn-area mt-4">
                                                    <Link href="#" className="cmn-btn">Pay Now</Link>
                                                </div>
                                            </div>
                                        </form>
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