"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Header = () => {
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [scrollTop, setScrollTop] = useState(false);
    const path = usePathname()
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            if (window.scrollY > 500) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    setLoading(false);
                }, 500);
            }, 300);
        }
    }, []);
    const handleScrollToTop = () => {
        window.scrollTo(0, 0);
    }
    const activePage = path === '/about-us' || path === '/become-coach' || path === '/dashboard' || path === '/dashboard/orders' || path === '/dashboard/personal-info' || path === '/dashboard/invoices' || path === '/dashboard/payment' || path === '/dashboard/password' || path === '/gift-card' || path === '/gift-card-details' || path === '/gift-card-details-2' || path === '/blog' || path === "/blog-single" || path === "/booking-details" || path === "/booking-details-2" || path === '/booking-details-3' || path === "/shop-grid-list" || path === '/shop-single' || path === '/loyalty' || path === "/seller-details" || path === "/careers" || path === "/faq" || path === "/how-works" || path === "/cart" || path === "/terms-conditions" || path === "/privacy-policy" ? "active" : ''
    return (
        <>
            {loading && <div className="preloader" id="preloader"></div>}
            <span onClick={handleScrollToTop} className={`scrollToTop ${scrollTop && 'active'}`}><i className="fas fa-angle-double-up"></i></span>
            <header className={`header-section ${scrolled && 'animated fadeInDown header-fixed'}`}>
                <div className="overlay">
                    <div className="container">
                        <div className="row d-flex header-area">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <Link className="navbar-brand" href="/">
                                    <img src="/images/logo.png" className="logo" alt="logo" />
                                </Link>
                                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbar-content">
                                    <i className="fas fa-bars"></i>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbar-content">
                                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown main-navbar">
                                            <Link className={`nav-link dropdown-toggle ${path === '/' || path === '/index-2' || path === '/index-3' || path === '/index-4' || path === '/index-5' ? 'active' : ''}`} href="#"
                                                data-bs-toggle="dropdown" data-bs-auto-close="outside">Home</Link>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li><Link className="nav-link" href="/">Home 01</Link></li>
                                                <li><Link className="nav-link" href="/index-2">Home 02</Link></li>
                                                <li><Link className="nav-link" href="/index-3">Home 03</Link></li>
                                                <li><Link className="nav-link" href="/index-4">Home 04</Link></li>
                                                <li><Link className="nav-link" href="/index-5">Home 05</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown main-navbar">
                                            <Link className={`nav-link dropdown-toggle ${path === '/coaching' || path === '/coaching-grid-list' || path === '/coaching-details' ? 'active' : ''}`} href="#"
                                                data-bs-toggle="dropdown" data-bs-auto-close="outside">Coaching</Link>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li><Link className="nav-link" href="/coaching">Coaching</Link></li>
                                                <li><Link className="nav-link" href="/coaching-grid-list">Coaching 2</Link></li>
                                                <li><Link className="nav-link" href="/coaching-details">Coaching Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown main-navbar">
                                            <Link className={`nav-link dropdown-toggle ${path === '/coaches-grid-list' || path === '/coaches-details' ? 'active' : ''}`} href="#"
                                                data-bs-toggle="dropdown" data-bs-auto-close="outside">Coaches</Link>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li><Link className="nav-link" href="/coaches-grid-list">Coaches</Link></li>
                                                <li><Link className="nav-link" href="/coaches-details">Coaches Details</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown main-navbar">
                                            <Link className={`nav-link dropdown-toggle ${activePage}`} href="#"
                                                data-bs-toggle="dropdown" data-bs-auto-close="outside">Pages</Link>
                                            <ul className="dropdown-menu main-menu shadow">
                                                <li><Link className="nav-link" href="/about-us">About Us</Link></li>
                                                <li><Link className="nav-link" href="/become-coach">Become Coach</Link></li>
                                                <li className="dropend sub-navbar">
                                                    <Link href="#" className="dropdown-item dropdown-toggle"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="outside">Dashboard</Link>
                                                    <ul className="dropdown-menu sub-menu shadow">
                                                        <li><Link className="nav-link" href="/dashboard">Dashboard</Link></li>
                                                        <li><Link className="nav-link" href="/dashboard/orders">My Orders</Link></li>
                                                        <li><Link className="nav-link" href="/dashboard/personal-info">Information</Link></li>
                                                        <li><Link className="nav-link" href="/dashboard/invoices">Invoices</Link></li>
                                                        <li><Link className="nav-link" href="/dashboard/payment">Payment</Link></li>
                                                        <li><Link className="nav-link" href="/dashboard/password">Password</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropend sub-navbar">
                                                    <Link href="#" className="dropdown-item dropdown-toggle"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="outside">Gift Card</Link>
                                                    <ul className="dropdown-menu sub-menu shadow">
                                                        <li><Link className="nav-link" href="/gift-card">Gift Card</Link></li>
                                                        <li><Link className="nav-link" href="/gift-card-details">Gift Card Details</Link></li>
                                                        <li><Link className="nav-link" href="/gift-card-details-2">Card Details 2</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropend sub-navbar">
                                                    <Link href="#" className="dropdown-item dropdown-toggle"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="outside">Blog</Link>
                                                    <ul className="dropdown-menu sub-menu shadow">
                                                        <li><Link className="nav-link" href="/blog">Blog</Link></li>
                                                        <li><Link className="nav-link" href="/blog-single">Blog Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropend sub-navbar">
                                                    <Link href="#" className="dropdown-item dropdown-toggle"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="outside">Booking Details</Link>
                                                    <ul className="dropdown-menu sub-menu shadow">
                                                        <li><Link className="nav-link" href="/booking-details">Booking Details</Link></li>
                                                        <li><Link className="nav-link" href="/booking-details-2">Booking Details 2</Link></li>
                                                        <li><Link className="nav-link" href="/booking-details-3">Booking Details 3</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropend sub-navbar">
                                                    <Link href="#" className="dropdown-item dropdown-toggle"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="outside">Shop</Link>
                                                    <ul className="dropdown-menu sub-menu shadow">
                                                        <li><Link className="nav-link" href="/shop-grid-list">Shop</Link></li>
                                                        <li><Link className="nav-link" href="/shop-single">Shop Single</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link className="nav-link" href="/loyalty">Loyalty</Link></li>
                                                <li><Link className="nav-link" href="/seller-details">Seller Details</Link></li>
                                                <li><Link className="nav-link" href="/careers">Careers</Link></li>
                                                <li><Link className="nav-link" href="/faq">FAQs</Link></li>
                                                <li><Link className="nav-link" href="/how-works">How It Works</Link></li>
                                                <li><Link className="nav-link" href="/cart">Cart</Link></li>
                                                <li><Link className="nav-link" href="/terms-conditions">Terms Conditions</Link></li>
                                                <li><Link className="nav-link" href="/privacy-policy">Privacy Policy</Link></li>
                                                <li><Link className="nav-link" href="/error">Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className={`nav-item`}>
                                            <Link className={`nav-link ${path === '/contact'?'active':''}`} href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                    <div className="right-area header-action d-flex align-items-center max-un">
                                        <Link href="login" className="login">Login</Link>
                                        <Link href="register" className="cmn-btn">Sign Up
                                            <i className="icon-d-right-arrow-2"></i>
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;