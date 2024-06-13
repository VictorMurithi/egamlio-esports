"use client"
import About from '@/components/home1/About';
import Faq from '@/components/home1/Faq';
import HowWorks from '@/components/home1/HowWorks';
import Link from 'next/link';

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
                                        <h2>About Us</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
            {/* About */}
            <About />
            {/* How It works */}
            <HowWorks />
            {/* Faq */}
            <Faq />
        </>
    );
};

export default page;