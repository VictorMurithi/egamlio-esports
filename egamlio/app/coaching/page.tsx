"use client";
import CallAction from '@/components/home1/CallAction';
import Faq from '@/components/home1/Faq';
import HowWork from '@/components/home4/HowWork';
import Link from 'next/link';
import React, { useState } from 'react';
const coachingData = [
    {
        id: 1,
        img: '/images/coaching-item-1.png',
        name: 'BRANDON BAPTISTA',
        author: '/images/coaching-profile-1.png'
    },
    {
        id: 2,
        img: '/images/coaching-item-2.png',
        name: 'EMMA EVANS',
        author: '/images/coaching-profile-2.png'
    },
    {
        id: 3,
        img: '/images/coaching-item-3.png',
        name: 'JASON KIM',
        author: '/images/coaching-profile-3.png'
    },
    {
        id: 4,
        img: '/images/coaching-item-4.png',
        name: 'ASHLEY PARK',
        author: '/images/coaching-profile-4.png'
    },
    {
        id: 5,
        img: '/images/coaching-item-5.png',
        name: 'RYAN LEE',
        author: '/images/coaching-profile-5.png'
    },
    {
        id: 6,
        img: '/images/coaching-item-6.png',
        name: 'SOPHIA CHEN',
        author: '/images/coaching-profile-6.png'
    },
    {
        id: 7,
        img: '/images/coaching-item-7.png',
        name: 'JACKSON HUANG',
        author: '/images/coaching-profile-7.png'
    },
    {
        id: 8,
        img: '/images/coaching-item-8.png',
        name: 'ISABELLA WU',
        author: '/images/coaching-profile-8.png'
    },
    {
        id: 9,
        img: '/images/coaching-item-9.png',
        name: 'ERIC WANG',
        author: '/images/coaching-profile-9.png'
    },
];


const page = () => {
    const [filter, setFilter] = useState("")
    return (
        <>
            <section className="banner-section inner-banner coaching">
                <div className="overlay">
                    <div className="shape-area">
                        <img src="/images/icon/crystal.png" className="obj-1" alt="image" />
                        <img src="/images/icon/ether.png" className="obj-2" alt="image" />
                    </div>
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
            {/* <!-- Banner Section end --> */}

            {/* <!-- Filter Section start --> */}
            <section className="filter-option">
                <div className="container">
                    <div className="row gap-4 justify-content-between align-items-center">
                        <div className="col-xxl-6 col-xl-7 flex-wrap position-relative d-flex align-items-center gap-4">
                            <div className="single-item">
                                <div className="filter-area service-area d-flex align-items-center" onClick={() => setFilter(filter === 'service' ? '' : 'service')}>
                                    <button className="cmn-btn alt">Service Options</button>
                                </div>
                                <div className={`main-area service-content ${filter === 'service' && 'active'}`}>
                                    <form action="#">
                                        <div className="single-area">
                                            <h6 className="mb-30">Game Name</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Call of Duty <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>League of Legends <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Fortnite <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Call of Duty <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Counter Strike <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Rocket League <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="btn-area mt-3">
                                                    <Link href="" className="mdr">+4 more</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Gameplay Experience</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Sensei <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Expert <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Platform</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>PC <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Xbox <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Server</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Worldwide <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>North America <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Europe <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Session Type</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Single <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Team <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Session Type</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Live Coaching <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Screen recording <span className="highlight">(13)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-area d-flex align-items-center justify-content-between">
                                            <button>Clear All</button>
                                            <Link href="" className="cmn-btn">Apply</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="single-item">
                                <div className="filter-area seller-area d-flex align-items-center" onClick={() => setFilter(filter === 'seller' ? '' : 'seller')}>
                                    <button className="cmn-btn alt">Seller Details</button>
                                </div>
                                <div className={`main-area seller-content ${filter === 'seller' && 'active'}`}>
                                    <form action="#">
                                        <div className="single-area">
                                            <h6 className="mb-30">Seller Level</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Top Rated Seller <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Level One <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Level Two <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>New Seller <span className="highlight">(12)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="btn-area mt-3">
                                                    <Link href="" className="mdr">+4 more</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Seller Speaks</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>English <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>German <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Arabic <span className="highlight">(13)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Bengali <span className="highlight">(3)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="btn-area mt-3">
                                                    <Link href="" className="mdr">+4 more</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-area">
                                            <h6 className="mb-30">Seller Lives In</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>United States <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Australia <span className="highlight">(7)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="col-sm-6">
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>United Kingdom <span className="highlight">(13)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                    <label className="checkbox-single d-flex align-items-center">
                                                        <span className="left-area">
                                                            <span className="checkbox-area d-flex">
                                                                <input type="checkbox" />
                                                                <span className="checkmark"></span>
                                                            </span>
                                                            <span className="item-title d-flex align-items-center">
                                                                <span>Poland <span className="highlight">(3)</span> </span>
                                                            </span>
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="btn-area mt-3">
                                                    <Link href="" className="mdr">+4 more</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-area d-flex align-items-center justify-content-between">
                                            <button>Clear All</button>
                                            <Link href="" className="cmn-btn">Apply</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="single-item">
                                <div className="filter-area budget-area d-flex align-items-center" onClick={() => setFilter(filter === 'budget' ? '' : 'budget')}>
                                    <button className="cmn-btn alt">Budget</button>
                                </div>
                                <div className={`main-area budget-content ${filter === 'budget' && 'active'}`}>
                                    <form action="#">
                                        <div className="row single-area">
                                            <div className="col-sm-6">
                                                <div className="single-input">
                                                    <label htmlFor="min">MINIMUM</label>
                                                    <input type="text" id="min" placeholder="Any" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="single-input">
                                                    <label htmlFor="max">MAXIMUM</label>
                                                    <input type="text" id="max" placeholder="Any" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer-area d-flex align-items-center justify-content-between">
                                            <button>Clear All</button>
                                            <Link href="" className="cmn-btn">Apply</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6">
                            <div className="row gap-sm-0 gap-2">
                                <div className="col-6">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        <span>Pro services</span>
                                    </label>
                                </div>
                                <div className="col-6">
                                    <label className="switch second">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        <span>Online sellers</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Filter Section end --> */}

            {/* <!-- Coaching start --> */}
            <section className="coaching-section">
                <div className="overlay mt-60 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-center">
                            {
                                coachingData.map(({ id, author, img, name }) => (
                                    <div key={id} className="col-xl-4 col-md-6">
                                        <div className="single-item">
                                            <div className="top-area">
                                                <div className="thumb">
                                                    <img src={img} alt="image" />
                                                    <span>Best Choice</span>
                                                </div>
                                                <div className="profile-area d-flex align-items-center">
                                                    <div className="profile-img d-flex justify-content-center">
                                                        <img src={author} alt="image" />
                                                        <span className="mdr">1</span>
                                                    </div>
                                                    <div className="profile-info">
                                                        <h6 className='text-uppercase'>{name}</h6>
                                                        <div className="review-vote">
                                                            <div className="d-flex align-items-center">
                                                                <div className="star-area">
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                                    <Link href=""><i className="fas fa-star-half-alt"></i></Link>
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
                                                    <h6>MID LANE CONTROL MAGES..</h6>
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
                                                        <Link href="coaching-details" className="cmn-btn alt">Book Now</Link>
                                                        <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <nav aria-label="Page navigation" className="d-flex justify-content-center pagination-area mt-40">
                                <Link className="page-btn previous" href="" aria-label="Previous">
                                    <i className="icon-e-double-right-arrow"></i>
                                    <span>Previous</span>
                                </Link>
                                <ul className="pagination justify-content-center align-items-center">
                                    <li className="page-item"><Link className="page-link" href="">01</Link></li>
                                    <li className="page-item"><Link className="page-link active" href="">02</Link></li>
                                    <li className="page-item"><Link className="page-link" href="">03</Link></li>
                                    <li className="page-item"><Link className="page-link" href="">04</Link></li>
                                </ul>
                                <Link className="page-btn next" href="" aria-label="Next">
                                    <span>Next</span>
                                    <i className="icon-e-double-right-arrow"></i>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Call to action */}
            <CallAction />
            {/* How it works */}
            <HowWork />
            {/* Faq */}
            <Faq />
        </>
    );
};

export default page;