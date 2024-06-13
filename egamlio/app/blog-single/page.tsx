import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <>
           <section className="banner-section inner-banner loyalty-banner coach blog-single">
        <div className="overlay">
            <div className="banner-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10">
                            <div className="main-content">
                                <h2>Blog Single</h2>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb d-flex align-items-center">
                                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                            <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Blog Single</li>
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
  
    <section className="blog-section details">
        <div className="overlay pb-120">
            <div className="container wow fadeInUp">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-single">
                            <div className="image-area">
                                <img src="/images/blog-image-5.png" alt="image" />
                            </div>
                            <div className="bottom-item">
                                <div className="head-area d-flex align-items-center">
                                    <span>Guides</span>
                                    <p>JULY 4, 2022</p>
                                </div>
                                <h2>A Self Portrait Who we are and the Role of Esports Coaching during COVID-19</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-40">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details-content">
                            <div className="best-league">
                                <h3>Who Are The Best League of Legends Support Players?</h3>
                                <p>Duis aute <span>irure dolor in reprehenderit</span> in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <ul>
                                    <li>Pretium nibh ipsum consequat nisl vel pretium. Sed vulputate mi sit</li>
                                    <li>Praesent vitae felis id enim elementum sagittis et ut tortor</li>
                                    <li>Donec sodales euismod risus. Fusce id enim tristique, ultrices est ut, volutpat eros.</li>
                                </ul>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <span>ut labore et dolore magna aliqua.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                            </div>
                            <h4>Playing Dota 2 and Considering Professional Coaching</h4>
                            <p>Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Iaculis eu non diam phasellus</p>
                            <div className="image-area text-center">
                                <img src="/images/blog-details-image-1.png" alt="image" />
                                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <p>Bibendum at varius vel pharetra vel turpis nunc. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Volutpat est velit egestas dui id ornare.</p>
                            <div className="blackquote">
                                <p className="xxxlr m-0">
                                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor porta rhoncus, viverra sit et auctor. Augue in volutpat sed eget in etiam.”
                                </p>
                            </div>
                            <div className="recent-valorant mt-3">
                                <h5>Recent Valorant Changes</h5>
                                <p>Tincidunt nunc pulvinar sapien et ligula. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Aliquet bibendum enim facilisis gravida neque convallis a cras. Molestie nunc non blandit massa enim nec dui nunc.</p>
                            </div>
                            <div className="author-area d-flex">
                                <div className="icon-area">
                                    <img src="/images/author-profile-3.png" className="max-un" alt="image" />
                                </div>
                                <div className="text-area">
                                    <h5>Dan Walton</h5>
                                    <p>Augue lacus viverra vitae congue eu consequat ac felis donec. Pellentesque pulvinar pellentesque.</p>
                                    <div className="social">
                                        <ul className="footer-link">
                                            <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitch"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9">
                        <div className="blog-sidebar">
                            <div className="single-side">
                                <div className="icon-area">
                                    <img src="/images/icon/blog-sidebar-icon-1.png" alt="image" />
                                </div>
                                <h5>Subscribe to  Our News Letter!</h5>
                                <form action="#">
                                    <div className="single-input">
                                        <input type="text" placeholder="Enter Your Email" />
                                        <button className="cmn-btn">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                            <div className="single-side">
                                <div className="icon-area">
                                    <img src="/images/icon/blog-sidebar-icon-2.png" alt="image" />
                                </div>
                                <h5>Search on the blog</h5>
                                <form action="#">
                                    <div className="single-input">
                                        <input type="text" placeholder="Search for address" />
                                        <button className="cmn-btn">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div className="single-side pt-2">
                                <h5>Popular Articles</h5>
                                <div className="items">
                                    <div className="icon-area">
                                        <img src="/images/blog-sidebar-image-1.png" alt="image" />
                                    </div>
                                    <h6>What is Ability Hastein Wild Rift?</h6>
                                </div>
                                <div className="items">
                                    <div className="icon-area">
                                        <img src="/images/blog-sidebar-image-2.png" alt="image" />
                                    </div>
                                    <h6>5 Mistakes That CouldBe Costing You Wins</h6>
                                </div>
                                <div className="items">
                                    <div className="icon-area">
                                        <img src="/images/blog-sidebar-image-3.png" alt="image" />
                                    </div>
                                    <h6>What Is Offlane inDota 2</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
        </>
    );
};

export default page;