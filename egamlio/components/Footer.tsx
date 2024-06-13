"use client";
import Link from 'next/link';
import React, { useId, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

interface Option {
    value: string;
    label: string;
}
const options = [
    { value: 'EN', label: 'English' },
    { value: 'BN', label: 'Bangla' },
    { value: 'AR', label: 'Arabic' },
];

const Footer = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(options[0]);
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#1B1D4D",
            borderColor: '#ffffff',      
            color: '#ffffff',    
            width: '130px' 
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
        <footer className="footer-section">
            <div className="container">
                <div className="newsletter">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-area mb-30 text-center">
                                <h5 className="sub-title">Get ready for the next level</h5>
                                <h3 className="title">Subscribe for updates</h3>
                            </div>
                            <form>
                                <div className="form-group d-flex align-items-center">
                                    <img src="/images/icon/email.png" alt="icon" />
                                    <input type="text" placeholder="Your email address" />
                                    <button className="cmn-btn">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-area pt-120">
                    <div className="footer-top pb-120">
                        <div className="row">
                            <div className="col-xl-3 col-6">
                                <div className="footer-box">
                                    <h5>Company</h5>
                                    <ul className="footer-link">
                                        <li><Link href="about-us">About Us</Link></li>
                                        <li><Link href="how-works">How It Works</Link></li>
                                        <li><Link href="careers">Careers</Link></li>
                                        <li><Link href="about-us">Customer Reviews</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="footer-box">
                                    <h5>COACHES</h5>
                                    <ul className="footer-link">
                                        <li><Link href="become-coach">Become a Coach</Link></li>
                                        <li><Link href="coaches-grid-list">Our Coaches</Link></li>
                                        <li><Link href="coaches-details">Coach Demo</Link></li>
                                        <li><Link href="coaching-grid-list">Our Coaching</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="footer-box">
                                    <h5>SUPPORT</h5>
                                    <ul className="footer-link">
                                        <li><Link href="privacy-policy">Privacy Policy</Link></li>
                                        <li><Link href="terms-conditions">Terms of Use</Link></li>
                                        <li><Link href="faq">FAQ</Link></li>
                                        <li><Link href="terms-conditions">Security</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-6">
                                <div className="social">
                                    <h5>FOLLOW US</h5>
                                    <ul className="footer-link">
                                        <li><Link href="#">
                                            <span><i className="fab fa-facebook-f"></i></span>
                                            facebook
                                        </Link></li>
                                        <li><Link href="#">
                                            <span><i className="fab fa-twitter"></i></span>
                                            twitter
                                        </Link></li>
                                        <li><Link href="#">
                                            <span><i className="fab fa-twitch"></i></span>
                                            twitch
                                        </Link></li>
                                        <li><Link href="#">
                                            <span><i className="fab fa-youtube"></i></span>
                                            youtube
                                        </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start order-lg-0 order-1">
                                <div className="copyright text-center">
                                    <p>Copyright © {new Date().getFullYear()} Egamlio | Designed by <Link href="https://themeforest.net/user/uiaxis">UIAXIS.</Link></p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="language d-flex gap-2 align-items-center justify-content-center justify-content-lg-end">
                                    <h6 className="m-none">Select your language</h6>
                                    <Select
                                        instanceId={useId()}
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        menuPlacement='top'
                                        components={{
                                            IndicatorSeparator: () => null,
                                        }}
                                        styles={customStyles}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;