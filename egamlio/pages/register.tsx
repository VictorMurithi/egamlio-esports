import Head from 'next/head';
import Link from 'next/link';
import React, { useId, useState } from 'react';
import Select, { StylesConfig } from "react-select";
interface Option {
    value: string;
    label: string;
}
const dateOptions = [
    { value: '1', label: '01' },
    { value: '2', label: '02' },
    { value: '3', label: '03' },
];
const monthOptions = [
    { value: '1', label: 'Jan' },
    { value: '2', label: 'Feb' },
    { value: '3', label: 'Mar' },
];
const yearOptions = [
    { value: '1', label: '2001' },
    { value: '2', label: '2002' },
    { value: '3', label: '2003' },
];
const register = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(dateOptions[0]);
    const [selectedOption2, setSelectedOption2] = useState<Option | null | unknown>(monthOptions[0]);
    const [selectedOption3, setSelectedOption3] = useState<Option | null | unknown>(yearOptions[0]);
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#283066",
            color: '#ffffff',
            width: '180px',
            borderColor: '#4A54AF',
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
            <Head>
                <title>Egamlio - Esports and Gaming Courses Website NextJS Template</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>
            <section className="login-reg">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="top-area pt-4 mb-30">
                            <div className="row d-flex align-items-center">
                                <div className="col-sm-5 col">
                                    <Link className="back-home" href="/">
                                        <img src="/images/icon/left-icon.png" alt="image" />
                                        Back To Egamlio
                                    </Link>
                                </div>
                                <div className="col-sm-2 text-center col">
                                    <Link href="index-5">
                                        <img src="/images/logo.png" alt="image" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-120 d-flex justify-content-center">
                            <div className="col-xxl-6 col-xl-7">
                                <div className="login-reg-main text-center">
                                    <div className="form-area">
                                        <div className="section-text">
                                            <h4>Create Account</h4>
                                            <p>Sign Up to Egamlio and Start Learning!</p>
                                        </div>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="single-input">
                                                        <label htmlFor="email">Email Address</label>
                                                        <div className="input-box">
                                                            <input type="text" id="email" placeholder="Enter Your Email" />
                                                        </div>
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="name">User Name</label>
                                                        <div className="input-box">
                                                            <input type="text" id="name" placeholder="Enter User Name" />
                                                        </div>
                                                    </div>
                                                    <div className="single-input">
                                                        <label htmlFor="passInput">Password</label>
                                                        <div className="input-box">
                                                            <input type="text" id="passInput" placeholder="Enter Your Password" />
                                                            <img className="showPass" src="/images/icon/show-hide.png" alt="icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-input">
                                                    <label>Date of Birth</label>
                                                    <div className="select-area gap-3 d-flex flex-wrap align-items-center">
                                                        <Select
                                                            instanceId={useId()}
                                                            defaultValue={selectedOption}
                                                            onChange={setSelectedOption}
                                                            options={dateOptions}
                                                            components={{
                                                                IndicatorSeparator: () => null,
                                                            }}
                                                            styles={customStyles}
                                                        />
                                                        <Select
                                                            instanceId={useId()}
                                                            defaultValue={selectedOption2}
                                                            onChange={setSelectedOption2}
                                                            options={monthOptions}
                                                            components={{
                                                                IndicatorSeparator: () => null,
                                                            }}
                                                            styles={customStyles}
                                                        /> <Select
                                                            instanceId={useId()}
                                                            defaultValue={selectedOption3}
                                                            onChange={setSelectedOption3}
                                                            options={yearOptions}
                                                            components={{
                                                                IndicatorSeparator: () => null,
                                                            }}
                                                            styles={customStyles}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="remember-me">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>You agree with our</span>
                                                                <Link href="#">Forgot Password</Link>
                                                                <span>And </span>
                                                                <Link href="privacy-policy">privacy policy</Link>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="cmn-btn mt-40 w-100">Sign Up</button>
                                        </form>
                                        <div className="reg-with">
                                            <div className="or">
                                                <p>OR</p>
                                            </div>
                                            <div className="social">
                                                <ul className="footer-link d-flex justify-content-center align-items-center">
                                                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link href="#"><i className="fab fa-google"></i></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitch"></i></Link></li>
                                                    <li><Link href="#"><i className="fab fa-apple"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="account mt-30">
                                        <p>Have an account? <Link href="login">login</Link></p>
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

export default register;