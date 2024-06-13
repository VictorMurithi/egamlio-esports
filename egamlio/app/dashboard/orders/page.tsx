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
const orders = () => {
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
                <h5>My Orders</h5>
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
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Purchase Date</th>
                                <th scope="col">Order Details</th>
                                <th scope="col">Creation</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">#2314</th>
                                <td>11 . 5 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2315</th>
                                <td>12 . 6 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2316</th>
                                <td>24 . 4 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2317</th>
                                <td>13 . 1 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2318</th>
                                <td>22 . 8 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2319</th>
                                <td>30 . 1 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2315</th>
                                <td>12 . 6 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2316</th>
                                <td>24 . 4 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2317</th>
                                <td>13 . 1 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2318</th>
                                <td>22 . 8 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                            <tr>
                                <th scope="row">#2319</th>
                                <td>30 . 1 .2022</td>
                                <td>Fortnite <span>($20.00/hr)</span></td>
                                <td>Neil Scott</td>
                                <td>Finished </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default orders;