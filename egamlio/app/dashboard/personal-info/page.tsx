import Link from 'next/link';
import React from 'react';

const personalInfo = () => {
    return (
        <div className="single-content">
            <div className="head-area d-flex align-items-center justify-content-between">
                <h5>PERSONAL DETAILS</h5>
            </div>
            <div className="main-content">
                <div className="single-box">
                    <ul>
                        <li>
                            <span>Name</span>
                            <span>:</span>
                            <span>Willis Myers</span>
                        </li>
                        <li>
                            <span>Date of Birth</span>
                            <span>:</span>
                            <span>15-03-1974</span>
                        </li>
                        <li>
                            <span>Name</span>
                            <span>:</span>
                            <span>8198 Fieldstone Dr.La Crosse, WI 54601</span>
                        </li>
                        <li>
                            <span>Address</span>
                            <span>:</span>
                            <span>Willis</span>
                        </li>
                    </ul>
                    <Link href="#"><img src="/images/icon/update-btn.png" alt="icon" /></Link>
                </div>
            </div>
            <div className="head-area mt-5 d-flex align-items-center justify-content-between">
                <h5>Account Settings</h5>
            </div>
            <div className="main-content">
                <div className="single-box">
                    <ul>
                        <li>
                            <span>Language</span>
                            <span>:</span>
                            <span>English (United States)</span>
                        </li>
                        <li>
                            <span>Time Zone</span>
                            <span>:</span>
                            <span>(GMT-06:00) Central America</span>
                        </li>
                        <li>
                            <span>Status</span>
                            <span>:</span>
                            <span><img src="/images/icon/check.png" alt="icon" />Active</span>
                        </li>
                    </ul>
                    <Link href="#"><img src="/images/icon/update-btn.png" alt="icon" /></Link>
                </div>
            </div>
            <div className="head-area mt-5 d-flex align-items-center justify-content-between">
                <h5>Email Addresses</h5>
            </div>
            <div className="main-content">
                <div className="single-box">
                    <ul>
                        <li>
                            <span>Email</span>
                            <span>:</span>
                            <span>willis24@gmail.com</span>
                        </li>
                    </ul>
                    <Link href="#"><img src="/images/icon/update-btn.png" alt="icon" /></Link>
                </div>
            </div>
            <div className="head-area mt-5 d-flex align-items-center justify-content-between">
                <h5>Phone</h5>
            </div>
            <div className="main-content">
                <div className="single-box">
                    <ul>
                        <li>
                            <span>Phone</span>
                            <span>:</span>
                            <span>+1 234-567-8925</span>
                        </li>
                    </ul>
                    <Link href="#"><img src="/images/icon/update-btn.png" alt="icon" /></Link>
                </div>
            </div>
            <div className="head-area mt-5 d-flex align-items-center justify-content-between">
                <h5>Security</h5>
            </div>
            <div className="main-content">
                <div className="single-box">
                    <ul>
                        <li>
                            <span>Password</span>
                            <span>:</span>
                            <span>*******</span>
                        </li>
                    </ul>
                    <Link href="#"><img src="/images/icon/update-btn.png" alt="icon" /></Link>
                </div>
            </div>
        </div>
    );
};

export default personalInfo;