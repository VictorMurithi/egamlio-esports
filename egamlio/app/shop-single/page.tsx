"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
const productImages = ['/images/01.png', '/images/02.png', '/images/03.png', '/images/04.png']
const page = () => {
    const [quantity, setQuantity] = useState(1);
    const [img, setImg] = useState(productImages[0])
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <section className="banner-section inner-banner loyalty-banner coach shop">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Product Details</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Product Details</li>
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

            <section className="shop-content">
                <div className="container pb-120">
                    <div className="shop-details-content">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6">
                                <div className="xzoom-container">
                                    <InnerImageZoom src={img} zoomSrc={img} zoomType='hover'/>
                                    <div className="xzoom-thumbs">
                                        <div className="all-slider d-flex overflow-auto">
                                            {
                                                productImages.map((productImage) => (
                                                    <img height={150} width={150} onClick={()=>setImg(productImage)} className="xzoom-gallery5 img-fluid" alt="image" src={productImage} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-item">
                                    <h4>PCCH-310 Gaming Chair, Red</h4>
                                    <div className="d-flex align-items-center">
                                        <div className="star-area">
                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                            <Link href="#"><i className="fas fa-star"></i></Link>
                                            <Link href="#"><i className="fas fa-star-half-alt"></i></Link>
                                        </div>
                                        <p className="mdr">
                                            <span>5.00</span>
                                            <span>(89)</span>
                                        </p>
                                    </div>
                                    <h6>Delivery time: <span>Approx. 3-4 days</span> <span>(Abroad may vary)</span></h6>
                                    <h4 className="delete">$169.99 <del>$189.99</del> </h4>
                                    <div className="bottom-area value-change d-flex align-items-center">
                                        <div className="qtySelector text-center">
                                            <i className="fas fa-minus decreaseQty" onClick={handleDecrease}></i>
                                            <input type="text" className="qtyValue" value={quantity} />
                                            <i className="fas fa-plus increaseQty" onClick={() => setQuantity(quantity + 1)}></i>
                                        </div>
                                        <Link href="cart" className="cmn-btn">Buy Now</Link>
                                        <Link href="cart" className="whishlist"><img src="/images/icon/cart-icon.png" alt="icon" /></Link>
                                    </div>
                                    <div className="social d-flex align-items-center">
                                        <p className="mdr">Share:</p>
                                        <ul className="footer-link d-flex align-items-center">
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
                    <div className="product-about">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <ul className="nav nav-tabs justify-content-between mt-60 mb-30 gap-4" role="tablist">
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button className="cmn-btn alt active" id="description-tab" data-bs-toggle="tab"
                                            data-bs-target="#description" type="button" role="tab"
                                            aria-controls="description" aria-selected="true">description</button>
                                    </li>
                                    <li className="nav-item flex-fill" role="presentation">
                                        <button className="cmn-btn alt" id="customer-tab" data-bs-toggle="tab"
                                            data-bs-target="#customer" type="button" role="tab"
                                            aria-controls="customer" aria-selected="false">customer Reviews (4)</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="description" role="tabpanel"
                                aria-labelledby="description-tab">
                                <div className="product-description mt-3">
                                    <h5> Gaming Chair</h5>
                                    <p>With adjustable height, soft cushions and comfortable armrests, NACON's black and red PCCH-310 Gaming Chair has been specially designed for long gaming sessions.</p>
                                    <p>5 rigid wheels for easier moving. The ideal partner for any gamer looking for comfort and durability.</p>
                                    <ul>
                                        <li>Ergonomic design</li>
                                        <li>Adjustable height</li>
                                        <li>Comfortable armrests</li>
                                        <li>Maximum supported weight: 110kg</li>
                                        <li>5 wheels</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="customer" role="tabpanel"
                                aria-labelledby="customer-tab">
                                <div className="coaching-details-section m-0 mt-60">
                                    <h5 className="mb-20">Customer Reviews</h5>
                                    <div className="content-area d-flex mb-30">
                                        <div className="img-area">
                                            <img src="/images/customers-2.png" className="max-un" alt="image" />
                                        </div>
                                        <div className="info-area">
                                            <div className="bottom mb-3 d-flex align-items-center justify-content-between">
                                                <div className="reviews-left d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <div className="reply-area">
                                                    <button>
                                                        Reply
                                                        <img src="/images/icon/reply-icon.png" alt="image" />
                                                    </button>
                                                </div>
                                            </div>
                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                back again</p>
                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                <p className="mdr">Published 1 week ago</p>
                                                <Link href="#">
                                                    <img src="/images/icon/like.png" alt="icon" />
                                                    Helpful
                                                </Link>
                                                <Link href="#">
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
                                            <div className="bottom mb-3 d-flex align-items-center justify-content-between">
                                                <div className="reviews-left d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <div className="reply-area">
                                                    <button>
                                                        Reply
                                                        <img src="/images/icon/reply-icon.png" alt="image" />
                                                    </button>
                                                </div>
                                            </div>
                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                back again</p>
                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                <p className="mdr">Published 1 week ago</p>
                                                <Link href="#">
                                                    <img src="/images/icon/like.png" alt="icon" />
                                                    Helpful
                                                </Link>
                                                <Link href="#">
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
                                            <div className="bottom mb-3 d-flex align-items-center justify-content-between">
                                                <div className="reviews-left d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <div className="reply-area">
                                                    <button>
                                                        Reply
                                                        <img src="/images/icon/reply-icon.png" alt="image" />
                                                    </button>
                                                </div>
                                            </div>
                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                back again</p>
                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                <p className="mdr">Published 1 week ago</p>
                                                <Link href="#">
                                                    <img src="/images/icon/like.png" alt="icon" />
                                                    Helpful
                                                </Link>
                                                <Link href="#">
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
                                            <div className="bottom mb-3 d-flex align-items-center justify-content-between">
                                                <div className="reviews-left d-flex align-items-center">
                                                    <h6>Ahmad Curtis</h6>
                                                    <div className="flag-area d-flex align-items-center">
                                                        <img src="/images/icon/flag-usa.png" alt="image" />
                                                        <span>United States</span>
                                                    </div>
                                                    <div className="star-area">
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <Link href="#"><i className="fas fa-star"></i></Link>
                                                        <span>(5)</span>
                                                    </div>
                                                </div>
                                                <div className="reply-area">
                                                    <button>
                                                        Reply
                                                        <img src="/images/icon/reply-icon.png" alt="image" />
                                                    </button>
                                                </div>
                                            </div>
                                            <p>booked a session and did it the next day, got some good tips to help with getting
                                                ahead in lane and being more effective on map. definitely would recommend and be
                                                back again</p>
                                            <div className="info-bottom mt-2 d-flex align-items-center">
                                                <p className="mdr">Published 1 week ago</p>
                                                <Link href="#">
                                                    <img src="/images/icon/like.png" alt="icon" />
                                                    Helpful
                                                </Link>
                                                <Link href="#">
                                                    <img src="/images/icon/dislike.png" alt="icon" />
                                                    Not Helpful
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="show-more">
                                        <Link href="#">Show more</Link>
                                    </div>
                                    <div className="row pt-120 justify-content-center">
                                        <div className="col-md-10">
                                            <div className="review-box">
                                                <div className="add-review">
                                                    <h5>Add A Review</h5>
                                                    <div className="d-lg-flex justify-content-between align-items-center">
                                                        <p>Your Rating:</p>
                                                        <div className="star-head">
                                                            <div className="star-area">
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                            </div>
                                                            <div className="star-area">
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                            </div>
                                                            <div className="star-area">
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                            </div>
                                                            <div className="star-area">
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                            </div>
                                                            <div className="star-area">
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                                <Link href="#"><i className="fas fa-star"></i></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <form action="#">
                                                        <div className="single-input">
                                                            <label htmlFor="reviewName">Name</label>
                                                            <input type="text" id="reviewName" placeholder="Enter Your Name" />
                                                        </div>
                                                        <div className="single-input">
                                                            <label htmlFor="reviewEmail">Email</label>
                                                            <input type="text" id="reviewEmail" placeholder="Enter Your Email" />
                                                        </div>
                                                        <div className="single-input">
                                                            <label htmlFor="reviewMessage">Message</label>
                                                            <textarea id="reviewMessage" cols={30} rows={5} placeholder="Enter Your Message"></textarea>
                                                        </div>
                                                        <button className="cmn-btn">Post Comment</button>
                                                    </form>
                                                </div>
                                            </div>
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