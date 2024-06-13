import Link from 'next/link';
import React from 'react';
const blogData = [
    {
        id: 1,
        img: '/images/blog-image-1.png',
        title: 'BASIC GUIDE TO ITEMS IN TEAMFIGHT TACTICS',
        tag: 'GUIDES',
        date: 'JULY 4 2023'
    },
    {
        id: 2,
        img: '/images/blog-image-2.png',
        title: 'A SELF PORTRAIT WHO WE ARE AND THE ROLEOF ESPORTS COACHING DURING COVID-19',
        tag: 'GUIDES',
        date: 'JULY 4 2023'
    },
    {
        id: 3,
        img: '/images/blog-image-3.png',
        title: 'APEX LEGENDS GUIDE: THE EASIEST WAYTO DROP FASTER AND FURTHER',
        tag: 'GUIDES',
        date: 'JULY 4 2023'
    },
    {
        id: 4,
        img: '/images/blog-image-4.png',
        title: 'WIN FROM THE CHAMPION SELECT INLEAGUE OF LEGENDS – PART 5',
        tag: 'GUIDES',
        date: 'JULY 4 2023'
    },
    {
        id: 5,
        img: '/images/blog-image-1.png',
        title: 'BASIC GUIDE TO ITEMS IN TEAMFIGHT TACTICS',
        tag: 'UPDATES',
        date: 'JULY 4 2023'
    },
    {
        id: 6,
        img: '/images/blog-image-2.png',
        title: 'A SELF PORTRAIT WHO WE ARE AND THE ROLEOF ESPORTS COACHING DURING COVID-19',
        tag: 'UPDATES',
        date: 'JULY 4 2023'
    },
    {
        id: 7,
        img: '/images/blog-image-3.png',
        title: 'APEX LEGENDS GUIDE: THE EASIEST WAYTO DROP FASTER AND FURTHER',
        tag: 'UPDATES',
        date: 'JULY 4 2023'
    },
    {
        id: 8,
        img: '/images/blog-image-4.png',
        title: 'WIN FROM THE CHAMPION SELECT INLEAGUE OF LEGENDS – PART 5',
        tag: 'UPDATES',
        date: 'JULY 4 2023'
    },
    {
        id: 9,
        img: '/images/blog-image-1.png',
        title: 'BASIC GUIDE TO ITEMS IN TEAMFIGHT TACTICS',
        tag: 'COACH',
        date: 'JULY 4 2023'
    },
    {
        id: 10,
        img: '/images/blog-image-2.png',
        title: 'A SELF PORTRAIT WHO WE ARE AND THE ROLEOF ESPORTS COACHING DURING COVID-19',
        tag: 'COACH',
        date: 'JULY 4 2023'
    },
    {
        id: 11,
        img: '/images/blog-image-3.png',
        title: 'APEX LEGENDS GUIDE: THE EASIEST WAYTO DROP FASTER AND FURTHER',
        tag: 'COACH',
        date: 'JULY 4 2023'
    },
    {
        id: 12,
        img: '/images/blog-image-4.png',
        title: 'WIN FROM THE CHAMPION SELECT INLEAGUE OF LEGENDS – PART 5',
        tag: 'COACH',
        date: 'JULY 4 2023'
    },
]
const page = () => {
    return (
        <>
            <section className="banner-section inner-banner loyalty-banner coach blog">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Blog</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
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

            <section className="blog-section">
                <div className="overlay pt-120 pb-120">
                    <div className="container wow fadeInUp">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <ul className="nav nav-tabs justify-content-between mb-30" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="cmn-btn alt active" id="guides-tab" data-bs-toggle="tab"
                                            data-bs-target="#guides" type="button" role="tab"
                                            aria-controls="guides" aria-selected="true">guides</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="cmn-btn alt" id="updates-tab" data-bs-toggle="tab"
                                            data-bs-target="#updates" type="button" role="tab"
                                            aria-controls="updates" aria-selected="false">updates</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="cmn-btn alt" id="coach-tab" data-bs-toggle="tab"
                                            data-bs-target="#coach" type="button" role="tab"
                                            aria-controls="coach" aria-selected="false">coach</button>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="guides" role="tabpanel"
                                        aria-labelledby="guides-tab">
                                        <div className="tab-blog-item">
                                            {
                                                blogData.filter(blog => blog.tag === "GUIDES").map(({ id, date, img, tag, title }) => (
                                                    <div key={id} className="blog-single">
                                                        <div className="image-area">
                                                            <img src={img} alt="image" />
                                                        </div>
                                                        <div className="bottom-item">
                                                            <div className="head-area d-flex align-items-center">
                                                                <span className="mdr">{tag}</span>
                                                                <p className="mdr">{date}</p>
                                                            </div>
                                                            <Link href="blog-single"><h5>{title}</h5></Link>
                                                            <Link href="blog-single" className="learn-more">
                                                                Learn More
                                                                <div className="icon-area">
                                                                    <img src="/images/icon/right-arrow-3.png" alt="image" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <nav aria-label="Page navigation" className="d-flex justify-content-center pagination-area mt-40">
                                                <Link className="page-btn previous" href="#" aria-label="Previous">
                                                    <i className="icon-e-double-right-arrow"></i>
                                                    <span>Previous</span>
                                                </Link>
                                                <ul className="pagination justify-content-center align-items-center">
                                                    <li className="page-item"><Link className="page-link" href="#">01</Link></li>
                                                    <li className="page-item"><Link className="page-link active" href="#">02</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#">04</Link></li>
                                                </ul>
                                                <Link className="page-btn next" href="#" aria-label="Next">
                                                    <span>Next</span>
                                                    <i className="icon-e-double-right-arrow"></i>
                                                </Link>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="updates" role="tabpanel"
                                        aria-labelledby="updates-tab">
                                        <div className="tab-blog-item">
                                            {
                                                blogData.filter(blog => blog.tag === "UPDATES").map(({ id, date, img, tag, title }) => (
                                                    <div key={id} className="blog-single">
                                                        <div className="image-area">
                                                            <img src={img} alt="image" />
                                                        </div>
                                                        <div className="bottom-item">
                                                            <div className="head-area d-flex align-items-center">
                                                                <span className="mdr">{tag}</span>
                                                                <p className="mdr">{date}</p>
                                                            </div>
                                                            <Link href="blog-single"><h5>{title}</h5></Link>
                                                            <Link href="blog-single" className="learn-more">
                                                                Learn More
                                                                <div className="icon-area">
                                                                    <img src="/images/icon/right-arrow-3.png" alt="image" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <nav aria-label="Page navigation" className="d-flex justify-content-center pagination-area mt-40">
                                                <Link className="page-btn previous" href="#" aria-label="Previous">
                                                    <i className="icon-e-double-right-arrow"></i>
                                                    Previous
                                                </Link>
                                                <ul className="pagination justify-content-center align-items-center">
                                                    <li className="page-item"><Link className="page-link" href="#">01</Link></li>
                                                    <li className="page-item"><Link className="page-link active" href="#">02</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#">04</Link></li>
                                                </ul>
                                                <Link className="page-btn next" href="#" aria-label="Next">
                                                    Next
                                                    <i className="icon-e-double-right-arrow"></i>
                                                </Link>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="coach" role="tabpanel"
                                        aria-labelledby="coach-tab">
                                        <div className="tab-blog-item">
                                            {
                                                blogData.filter(blog => blog.tag === "COACH").map(({ id, date, img, tag, title }) => (
                                                    <div key={id} className="blog-single">
                                                        <div className="image-area">
                                                            <img src={img} alt="image" />
                                                        </div>
                                                        <div className="bottom-item">
                                                            <div className="head-area d-flex align-items-center">
                                                                <span className="mdr">{tag}</span>
                                                                <p className="mdr">{date}</p>
                                                            </div>
                                                            <Link href="blog-single"><h5>{title}</h5></Link>
                                                            <Link href="blog-single" className="learn-more">
                                                                Learn More
                                                                <div className="icon-area">
                                                                    <img src="/images/icon/right-arrow-3.png" alt="image" />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            <nav aria-label="Page navigation" className="d-flex justify-content-center pagination-area mt-40">
                                                <Link className="page-btn previous" href="#" aria-label="Previous">
                                                    <i className="icon-e-double-right-arrow"></i>
                                                    Previous
                                                </Link>
                                                <ul className="pagination justify-content-center align-items-center">
                                                    <li className="page-item"><Link className="page-link" href="#">01</Link></li>
                                                    <li className="page-item"><Link className="page-link active" href="#">02</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#">03</Link></li>
                                                    <li className="page-item"><Link className="page-link" href="#">04</Link></li>
                                                </ul>
                                                <Link className="page-btn next" href="#" aria-label="Next">
                                                    Next
                                                    <i className="icon-e-double-right-arrow"></i>
                                                </Link>
                                            </nav>
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
                                        <h5>Subscribe to Our News Letter!</h5>
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
                                            <Link href="blog-single"><h6>What is Ability Hastein Wild Rift?</h6></Link>
                                        </div>
                                        <div className="items">
                                            <div className="icon-area">
                                                <img src="/images/blog-sidebar-image-2.png" alt="image" />
                                            </div>
                                            <Link href="blog-single"><h6>5 Mistakes That CouldBe Costing You Wins</h6></Link>
                                        </div>
                                        <div className="items">
                                            <div className="icon-area">
                                                <img src="/images/blog-sidebar-image-3.png" alt="image" />
                                            </div>
                                            <Link href="blog-single"><h6>What Is Offlane inDota 2</h6></Link>
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