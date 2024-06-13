"use client"
import React, { useId, useState } from 'react';
import { StylesConfig } from 'react-select';
import Select from 'react-select';
interface Option {
    value: string;
    label: string;
}
const sortOptions = [
    { value: 'All', label: 'All' },
    { value: 'This week', label: 'This week' },
];
const page = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(sortOptions[0]);
    const customStyles: StylesConfig = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#1B1D4D",
            color: '#ffffff',
            width: '150px'
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
        <div className="single-content">
            <div className="head-area d-flex align-items-center justify-content-between">
                <h5>My Invoices</h5>
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
            <div className="main-content table-area">
                <div className="table-responsive">
                    <table className="table invoices">
                        <thead>
                            <tr>
                                <th scope="col">Invoice #</th>
                                <th scope="col">Date</th>
                                <th scope="col">Total</th>
                                <th scope="col">Fee</th>
                                <th scope="col">Pay. Type</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">#2314</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2315</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2316</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2317</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2318</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2319</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2324</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2334</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2344</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                            <tr>
                                <th scope="row">#2354</th>
                                <td>11 . 5 .2022</td>
                                <td>$40.00</td>
                                <td>$1.5</td>
                                <td>Paypal</td>
                                <td>Completed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;