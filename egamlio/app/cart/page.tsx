"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const page = () => {
    const [quantity, setQuantity] = useState(1)
    const [quantity1, setQuantity1] = useState(1)
    return (
        <>
            <section className="banner-section inner-banner coach cart">
                <div className="overlay">
                    <div className="banner-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10">
                                    <div className="main-content">
                                        <h2>Cart Page</h2>
                                        <div className="breadcrumb-area">
                                            <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb d-flex align-items-center">
                                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                                    <li className="breadcrumb-item"><Link href="#">Pages</Link></li>
                                                    <li className="breadcrumb-item active" aria-current="page">Cart Page</li>
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

            <section className="shop-cart-section">
                <div className="overlay pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="shop-cart-head mb-20">
                                    <div className="shop-cart-left">
                                        <p>“PCCH-310 Gaming Chair, Red” Has Been Added To Your Cart.</p>
                                    </div>
                                    <div className="shop-cart-right">
                                        <Link href="#" className="mdr">Continue shopping<img src="/images/icon/right-arrow-4.png" alt="image" /></Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Prize</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <img src="/images/product-7.png" alt="image" />
                                                    <span>PCCH-310 Gaming Chair, Red</span>
                                                </th>
                                                <td className="xlr">$169.99</td>
                                                <td>
                                                    <div className="value-change cart">
                                                        <div className="qtySelector text-center">
                                                            <i className="fas fa-minus decreaseQty" onClick={()=> quantity > 1?setQuantity(quantity-1):null}></i>
                                                            <input type="text" className="qtyValue" value={quantity} />
                                                            <i className="fas fa-plus increaseQty" onClick={()=>setQuantity(quantity+1)}></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="xlr">$169.99</td>
                                                <td><button type="button" className="cart-dismiss"><i className="fas fa-times"></i></button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <img src="/images/product-7.png" alt="image" />
                                                    <span>PCCH-310 Gaming Chair, Red</span>
                                                </th>
                                                <td className="xlr">$216.30</td>
                                                <td>
                                                    <div className="value-change cart">
                                                        <div className="qtySelector text-center">
                                                            <i className="fas fa-minus decreaseQty" onClick={()=> quantity1 > 1?setQuantity1(quantity1-1):null}></i>
                                                            <input type="text" className="qtyValue" value={quantity1} />
                                                            <i className="fas fa-plus increaseQty" onClick={()=>setQuantity1(quantity1+1)}></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="xlr">$216.30</td>
                                                <td><button type="button" className="cart-dismiss"><i className="fas fa-times"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Link href="#" className="cmn-btn">Update Cart</Link>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="right-sidebar">
                                    <div className="top-area">
                                        <h5 className="mb-2">Order Summary</h5>
                                        <p>Price can change depending on shipping method and taxes of your state.</p>
                                    </div>
                                    <div className="bottom-side text-center">
                                        <ul>
                                            <li className="head-area">
                                                <span>Subtotal</span>
                                                <span>169.90</span>
                                            </li>
                                            <li>
                                                <span>Delivery (Standard)</span>
                                                <span>€1.80</span>
                                            </li>
                                            <li>
                                                <span>Taxes Fees</span>
                                                <span>€7.30</span>
                                            </li>
                                        </ul>
                                        <form action="#">
                                            <div className="single-input">
                                                <input type="text" placeholder="Enter Coupon" />
                                                <button className="cmn-btn">Apply</button>
                                            </div>
                                        </form>
                                        <ul>
                                            <li className="d-flex align-items-center">
                                                <h6 className="m-0">Total Order</h6>
                                                <h4 className="m-0">€59.00</h4>
                                            </li>
                                        </ul>
                                        <Link href="#" className="cmn-btn checkout">Proceed to checkout</Link>
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