"use client";
import React, { useId, useState } from 'react';
import RangeSlider from "react-range-slider-input";
import { useTimer } from 'react-timer-hook';
import "react-range-slider-input/dist/style.css";
import { StylesConfig } from 'react-select';
import Select from 'react-select';
import Link from 'next/link';
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
interface Option {
    value: string;
    label: string;
}
const options = [
    { value: 'EN', label: 'English' },
    { value: 'BN', label: 'Bangla' },
    { value: 'AR', label: 'Arabic' },
];

const page = () => {
    const [list, setList] = useState(false)
    const [value, setValue] = useState([50, 300])
    const today = new Date()
    const time = new Date(today.getFullYear() + 20, today.getMonth(), today.getDate()); // set the date 8 years later
    const { hours, seconds, minutes } = useTimer({ expiryTimestamp: time })
    const handleChange = (event: any) => {
        setValue(event)
    }
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(options[0]);
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#1B1D4D",
            color: '#ffffff',
            width: '100%'
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
            <section className="banner-section inner-banner coaching coaches">
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
                                                    <li className="breadcrumb-item active" aria-current="page">Coaches</li>
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
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-3 col-sm-4 d-flex justify-content-sm-start justify-content-center">
                            <div className="filter-single">
                                <h6 className="mdr">special offer </h6>
                                <h2>50 <span>%</span></h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 d-flex justify-content-center">
                            <div className="filter-single">
                                <div className="countdown d-flex">
                                    <h4>
                                        <span className="days">{hours}</span><span className="ref">hours</span>
                                    </h4>
                                    <h4>
                                        <span className="hours">{minutes}</span><span className="ref">minutes</span>
                                    </h4>
                                    <h4>
                                        <span className="minutes">{seconds}</span><span className="ref">seconds</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-4 d-flex justify-content-sm-end justify-content-center">
                            <div className="filter-single">
                                <Link href="shop-grid-list" className="cmn-btn">Shop Now</Link>
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
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-sm-8">
                                <div className="sidebar position-sticky top-0">
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Filter by Price</h6>
                                        <div className="sidebar-single-item">
                                            <div>
                                                <RangeSlider onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} id="green" min={0} max={1000} step={1} defaultValue={[50, 300]} />
                                            </div>
                                            <div className="bottom-area mt-4 d-flex align-items-center justify-content-between">
                                                <button className="cmn-btn alt">Filter</button>
                                                <p> Price: $<span className="min-val">{value[0]}</span> - $<span className="max-val">{value[1]}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Coaching</h6>
                                        <div className="sidebar-single-item">
                                            <label className="checkbox-single d-flex align-items-center">
                                                <span className="left-area">
                                                    <span className="checkbox-area d-flex">
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </span>
                                                    <span className="item-title d-flex align-items-center">
                                                        <span>Fortnite</span>
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
                                                        <span>League of Legends</span>
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
                                                        <span>DOTA 2</span>
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
                                                        <span>Hearthstone</span>
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
                                                        <span>Counter strike</span>
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
                                                        <span>Call of duty</span>
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
                                                        <span>PUBG</span>
                                                    </span>
                                                </span>
                                            </label>
                                            <Link href="" className="cmn-btn alt mt-3">View More</Link>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Platform</h6>
                                        <div className="sidebar-single-item">
                                            <label className="checkbox-single d-flex align-items-center">
                                                <span className="left-area">
                                                    <span className="checkbox-area d-flex">
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </span>
                                                    <span className="item-title d-flex align-items-center">
                                                        <span>PC</span>
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
                                                        <span>PS$</span>
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
                                                        <span>XBOX</span>
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
                                                        <span>Cell</span>
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
                                                        <span>Counter strike</span>
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
                                                        <span>Nintendo switch</span>
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
                                                        <span>Others</span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Coach-Level</h6>
                                        <div className="sidebar-single-item">
                                            <label className="checkbox-single d-flex align-items-center">
                                                <span className="left-area">
                                                    <span className="checkbox-area d-flex">
                                                        <input type="checkbox" />
                                                        <span className="checkmark"></span>
                                                    </span>
                                                    <span className="item-title d-flex align-items-center">
                                                        <span>New Seller</span>
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
                                                        <span>Level One</span>
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
                                                        <span>Level TWO</span>
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
                                                        <span>Top Rated</span>
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Filter by Language</h6>
                                        <div className="sidebar-single-item">
                                            <Select
                                                instanceId={useId()}
                                                defaultValue={selectedOption}
                                                onChange={setSelectedOption}
                                                options={options}
                                                components={{
                                                    IndicatorSeparator: () => null,
                                                }}
                                                styles={customStyles}
                                            />
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Filter by Language</h6>
                                        <div className="sidebar-single-item star">
                                            <div className="star-area">
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                            </div>
                                            <div className="star-area">
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <span className="mdr">And Up</span>
                                            </div>
                                            <div className="star-area">
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <span className="mdr">And Up</span>
                                            </div>
                                            <div className="star-area">
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <span className="mdr">And Up</span>
                                            </div>
                                            <div className="star-area">
                                                <Link href=""><i className="fas fa-star"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <Link href=""><i className="fas fa-star blank"></i></Link>
                                                <span className="mdr">And Up</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                                <div className="grid-list-head">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-6">
                                            <p>Showing 1–12 of 20 results</p>
                                        </div>
                                        <div className="col-lg-6 col-md-2 d-none d-xl-flex align-items-center justify-content-end btn-area">
                                            <i onClick={() => setList(false)} className={`fas fa-th grid-btn ${list ? '' : 'active'}`}></i>
                                            <i onClick={() => setList(true)} className={`fas fa-bars list-btn  ${list ? 'active' : ''}`}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="all-items">
                                    {
                                        coachingData.slice(3,).map(({ id, author, img, name }) => (
                                            <div key={id} className={`single-item ${list && 'list'}`}>
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
                                                            <h6>{name}</h6>
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
                                                    <div className="mid-area coaches-area">
                                                        <h6>Teaches Mid Lane</h6>
                                                        <ul>
                                                            <li>
                                                                <span>18 &nbsp;</span>Lessons
                                                            </li>
                                                            <li>
                                                                <span>2</span>h &nbsp;<span>19</span>m
                                                            </li>
                                                            <li>
                                                                Lang: English
                                                            </li>
                                                        </ul>
                                                        <p>You will learn what others take years of League of Legends to figure out...</p>
                                                    </div>
                                                    <div className="footer-area d-flex align-items-center justify-content-between">
                                                        <p className="xlr">$94.99</p>
                                                        <div className="right-content d-flex align-items-center justify-content-between">
                                                            <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                                            <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }


                                </div>
                                <nav aria-label="Page navigation" className="d-flex justify-content-center pagination-area mt-30">
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
                </div>
            </section>
        </>
    );
};

export default page;