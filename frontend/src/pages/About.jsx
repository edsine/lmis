import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Common from '../components/inc/Common';
import ApexCandle from '../components/apexcharts/ApexCandle'
import ApexCand from '../components/apexcharts/ApexCand'
import ApexRadar from '../components/apexcharts/ApexRadar'
import ApexBob from '../components/apexcharts/ApexBob'
import Im from '../components/images/rice.jpg'
import Nship from '../components/images/lmis_welcome.png'


function Aboutus() {
    const [data] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Series 1',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                fill: false,
                data: [50, 40, 50, 60, 50, 60, 70, 60, 50, 40, 30, 20],
            },
            {
                label: 'Series 2',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'green',
                fill: false,
                data: [60, 55, 40, 45, 56, 46, 56, 70, 40, 47, 77, 99],
            },
            {
                label: 'Series 3',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'blue',
                fill: false,
                data: [0, 15, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            },
            {
                label: 'Series 4',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: ' rgb(71, 225, 167)',
                fill: false,
                data: [80, 85, 100, 100, 90, 105, 100, 90, 80, 30, 20, 0],
            }
        ],
    });

    const [activities] = useState({
        labels: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5', 'Yr 6', 'Yr 7'],
        datasets: [
            {
                type: 'line',
                label: 'Line Dataset',
                backgroundColor: 'yellow',
                data: [60, 50, 60, 80, 60, 40, 60],
                fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }, {
                label: 'Active',
                backgroundColor: '#003488',
                borderColor: 'rgb(194, 116, 161)',
                data: [45, 45, 45, 60, 45, 90, 45],
                borderRadius: 20,
            }
        ],
    });


    const [pieset] = useState({
        labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(52, 179, 241, 0.37)',
                borderColor: 'rgb(194, 116, 161)',
                data: [30, 50, 70, 40, 19, 96, 27, 80],
                transform: 'rotate(-60.25deg)',
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });

    const [radar] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(194, 116, 161, 0.5)',
                borderColor: 'rgb(194, 116, 161)',
                data: [65, 59, 90, 81, 56, 55, 40],
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });




    // const [mixedChart] = useState({
    //     labels: ['January', 'February', 'March', 'April'],
    //     data: {
    //         datasets: [{
    //             type: Bar,
    //             label: 'Bar Dataset',
    //             data: [10, 20, 30, 40]
    //         }, {
    //             type: Line,
    //             label: 'Line Dataset',
    //             data: [50, 50, 50, 50],
    //         }],
    //     },
    // });
    return (
        <div>
            <Common />


            {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Welcome</h2>
              <p>The Labour Market Information System (LMIS) is a solution that uses artificial intelligence, adaptive intuition, and recognition from all labor data sources to populate labour market information</p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-6">
                <h3>Recent Publications</h3>
                <img src={Im} className="img-fluid rounded-4 mb-4" alt="" />
                <p>Labor is the main asset for the world’s poorest people. This means that the labor market is the primary vehicle through which the proceeds of economic growth are spread to households and individuals. Therefore, understanding the labor market is crucial to achieve Nigeria’s aspiration to lift 100 million people out of poverty by 2030 – an ambitious objective, since even before the COVID-19 crisis around 4 in 10 Nigerians were living below the national poverty line.</p>

              </div>
              <div className="col-lg-6">
                <div className="content ps-0 ps-lg-5">

                  <ul>
                    <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="bi bi-check-circle-fill" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <p>
                    This paper provides a coherent picture from labor market data and imposes some analytic interpretations on this picture. Thus, a brief overview of the Nigerian economy is carried out, with emphasis on the characteristics of the productive structure, the export activities and the trends of the Nigerian labor market since 1970 can be understood as the outcome of four circumstances: a disequilibrium urban wage rate, the increase of the real exchange rate due to the oil boom, a massive increase in public sector employment and a relative contraction in the rural labor force.
                  </p>
                  <div className="position-relative mt-4">
                    <img src={Nship} className="img-fluid rounded-4" alt="" />
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= End About Us Section ======= */}


            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-10 mb-6 chart-header">
                            <h3 className="chart-header-in">Labor Force Statistics - Volume I: Unemployment and Underemployment Report</h3>
                            <div className="underline mx-auto"></div>
                        </div> */}
                        <div className="col-md-12 ">
                            <div className='card shadow'>
                                <div className="card-body card-body1">

                                    <div className="col-md-11 float-end">
                                        <h3 className="activities mt-5">Labour Activities</h3>
                                        <Line data={data} options={{ responsive: true }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="mb-5 my-10">
                            {/* <h1>Welcome</h1> */}
                            <p className='voters-chart-text'>
                                Since Nigeria's 1999 transition from military to civilian rule, LMIS has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, LMIS has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. LMIS’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                            </p>
                        </div>

                        <div className="my-5 col-md-6">
                            <div className='card shadow'>
                                <div className="card-body card-body1">

                                    <ApexCand />
                                </div>
                            </div>
                        </div>
                        <div className="my-5 col-md-6">
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    {/* <h3 className="activities mt-5">Activities</h3> */}

                                    <ApexCandle />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5 ">
                            {/* <h1>Welcome</h1> */}
                            <p className='voters-chart-text'>
                                Since Nigeria's 1999 transition from military to civilian rule, LMIS has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, LMIS has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. LMIS’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                            </p>
                        </div>
                        <div className="my-5 col-md-12">
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="activities mt-5">Activities</h3>
                                    <ApexRadar />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5 ">
                            {/* <h1>Welcome</h1> */}
                            <p className='voters-chart-text'>
                                Since Nigeria's 1999 transition from military to civilian rule, LMIS has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, LMIS has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. LMIS’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                            </p>
                        </div>
                        <div className="my-5 col-md-11 ">
                            <div className="col-md-1 float-start">
                                <div className="">hello</div>
                            </div>
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="activities mt-5">Activities</h3>
                                    <ApexBob />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            {/* <h1>Welcome</h1> */}
                            <p className='voters-chart-text'>
                                Since Nigeria's 1999 transition from military to civilian rule, LMIS has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, LMIS has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. LMIS’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                            </p>
                        </div>

                    </div>
                </div>
            </section >
        </div >
    )
}
export default Aboutus;


