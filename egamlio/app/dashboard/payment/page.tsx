"use client"
import { usePathname } from "next/navigation";

const page = () => {
    const path = usePathname()   

    return (
        <div className="single-content">
            <div className="head-area d-flex align-items-center justify-content-between">
                <h5>Payment Method</h5>
            </div>
            <div className="main-content table-area">
                <form action="#">
                    <div className="radio-area mb-40">
                        <div className="radio-style">
                            <label className="single-radio active">
                                <input type="radio" name="payment" />
                                <span className="checkmark"></span>
                                <span className="card-area">
                                    <img src="/images/icon/credit-card.png" alt="icon" />
                                </span>
                                <span>Credit Card</span>
                            </label>
                        </div>
                        <div className="radio-style">
                            <label className="single-radio">
                                <input type="radio" name="payment" />
                                <span className="checkmark"></span>
                                <span className="card-area">
                                    <img src="/images/icon/debit-card.png" alt="icon" />
                                </span>
                                <span>Debit Card</span>
                            </label>
                        </div>
                        <div className="radio-style">
                            <label className="single-radio">
                                <input type="radio" name="payment" />
                                <span className="checkmark"></span>
                                <span className="card-area">
                                    <img src="/images/icon/paypal-2.png" alt="icon" />
                                </span>
                                <span>Paypal</span>
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="single-input">
                                <label htmlFor="name">First Name</label>
                                <input type="text" id="name" placeholder="Enter your First Name" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="single-input">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" placeholder="Enter your Last Name" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input">
                                <label htmlFor="bankname">Bank name</label>
                                <input type="text" id="bankname" placeholder="Enter Your Bank Name" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input">
                                <label htmlFor="AccNumber">Account number</label>
                                <input type="text" id="AccNumber" placeholder="Enter your Account number" />
                            </div>
                        </div>
                        <div className="col-3">
                            <button className="cmn-btn w-100 mt-3">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;