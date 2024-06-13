import Link from 'next/link';
import React from 'react';

const MasterClass = () => {
    return (
        <section className="join-now">
            <div className="overlay pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-xl-0 order-1">
                            <div className="sec-img">
                                <img src="/images/join-now.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-text">
                                <h5 className="sub-title">MASTERCLASS</h5>
                                <h2 className="title">LEARN FROM THE PROS</h2>
                                <p className="mb-20">Boost your gaming skills with Egamlio. The best produced esport coaching across various video categories. Exclusive coaching with targets.</p>
                                <p>Ready to improve? Learn from the best.</p>
                            </div>
                            <Link href="register" className="cmn-btn">JOIN US</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterClass;