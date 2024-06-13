"use client"
import Faq from '@/components/home1/Faq';
import HowWorks from '@/components/home1/HowWorks';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
            <section className="banner-section inner-banner coach cart">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>How It Works</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">How It Works</li>
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
            <HowWorks />
            <Faq />
        </>
    );
};

export default page;