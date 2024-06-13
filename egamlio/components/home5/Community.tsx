import Link from 'next/link';
import React from 'react';

const Community = () => {
    return (
        <section className="communtiy second index-5">
            <div className="overlay pb-120">
                <div className="container wow fadeInUp">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xxl-8">
                            <div className="section-header">
                                <h5 className="sub-title">One community,millions of winners</h5>
                                <h2 className="title">Play with a Pro</h2>
                                <p>Our elite coaches are in the top 1% and can help you take your play to the next level.Learn from the pros with our original courses. Made exclusively by gaming legends.</p>
                            </div>
                            <div className="feature d-flex align-items-center justify-content-between">
                                <div className="single-feature">
                                    <h6>Elite Coaches</h6>
                                    <p>Top 1% of players globally</p>
                                </div>
                                <div className="single-feature border-area">
                                    <h6>Book Instantly</h6>
                                    <p>24/7 access to 2,500+ coaches</p>
                                </div>
                                <div className="single-feature">
                                    <h6>Trusted by Gamers</h6>
                                    <p>100,000+ coaches rated 5 stars</p>
                                </div>
                            </div>
                            <Link href="register" className="cmn-btn mt-40">Join Now</Link>
                        </div>
                        <div className="col-xxl-4">
                            <div className="main-content">
                                <div className="bg-area">
                                    <img className="bg-item max-un" src="/images/comunity-circle.png" alt="image" />
                                </div>
                                <div className="community-item">
                                    <img src="/images/community-01.png" alt="image" className="item item-1" />
                                    <img src="/images/community-02.png" alt="image" className="item item-2" />
                                    <img src="/images/community-03.png" alt="image" className="item item-3" />
                                    <img src="/images/community-04.png" alt="image" className="item item-4" />
                                    <img src="/images/community-05.png" alt="image" className="item item-5" />
                                    <img src="/images/community-06-alt.png" alt="image" className="item item-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Community;