"use client";
import Link from 'next/link';
import React, { useId, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Select, { StylesConfig } from "react-select";
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
    const [value, onChange] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(sortOptions[0]);
    const [selectedTime, setSelectedTime] = useState('3')
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#242882",
            color: '#ffffff',
            width: 'auto',
            borderColor: '#4A54AF',
            height: '60px',
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
                                                    <span className="round"></span>
                                                    <span>Payment</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="right-profile">
                                        <Link href="coaching-details" className="cmn-btn">Change</Link>
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
                                    <div className='mb-4'>
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
                                    <div className="radio-area">
                                        <label className={`single-radio ${selectedTime == '1' ? 'active' : ''}`} onClick={() => setSelectedTime('1')}>10:00 PM
                                            <input type="radio" name="loan" />
                                            <span className="checkmark"></span>
                                            <Link className="cmn-btn" href="#">Confirm</Link>
                                        </label>
                                        <label className={`single-radio ${selectedTime == '2' ? 'active' : ''}`} onClick={() => setSelectedTime('2')}>11:00 PM
                                            <input type="radio" name="loan" />
                                            <span className="checkmark"></span>
                                            <Link className="cmn-btn" href="#">Confirm</Link>
                                        </label>
                                        <label className={`single-radio ${selectedTime == '3' ? 'active' : ''}`} onClick={() => setSelectedTime('3')}>12:00 PM
                                            <input type="radio" name="loan" />
                                            <span className="checkmark"></span>
                                            <Link className="cmn-btn" href="#">Confirm</Link>
                                        </label>
                                        <label className={`single-radio ${selectedTime == '4' ? 'active' : ''}`} onClick={() => setSelectedTime('4')}>1:00 AM
                                            <input type="radio" name="loan" />
                                            <span className="checkmark"></span>
                                            <Link className="cmn-btn" href="#">Confirm</Link>
                                        </label>
                                        <label className={`single-radio ${selectedTime == '5' ? 'active' : ''}`} onClick={() => setSelectedTime('5')}>2:00 AM
                                            <input type="radio" name="loan" />
                                            <span className="checkmark"></span>
                                            <Link className="cmn-btn" href="#">Confirm</Link>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="footer-area">
                                    <Link href="coaching-details" className="d-flex align-items-center">
                                        <i className="icon-e-double-right-arrow"></i>
                                        PreVious
                                    </Link>
                                    <div className="right-item d-flex align-items-center">
                                        <h4>$255.00 <span>(€212.4)</span></h4>
                                        <Link href="booking-details-2" className="cmn-btn">Continue</Link>
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