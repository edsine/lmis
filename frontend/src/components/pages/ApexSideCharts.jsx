import React, { ReactDOM } from "react";
import ReactApexChart from "react-apexcharts";

class ApexSideCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'Actual',
                    data: [
                        {
                            x: 'Below 1 year',
                            y: '12',
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 14,
                                    strokeWidth: 2,
                                    strokeDashArray: 2,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '1 Year',
                            y: 44,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 54,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2 Year',
                            y: 54,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 52,
                                    strokeWidth: 10,
                                    strokeHeight: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '3 Year',
                            y: 66,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 61,
                                    strokeWidth: 10,
                                    strokeHeight: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '4 Year',
                            y: 81,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 66,
                                    strokeWidth: 10,
                                    strokeHeight: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '5 Year',
                            y: 67,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 70,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '6 - 10 Yrs',
                            y: 85,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 57,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: 'Over 10 Yrs',
                            y: 95,
                            goals: [
                                {
                                    name: 'Length of Unemployment',
                                    value: 83,
                                    strokeWidth: 5,
                                    strokeHeight: 10,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                colors: ['#00E396'],
                dataLabels: {
                    formatter: function (val, opt) {
                        const goals =
                            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                                .goals

                        if (goals && goals.length) {
                            return `${val} / ${goals[0].value}`
                        }
                        return val
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Length of Unemployment'],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>


        );
    }
}

export default ApexSideCharts;