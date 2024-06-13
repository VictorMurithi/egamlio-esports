import React from 'react';

const page = () => {
    return (
        <div className="single-content">
            <div className="head-area d-flex align-items-center justify-content-between">
                <h5>Change password</h5>
            </div>
            <div className="main-content table-area">
                <form action="#">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-input">
                                <label htmlFor="password">Current password</label>
                                <input type="text" id="password" placeholder="Enter your Current Password" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input">
                                <label htmlFor="newPassword">New password</label>
                                <input type="text" id="newPassword" placeholder="Enter your New Password" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="single-input">
                                <label htmlFor="ConNewPassword">Confirm New password</label>
                                <input type="text" id="ConNewPassword" placeholder="Enter your Confirm Password" />
                            </div>
                        </div>
                        <div className="col-sm-3 col-5">
                            <button className="cmn-btn w-100 mt-3">Change</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;