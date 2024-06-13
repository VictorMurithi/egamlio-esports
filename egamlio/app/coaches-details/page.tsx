"use client"
import { useId, useState } from "react";
import Select, { StylesConfig } from "react-select";
import ModalVideo from 'react-modal-video'
import Link from "next/link";

interface Option {
    value: string;
    label: string;
}
const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'relevent', label: 'Most Relevent' },
];
const participentOptions = [
    { value: '1', label: '1 Partici..' },
    { value: '2', label: '2 Partici..' },
    { value: '3', label: '3 Partici..' },
];
const timeOptions = [
    { value: '10', label: '10 Hours' },
    { value: '15', label: '15 Hours' },
    { value: '20', label: '20 Hours' },
];
const courseData = [
    {
        id: 1,
        title: 'INTRODUCTION TO THE COURSE',
        img: '/images/popup-video-bg-2.png',
        desc: 'In this episode, Descripe about the course outline and short intruction about Jaydon Curtis'
    },
    {
        id: 2,
        title: 'THE PURPOSE OF THE LANING PHASE AS S TOPLANER',
        img: '/images/popup-video-bg-3.png',
        desc: 'In this episode, Descripe about the course outline and short intruction about Jaydon Curtis'
    },
    {
        id: 3,
        title: 'CHAMPION SELECT AND RUNES',
        img: '/images/popup-video-bg-4.png',
        desc: 'In this episode, Descripe about the course outline and short intruction about Jaydon Curtis'
    },
    {
        id: 4,
        title: 'TRADING PATTERNS AND MATCH UPS PT. 1',
        img: '/images/popup-video-bg-5.png',
        desc: 'In this episode, Descripe about the course outline and short intruction about Jaydon Curtis'
    },
    {
        id: 5,
        title: 'TRADING PATTERNS AND MATCH UPS PT. 2',
        img: '/images/popup-video-bg-6.png',
        desc: 'In this episode, Descripe about the course outline and short intruction about Jaydon Curtis'
    },
    {
        id: 6,
        title: 'WAVE MANIPULATION',
        img: '/images/popup-video-bg-7.png',
        desc: 'In this episode, Descripe about the course outline and short intruction about Jaydon Curtis'
    },
]
const page = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(sortOptions[0]);
    const [selectedOption2, setSelectedOption2] = useState<Option | null | unknown>(participentOptions[1]);
    const [selectedOption3, setSelectedOption3] = useState<Option | null | unknown>(timeOptions[0]);
    const [isOpen, setOpen] = useState(false)
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#242882",
            color: '#ffffff',
            width: 'auto',
            borderColor:'#4A54AF',
            height: '45px',
            borderRadius: '10px',
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
            <section className="banner-section inner-banner coaching coaching-details">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="main-content">
                                        <h1>Coaches Details</h1>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Coaches Details</li>
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

            <section className="coaching-details-section coaches">
                <div className="overlay pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-9 col-xl-12">
                                <div className="author-content">
                                    <div className="profile-area d-flex">
                                        <div className="profile-bage position-relative">
                                            <div className="profile-img d-flex justify-content-center">
                                                <img src="/images/author-profile.png" className="max-un" alt="image" />
                                                <span className="mdr">1</span>
                                            </div>
                                            <div className="base-area">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="bage-head mt-3">
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
                                        <div className="profile-info w-100">
                                            <div className="top-area d-flex align-items-center justify-content-between">
                                                <div className="name-area">
                                                    <h5 className="mb-3">JAYDON CURTIS ...</h5>
                                                    <div className="review-vote d-flex align-items-center">
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
                                                        <div className="location d-flex align-items-center">
                                                            <img src="/images/icon/maps.png" alt="icon" />
                                                            <span>UNITED STATES</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="message-area d-flex align-items-center justify-content-between">
                                                    <Link href="" className="cmn-btn"><i className="fab fa-youtube"></i></Link>
                                                    <Link href="" className="cmn-btn"><i className="fas fa-comment-alt"></i></Link>
                                                    <Link href="" className="cmn-btn alt"><i className="fas fa-comments comment"></i>
                                                        Send Message</Link>
                                                </div>
                                            </div>
                                            <div className="bottom-area">
                                                <h4 className="mb-2">Teaches Mid Lane</h4>
                                                <div className="coaches-area">
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
                                                    <div className="tags m-0 b-none">
                                                        <div className="d-fle">
                                                            <Link href="">Champions & Runes</Link>
                                                            <Link href="">Top Lane Matchups</Link>
                                                            <Link href="">Wave Manipulation</Link>
                                                            <Link href="">Rumble Guide</Link>
                                                            <Link href="">Sidelane Pressure</Link>
                                                            <Link href="">Team Fighting</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-single mt-60">
                                    <h5 className="mb-2">Trailer</h5>
                                    <div className="para">
                                        <p>You will learn what others take years of League of Legends to figure out, in just a few hours. This course takes you by the hand and puts you on your path to complete top-lane domination. Smash your opponent every game and take control of the game from the top side all the way to the enemy nexus. From lane trading to side-lane pressure, champion guides and proper decision making Odoamne takes his years of top LEC experience and gives it to you in this complete 3 hour course. Learn the secret tips that are otherwise not shared anywhere else and immediately use them in your solo queue experienc</p>
                                    </div>
                                    <div className="you-will-earn">
                                        <div className="mb-20">
                                            <h4>the things you will learn</h4>
                                            <p>To see a list of all lessons</p>
                                        </div>
                                        <div className="item-parants gap-4">
                                            <div className="single-earn d-flex">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <div className="text-area">
                                                    <h5>Champions & Runes</h5>
                                                    <p>Get the best champion picks and rune selections for the best meta champions.</p>
                                                </div>
                                            </div>
                                            <div className="single-earn d-flex">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <div className="text-area">
                                                    <h5>Top Lane Matchups</h5>
                                                    <p>Understand laning phase and how to trade effectively to build up a lead.</p>
                                                </div>
                                            </div>
                                            <div className="single-earn d-flex">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <div className="text-area">
                                                    <h5>Wave Manipulation</h5>
                                                    <p>Manage your waves properly to set up an advantage or accelerate your farm.</p>
                                                </div>
                                            </div>
                                            <div className="single-earn d-flex">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <div className="text-area">
                                                    <h5>Rumble Guide</h5>
                                                    <p>Orange Checkmark for bullets Learn how to play Rumble like a top challenger</p>
                                                </div>
                                            </div>
                                            <div className="single-earn d-flex">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <div className="text-area">
                                                    <h5>Sidelane Pressure</h5>
                                                    <p>Suffocate your opponents with proper side lane pressure and abuse lane</p>
                                                </div>
                                            </div>
                                            <div className="single-earn d-flex">
                                                <div className="img-area">
                                                    <img src="/images/icon/check.png" alt="image" />
                                                </div>
                                                <div className="text-area">
                                                    <h5>Team Fighting</h5>
                                                    <p>Win team fights convincingly and get the most out of your champion.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="description">
                                        <h5 className="mb-2">Description </h5>
                                        <div className="para">
                                            <p>You will learn what others take years of League of Legends to figure out, in just a few hours. This course takes you by the hand and puts you on your path to complete top-lane domination. Smash your opponent every game and take control of the game from the top side all the way to the enemy nexus. From lane trading to side-lane pressure, champion guides and proper decision making Odoamne takes his years of top LEC experience and gives it to you in this complete 3 hour course. Learn the secret tips that are otherwise not shared anywhere else and immediately use them in your solo queue experience.</p>
                                        </div>
                                        <ul className="feature-item mt-4">
                                            <li>
                                                <img src="/images/icon/description-icon-1.png" alt="icon" />
                                                24/7 Access
                                            </li>
                                            <li>
                                                <img src="/images/icon/description-icon-2.png" alt="icon" />
                                                21 In-depth espisodes
                                            </li>
                                            <li>
                                                <img src="/images/icon/description-icon-3.png" alt="icon" />
                                                Cross Platform Content
                                            </li>
                                            <li>
                                                <img src="/images/icon/description-icon-4.png" alt="icon" />
                                                Exclusive Information
                                            </li>
                                            <li>
                                                <img src="/images/icon/description-icon-5.png" alt="icon" />
                                                Hours of on-demand content
                                            </li>
                                            <li>
                                                <img src="/images/icon/description-icon-6.png" alt="icon" />
                                                Advanced Breakdowns
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cus-mar mt-60">
                                        <div className="content-head mb-4 d-flex align-items-center justify-content-between">
                                            <h5>Featured review</h5>
                                            <Link href="">See all reviews</Link>
                                        </div>
                                        <div className="content-area d-flex mb-30">
                                            <div className="img-area">
                                                <img src="/images/customers-2.png" className="max-un" alt="image" />
                                            </div>
                                            <div className="info-area">
                                                <div className="bottom d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <p>booked a session and did it the next day, got some good tips to help with getting
                                                    ahead in lane and being more effective on map. definitely would recommend and be
                                                    back again</p>
                                                <div className="info-bottom mt-2 d-flex align-items-center">
                                                    <p className="mdr">Was this  review helpful?</p>
                                                    <Link href="">
                                                        <img src="/images/icon/like.png" alt="icon" />
                                                        Helpful
                                                    </Link>
                                                    <Link href="">
                                                        <img src="/images/icon/dislike.png" alt="icon" />
                                                        Not Helpful
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lesson-plan">
                                        <h5 className="mb-4">Lesson Plan</h5>
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
                                        {/* Lessons list */}
                                        {
                                            courseData.map(({ id, title, img, desc }) => (
                                                <div key={id} className="lesson-single d-flex align-items-center">
                                                    <div className="how-works sidebar">
                                                        <div className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                            <div className="bg-area">
                                                                <img className="bg-item" src={img} alt="image" />
                                                            </div>
                                                            <span onClick={() => setOpen(true)} className="mfp-iframe popupvideo position-absolute">
                                                                <img src="/images/icon/popup-icon.png" alt="icon" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text-area">
                                                        <span className="mdr">LESSON {id}</span>
                                                        <h6>{title}</h6>
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                        <div className="show-more mt-30">
                                            <Link href="">Show more</Link>
                                        </div>
                                    </div>
                                    <div className="reviews-area mt-60">
                                        <div className="head-area d-flex justify-content-between align-items-center">
                                            <div className="head-left d-flex align-items-center">
                                                <h5 className="m-0">7 Reviews</h5>
                                                <div className="star-area">
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <Link href=""><i className="fas fa-star"></i></Link>
                                                    <span>(5)</span>
                                                </div>
                                            </div>
                                            <div className="head-right d-flex gap-2 align-items-center">
                                                <p>Sort By</p>
                                                <Select
                                                    instanceId={useId()}
                                                    defaultValue={selectedOption}
                                                    onChange={setSelectedOption}
                                                    options={sortOptions}
                                                    components={{
                                                        IndicatorSeparator: () => null,
                                                    }}
                                                    styles={customStyles}
                                                />
                                            </div>
                                        </div>
                                        <div className="review-details">
                                            <ul className="left-area">
                                                <li className="highlight">
                                                    <span>5 Stars</span>
                                                    <span className="line-bar"></span>
                                                    <span>(7)</span>
                                                </li>
                                                <li>
                                                    <span>4 Stars</span>
                                                    <span className="line-bar"></span>
                                                    <span>(0)</span>
                                                </li>
                                                <li>
                                                    <span>3 Stars</span>
                                                    <span className="line-bar"></span>
                                                    <span>(0)</span>
                                                </li>
                                                <li>
                                                    <span>2 Stars</span>
                                                    <span className="line-bar"></span>
                                                    <span>(0)</span>
                                                </li>
                                                <li>
                                                    <span>1 Stars</span>
                                                    <span className="line-bar"></span>
                                                    <span>(0)</span>
                                                </li>
                                            </ul>
                                            <div className="right-area">
                                                <h6 className="m-0 mb-3">Rating Breakdown</h6>
                                                <ul>
                                                    <li>
                                                        <span>Seller communication level</span>
                                                        <span>5<i className="fas fa-star"></i></span>
                                                    </li>
                                                    <li>
                                                        <span>Recommend to a friend</span>
                                                        <span>5<i className="fas fa-star"></i></span>
                                                    </li>
                                                    <li>
                                                        <span>Service as described</span>
                                                        <span>5<i className="fas fa-star"></i></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cus-mar mt-60">
                                        <h5 className="mb-20">Customers voice</h5>
                                        <div className="content-area d-flex mb-30">
                                            <div className="img-area">
                                                <img src="/images/customers-2.png" className="max-un" alt="image" />
                                            </div>
                                            <div className="info-area">
                                                <div className="bottom d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <p>booked a session and did it the next day, got some good tips to help with getting
                                                    ahead in lane and being more effective on map. definitely would recommend and be
                                                    back again</p>
                                                <div className="info-bottom mt-2 d-flex align-items-center">
                                                    <p className="mdr">Published 1 week ago</p>
                                                    <Link href="">
                                                        <img src="/images/icon/like.png" alt="icon" />
                                                        Helpful
                                                    </Link>
                                                    <Link href="">
                                                        <img src="/images/icon/dislike.png" alt="icon" />
                                                        Not Helpful
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area d-flex mb-30">
                                            <div className="img-area">
                                                <img src="/images/customers-3.png" className="max-un" alt="image" />
                                            </div>
                                            <div className="info-area">
                                                <div className="bottom d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <p>booked a session and did it the next day, got some good tips to help with getting
                                                    ahead in lane and being more effective on map. definitely would recommend and be
                                                    back again</p>
                                                <div className="info-bottom mt-2 d-flex align-items-center">
                                                    <p className="mdr">Published 1 week ago</p>
                                                    <Link href="">
                                                        <img src="/images/icon/like.png" alt="icon" />
                                                        Helpful
                                                    </Link>
                                                    <Link href="">
                                                        <img src="/images/icon/dislike.png" alt="icon" />
                                                        Not Helpful
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area d-flex mb-30">
                                            <div className="img-area">
                                                <img src="/images/customers-4.png" className="max-un" alt="image" />
                                            </div>
                                            <div className="info-area">
                                                <div className="bottom d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <p>booked a session and did it the next day, got some good tips to help with getting
                                                    ahead in lane and being more effective on map. definitely would recommend and be
                                                    back again</p>
                                                <div className="info-bottom mt-2 d-flex align-items-center">
                                                    <p className="mdr">Published 1 week ago</p>
                                                    <Link href="">
                                                        <img src="/images/icon/like.png" alt="icon" />
                                                        Helpful
                                                    </Link>
                                                    <Link href="">
                                                        <img src="/images/icon/dislike.png" alt="icon" />
                                                        Not Helpful
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-area d-flex mb-30">
                                            <div className="img-area">
                                                <img src="/images/customers-5.png" className="max-un" alt="image" />
                                            </div>
                                            <div className="info-area">
                                                <div className="bottom d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <Link href=""><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <p>booked a session and did it the next day, got some good tips to help with getting
                                                    ahead in lane and being more effective on map. definitely would recommend and be
                                                    back again</p>
                                                <div className="info-bottom mt-2 d-flex align-items-center">
                                                    <p className="mdr">Published 1 week ago</p>
                                                    <Link href="">
                                                        <img src="/images/icon/like.png" alt="icon" />
                                                        Helpful
                                                    </Link>
                                                    <Link href="">
                                                        <img src="/images/icon/dislike.png" alt="icon" />
                                                        Not Helpful
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="show-more">
                                            <Link href="">Show more</Link>
                                        </div>
                                    </div>
                                    <div className="coaching-section loyalty pt-120">
                                        <h5 className="mb-30 pt-120 border-area">similar Coaches</h5>
                                        <div className="row cus-mar">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-item">
                                                    <div className="top-area">
                                                        <div className="thumb">
                                                            <img src="/images/coaching-item-2.png" alt="image" />
                                                            <span>Best Choice</span>
                                                        </div>
                                                        <div className="profile-area d-flex align-items-center">
                                                            <div className="profile-img d-flex justify-content-center">
                                                                <img src="/images/coaching-profile-2.png" alt="image" />
                                                                <span className="mdr">1</span>
                                                            </div>
                                                            <div className="profile-info">
                                                                <h6>ANGEL KENTER</h6>
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
                                                            <h6>ROCKET LEAGUE COACH</h6>
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
                                                                <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                                                <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-item">
                                                    <div className="top-area">
                                                        <div className="thumb">
                                                            <img src="/images/coaching-item-3.png" alt="image" />
                                                            <span>Best Choice</span>
                                                        </div>
                                                        <div className="profile-area d-flex align-items-center">
                                                            <div className="profile-img d-flex justify-content-center">
                                                                <img src="/images/coaching-profile-3.png" alt="image" />
                                                                <span className="mdr">1</span>
                                                            </div>
                                                            <div className="profile-info">
                                                                <h6>ROGER DOKIDIS</h6>
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
                                                            <h6>HIGH-LEVEL CSGO</h6>
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
                                                                <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                                                <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="single-item">
                                                    <div className="top-area">
                                                        <div className="thumb">
                                                            <img src="/images/coaching-item-4.png" alt="image" />
                                                            <span>Best Choice</span>
                                                        </div>
                                                        <div className="profile-area d-flex align-items-center">
                                                            <div className="profile-img d-flex justify-content-center">
                                                                <img src="/images/coaching-profile-4.png" alt="image" />
                                                                <span className="mdr">1</span>
                                                            </div>
                                                            <div className="profile-info">
                                                                <h6>Jerome Bell</h6>
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
                                                            <h6>Mid lane control mages..</h6>
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
                                                                <Link href="coaches-details" className="cmn-btn alt">Book Now</Link>
                                                                <Link href="" className="whishlist"><img src="/images/icon/wishlist.png" alt="icon" /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-5 col-md-6 col-sm-7">
                                <div className="position-sticky top-0">
                                    <div className="sidebar-area">
                                        <form action="#">
                                            <div className="how-works sidebar">
                                                <div
                                                    className="magnific-area position-relative d-flex align-items-center justify-content-around">
                                                    <div className="bg-area">
                                                        <img className="bg-item" src="/images/popup-video-bg.png" alt="image" />
                                                    </div>
                                                    <span className="mfp-iframe popupvideo position-absolute" onClick={() => setOpen(true)}>
                                                        <img src="/images/icon/popup-icon.png" alt="icon" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="sidebar-top">
                                                <div className="text-center">
                                                    <h6>Choose your coaching</h6>
                                                    <h4>$30.00/HR</h4>
                                                </div>
                                                <div
                                                    className="select-area gap-3 d-flex justify-content-between align-items-center">
                                                    <Select
                                                        instanceId={useId()}
                                                        defaultValue={selectedOption2}
                                                        onChange={setSelectedOption2}
                                                        options={participentOptions}
                                                        components={{
                                                            IndicatorSeparator: () => null,
                                                        }}
                                                        styles={customStyles}
                                                    />
                                                    <Select
                                                        instanceId={useId()}
                                                        defaultValue={selectedOption3}
                                                        onChange={setSelectedOption3}
                                                        options={timeOptions}
                                                        components={{
                                                            IndicatorSeparator: () => null,
                                                        }}
                                                        styles={customStyles}
                                                    />
                                                </div>
                                                <div className="platforms d-flex justify-content-center align-items-center">
                                                    <Link href=""><img src="/images/icon/platforms-icon-1.png" alt="icon" /></Link>
                                                    <Link href=""><img src="/images/icon/platforms-icon-2.png" alt="icon" /></Link>
                                                    <Link href=""><img src="/images/icon/platforms-icon-3.png" alt="icon" /></Link>
                                                </div>
                                                <h6 className="title">Lesson Packs</h6>
                                                <div className="radio-area">
                                                    <label className="single-radio abs-area">3 Hours Pack
                                                        <span className="abs mdr">Top Choice</span>
                                                        <input type="radio" name="loan" />
                                                        <span className="checkmark"></span>
                                                        <span className="discount">-7% discount</span>
                                                    </label>
                                                    <label className="single-radio">5 Hours Pack
                                                        <input type="radio" name="loan" />
                                                        <span className="checkmark"></span>
                                                        <span className="discount">-10% discount</span>
                                                    </label>
                                                    <label className="single-radio abs-area">10 Hours Pack
                                                        <span className="abs mdr">Best Value</span>
                                                        <input type="radio" name="loan" />
                                                        <span className="checkmark"></span>
                                                        <span className="discount">-15% discount</span>
                                                    </label>
                                                </div>
                                                <div className="input-area d-flex align-items-center">
                                                    <input type="text" placeholder="Enter Coupon" />
                                                    <button className="cmn-btn">Apply</button>
                                                </div>
                                            </div>
                                            <div className="sidebar-bottom">
                                                <h5>$255.00 <span>(€212.4)</span></h5>
                                                <Link href="booking-details" className="cmn-btn w-100">Next Step</Link>
                                                <Link href="cart" className="cmn-btn w-100 active">Add To Cart</Link>
                                            </div>
                                        </form>
                                        <div className="card-area">
                                            <img src="/images/visa.png" alt="icon" />
                                            <img src="/images/paypal.png" alt="icon" />
                                            <img src="/images/card-1.png" alt="icon" />
                                            <img src="/images/card-2.png" alt="icon" />
                                            <img src="/images/card-3.png" alt="icon" />
                                        </div>
                                        <div className="delivery text-center">
                                            <p className="mdr">Recent Delivery - <span>June 15, 2022</span></p>
                                        </div>
                                    </div>
                                    <div className="protection d-flex align-items-start">
                                        <img src="/images/icon/protection.png" className="max-un" alt="icon" />
                                        <p className="mdr">For your own protection and for egamlio to assist in any potential
                                            disputes, it's important that you never make any payments outside of the platform.
                                        </p>
                                    </div>
                                    <div className="tags">
                                        <h6>Related Tags</h6>
                                        <div className="d-fle">
                                            <Link href="">league of legends</Link>
                                            <Link href="">coaching</Link>
                                            <Link href="">Lol</Link>
                                            <Link href="">Coach</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="Djz8Nc0Qxwk" onClose={() => setOpen(false)} />
        </>
    );
};

export default page;