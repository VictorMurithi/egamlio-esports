"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const productData = [
    {
        id: 1,
        title: 'PLAYSTATION 5 DUALSENSE WIRELESS CONTROLLER',
        img: '/images/product-1.png'
    },
    {
        id: 2,
        title: 'MARS ERGONOMIC DESIGN GAMING DESK',
        img: '/images/product-2.png'
    },
    {
        id: 3,
        title: 'SUPER COOLING FAN FOR THE PS5GAMING CONSOLE',
        img: '/images/product-3.png'
    },
    {
        id: 4,
        title: 'HEADSET PS4 WHITE LIGHTWEIGHT CORDED HEADSET WHITE',
        img: '/images/product-4.png'
    },
    {
        id: 5,
        title: 'ADAPTER PLUS CONTROLLER CROSSOVER- GE1337P2, BLACK',
        img: '/images/product-5.png'
    },
    {
        id: 6,
        title: 'ADVANCED ALL-IN-ONE VIRTUALREALITY HEADSET - 64 GB',
        img: '/images/product-6.png'
    },
]

const page = () => {
    const [list, setList] = useState(false)
    const [value, setValue] = useState([50, 300])
    const handleChange = (event: any) => {
        setValue(event)
    }
    return (
        <>
            <section className="banner-section inner-banner loyalty-banner coach">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Our Shop</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Our Shop</li>
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

            <section className="coaching-section shop">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-sm-8">
                                <div className="sidebar position-sticky top-0">
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Filter by Price</h6>
                                        <div className="sidebar-single-item rangeslide">
                                            <div>
                                                <RangeSlider onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} id="green" min={0} max={1000} step={1} defaultValue={[50, 300]} />
                                            </div>
                                            <div className="bottom-area mt-3 d-flex align-items-center justify-content-between">
                                                <button className="cmn-btn alt">Filter</button>
                                                <p> Price: $<span className="min-val">{value[0]}</span> - $<span className="max-val">{value[1]}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Search</h6>
                                        <div className="sidebar-single-item">
                                            <form action="#">
                                                <div className="single-input">
                                                    <input type="text" placeholder="Search for articles" />
                                                    <button className="cmn-btn">Search</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Rating</h6>
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
                                    <div className="single-sidebar">
                                        <h6 className="title-area m-none">Tags</h6>
                                        <div className="sidebar-single-item">
                                            <div className="tags">
                                                <div className="d-fle">
                                                    <Link href="">device</Link>
                                                    <Link href="">games</Link>
                                                    <Link href="">graphic</Link>
                                                    <Link href="">mobile</Link>
                                                    <Link href="">products</Link>
                                                    <Link href="">trending</Link>
                                                </div>
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
                                        productData.map(({ id, img, title }) => (
                                            <div key={id} className={`single-item ${list ? 'list' : ''}`}>
                                                <div className="top-area">
                                                    <div className="thumb">
                                                        <img src={img} alt="image" />
                                                        <span>Sale</span>
                                                    </div>
                                                </div>
                                                <div className="aurthor-content">
                                                    <div className="coaches-area">
                                                        <Link href="shop-single"><h6>{title}</h6></Link>
                                                        <div className="profile-area m-0">
                                                            <div className="review-vote">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="star-area">
                                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                                        <span>(5)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="footer-area mt-4 d-flex align-items-center justify-content-between">
                                                        <p className="xlr">$69.99 <span className="delete"><del>$89.99</del></span></p>
                                                        <div className="right-content d-flex align-items-center justify-content-between">
                                                            <Link href="shop-single" className="whishlist"><img src="/images/icon/cart-icon.png" alt="icon" /></Link>
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