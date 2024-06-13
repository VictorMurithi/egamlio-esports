"use client"
// import Chart from 'react-apexcharts'
import { useId, useState } from 'react';
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import dynamic from 'next/dynamic';
const DynamicChart = dynamic(() => import('react-apexcharts'), {ssr: false});
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
    const options = {
        xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            labels: {
                style: {
                    colors: '#fff'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#fff'
                }
            }
        },
        stroke: {
            // curve:"smooth"
        },
        chart: {
            toolbar: {
                show: false,
            }
        }

    };
    const series = [
        {
            name: "series-1",
            data: [30, 40, 25, 50, 49, 21, 70, 51]
        },
    ];
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
        <>
            <div className="single-content">
                <div className="head-area">
                    <h5>Transaction</h5>
                </div>
                <div className="main-content">
                    <div className="balance-area d-flex align-items-center justify-content-between">
                        <div className="left-area w-100 text-center">
                            <h6>Spent</h6>
                            <h5>$500.00</h5>
                        </div>
                        <div className="right-area w-100 text-center">
                            <h6>Pending</h6>
                            <h5>$00.00</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-content">
                <div className="head-area d-flex align-items-center justify-content-between">
                    <h5>Order Statistics</h5>
                    <ul className="nav justify-content-between mb-30" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="cmn-btn active" id="weekly-tab" data-bs-toggle="tab"
                                data-bs-target="#weekly" type="button" role="tab"
                                aria-controls="weekly" aria-selected="true">weekly</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="cmn-btn" id="monthly-tab" data-bs-toggle="tab"
                                data-bs-target="#monthly" type="button" role="tab"
                                aria-controls="monthly" aria-selected="false">monthly</button>
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="weekly" role="tabpanel"
                            aria-labelledby="weekly-tab">
                            <DynamicChart options={options} series={series} type="line" height={400} />;                       

                        </div>
                        <div className="tab-pane fade" id="monthly" role="tabpanel"
                            aria-labelledby="monthly-tab">
                            <DynamicChart options={options} series={series} type="line" height={400} />;
                        </div>
                    </div>
                </div>
            </div>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;