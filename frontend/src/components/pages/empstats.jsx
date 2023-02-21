import React, { useState } from 'react';
// import VMC from './inc/Vmc';
// import { Link } from 'react-router-dom'
import { Bar } from 'react-chartjs-2';
import { MDBBtn } from 'mdb-react-ui-kit';
import ApexSideCharts from './ApexSideCharts';
import {
    MDBIcon,
    MDBTabs,
    MDBTabsItem,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import { FaBlackTie, FaCreativeCommonsBy, FaAddressCard } from 'react-icons/fa';

// import { CDBContainer } from 'cdbreact';
import Hero4 from '../images/hero4.svg';
// import Service2 from '../images/services2.jpg';
// import Service5 from '../images/services5.jpg';
// import { BarChartLine } from 'react-bootstrap-icons';



function EmpStats() {
    const [activities] = useState({
        labels: [
            "Working Age Population ('000)",
            "Labour Force ('000)",
            "Total Employed Persons (Full+Parttime) (‘000_",
            "Employed Persons (Full-time) ('000)",
            "Male",
            "FeMale",
            "Urban",
            "Rural",
            "Unemployed ('000) ",
            "Worked 1-19 Hours",
            "No Work Hours",
            "Underemployed ('000) "
        ],
        datasets: [
            {
                label: 'Q3, 2017',
                backgroundColor: 'rgb(2,131,79,0.9)',
                data: [
                    111134,
                    85088,
                    69090.00,
                    51061,
                    27076,
                    23985,
                    17561,
                    33500,
                    15998,
                    8461,
                    7537,
                    18029,
                ],
                fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }, {
                label: 'Q2, 2018',
                backgroundColor: '#003488',
                borderColor: 'rgb(194, 116, 161)',
                data: [
                    114311,
                    89509,
                    69165.60,
                    51174,
                    31883,
                    19291,
                    18215,
                    32959,
                    20344,
                    10932,
                    9411,
                    17992,
                ],
                borderRadius: 20,
            },

            {
                label: 'Q3, 2018',
                backgroundColor: 'purple',
                data: [
                    115493,
                    90471,
                    69542.90,
                    51327,
                    31978,
                    19349,
                    17242,
                    34084,
                    20928,
                    11183,
                    9745,
                    18216],
                // fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }
        ],
    });

    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value: string) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };


    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div class="MapSection_col1__7qyST"><h1 class="MapSection_title__EIppf">Explore Multidimensional Poverty Index by State &amp; Zones </h1><p class="MapSection_description__G_qkP">Click any State to understand the pattern of multidimensional poverty within the State.</p></div>
                        </div>

                        <div className="col-md-4 text-center">
                            <div>
                                <MDBBtn className='me-1' color='success' rippleColor='dark'>
                                    Unemployed
                                </MDBBtn>
                                <MDBBtn color='dark' rippleColor='light'>
                                    Underemployed
                                </MDBBtn>
                            </div>
                        </div>


                        <div className="my-5 col-md-8">
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="activities mt-5">Activities</h3>
                                    <Bar data={activities} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="MapSection_table__Ve78k">
                                <div>
                                    <div class="ExploreData_container___gUHI">
                                        <div class="ExploreData_div2__uMqM6">
                                            <div class="ExploreData_national__2TEut">
                                                <p class="ExploreData_text__Idd8L">Nasarawa MPI - 0.243</p>
                                            </div>
                                            <h3 class="ExploreData_h3__eeBVM">1,360,000</h3>
                                            <p class="ExploreData_p__S_yDd">Multidimensionally poor in Nasarawa</p>
                                        </div>
                                        <p class="ExploreData_p2__RioVV">Unemployed Total <span
                                            class="ExploreData_span3___OcVx"> 2,200,000</span></p>
                                        <p class="ExploreData_underline__1fmxz"></p>
                                        <p class="ExploreData_p2__RioVV">Underemployed Total<span class="ExploreData_span__NdjVl"><FaBlackTie /></span><span class="ExploreData_span3___OcVx">60.7%</span></p>
                                        <p class="ExploreData_underline__1fmxz"></p>
                                        <p class="ExploreData_p2__RioVV">Underemployed + Unemployed<span class="ExploreData_span__NdjVl"><FaCreativeCommonsBy /></span><span class="ExploreData_span3___OcVx">39.9%</span></p>
                                        <p class="ExploreData_underline__1fmxz"></p>
                                        <p class="ExploreData_p2__RioVV">Employed Total<span class="ExploreData_span__NdjVl"><FaAddressCard /></span><span class="ExploreData_span3___OcVx">39.9%</span></p>
                                    </div>
                                    <div class="ExploreData_container1__mXoor">
                                        <div class="ExploreData_itemh1__rlZDh">
                                            <div class="ExploreData_text__Idd8L">0.000-0.150</div>
                                        </div>
                                        <div class="ExploreData_itemh2__Nfwms">
                                            <div class="ExploreData_text__Idd8L">0.151-0.250</div>
                                        </div>
                                        <div class="ExploreData_itemh3__ZrjjE">
                                            <div class="ExploreData_text__Idd8L">0.251-0.350</div>
                                        </div>
                                        <div class="ExploreData_itemh4__Flf8e">
                                            <div class="ExploreData_text__Idd8L">0.351-0.500</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
            <section style={{ backgroundImage: `url(${Hero4})` }} >
                <div className='container my-5'>
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <div class="MapSection_col1__7qyST"><h1 class="MapSection_title__EIppf">Explore UNEMPLOYMENT AND UNDER EMPLOYMENT REPORT &amp; Over  the Year </h1><p class="MapSection_description__G_qkP">Click any of the options below to understand the pattern of multidimensional UNEMPLOYMENT AND UNDER EMPLOYMENT REPORT.</p></div>
                        </div>

                        <div className="col-md-4 mt-5 text-center">
                            <div>
                                <MDBBtn className='me-1' color='success' rippleColor='dark'>
                                    Unemployed
                                </MDBBtn>
                                <MDBBtn color='dark' rippleColor='light'>
                                    Underemployed
                                </MDBBtn>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div className="text-center mb-5">
                                <div className='mx-10'>


                                    <div className='w-100 md:32 mx-auto mt-8 rounded-lg border p-2 md:mt-16 md:w-2/3'>
                                        <MDBTabs justify className='my-3'>
                                            <MDBTabsItem>
                                                <div>
                                                    <MDBBtn className='bg-success' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                                        <MDBIcon fas icon='cogs' className='me-2' /> Labor Force
                                                    </MDBBtn>
                                                </div>
                                            </MDBTabsItem>
                                            <MDBTabsItem>
                                                <div>
                                                    <MDBBtn className='bg-success' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                                        <MDBIcon fas icon='cogs' className='me-2' /> Non-labor Force
                                                    </MDBBtn>
                                                </div>
                                            </MDBTabsItem>
                                            <MDBTabsItem>
                                                <div >
                                                    <MDBBtn className='bg-success p3-2' onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                                                        <MDBIcon fas icon='chart-pie' className='me-2' /> Employment and Unemployment
                                                    </MDBBtn>
                                                </div>
                                            </MDBTabsItem>
                                            <MDBTabsItem>
                                                <div>
                                                    <MDBBtn className='bg-success' onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
                                                        <MDBIcon fas icon='chart-line' className='me-2' /> Underemployed
                                                    </MDBBtn>
                                                </div>
                                            </MDBTabsItem>
                                        </MDBTabs>
                                    </div>
                                    <div className='w-100 md:32 mx-auto mt-8 rounded-lg border p-2 md:mt-16 md:w-2/3 row bg-white tabs-div'>
                                        <div class="grid h-full place-items-center pt-6 text-center">
                                            <MDBTabsContent className='w-100 md:32 m-auto mt-8 block rounded-2xl border p-4 md:flex md:w-2/3' >
                                                <MDBTabsPane className='bg-white' show={justifyActive === 'tab1'}>
                                                    <p>
                                                        The labour force population covers all persons aged 15 to 64 years who are willing and able
                                                        to work regardless of whether they have a job or not. The definition of unemployment therefore covers
                                                        persons (aged 15–64), who during the reference period were available for work, actively seeking for work
                                                        but were without work.
                                                    </p>
                                                </MDBTabsPane>
                                                <MDBTabsPane className='bg-white' show={justifyActive === 'tab2'}>
                                                    <p>
                                                        The non-labour force includes population below 15 or older than 64, as well as those within the
                                                        economically active population i.e. 15 64, who are unable to work, not actively seeking for work or choose
                                                        not to work and/or are not available for work.
                                                        <br />
                                                        Examples of these are voluntary full-time housewives, underage children 14 and below, adults above 65, full
                                                        time students, those in active military service, physically challenged and incapacitated persons whose
                                                        incapacitation prevents them from working. Growth in the labour force therefore fluctuates and depends
                                                        on the decisions by constituents of the economically activate population on whether to work or not which
                                                        varies across different cultures, religion, as well as various academic, economic and family considerations.
                                                        For example, a housewife might decide to take up employment to supplement the family income due to
                                                        changes in the husband's salary or due to added family needs, or a person might decide to take some time off
                                                        work to either study for Masters program or to recover from ill health.
                                                    </p>
                                                </MDBTabsPane>
                                                <MDBTabsPane className='bg-white' show={justifyActive === 'tab3'}>
                                                    <p>
                                                        A person is regarded as employed if he/she is engaged in the production of goods and services, thereby
                                                        contributing to the Gross Domestic Product (GDP) in a legitimate manner, which is a component of the
                                                        national accounts and receives any form or amount of compensation for that activity. Any of these can cause
                                                        fluctuations in the economically active and labour force population at any given time.
                                                        There is no universal standard definition of unemployment as various countries adopt definitions to suit
                                                        their local priorities. However, all countries however use the International Labour Organization (ILO)
                                                        definition, or a variant of it to compute unemployment. The ILO definition covers persons aged 15–64 who
                                                        during the reference period (which is usually the week preceding the time the survey is administered) were
                                                        available for work, actively seeking work, but were unable to find work.
                                                        The Nigerian National Bureau of Statistics, like most countries in the world, uses a variant of the ILO
                                                        definition such that the unemployment is the proportion of those in the labour force (not in the entire
                                                        economic active population, nor the entire Nigerian population) who were actively looking for work but
                                                        could not find work for at least 20 hours during the reference period to the total currently active (labour
                                                        force) population. Accordingly, you are unemployed if you did absolutely nothing at all or did something but
                                                        for less than 20 hours during the reference week.
                                                        Hence, the unemployment rate is calculated by dividing the number of unemployed persons by labour force:
                                                        <br />
                                                        <strong>
                                                            Unemployment Rate = 100 x
                                                            Unemployed Population
                                                            <hr />
                                                            Labor Force Population
                                                        </strong>
                                                    </p>
                                                </MDBTabsPane>
                                                <MDBTabsPane className='bg-white' show={justifyActive === 'tab4'}>
                                                    <p>
                                                        Underemployment however occurs if you work less than full time hours, which is 40 hours, but work at least
                                                        20 hours on average a week and /or if you work full time but are engaged in an activity that underutilizes your
                                                        skills, time and educational qualifications. Consequently, rural farmers only farming seasonally will be
                                                        considered underemployed if they only work on their farms during the planting and harvests period and do
                                                        nothing in between. If farmers are however working in dry and wet seasons as is increasingly becoming the
                                                        case, they will then be involved in full time employment. This applies to drivers, cooks, cleaners, bankers,
                                                        teachers etc. who in most case work well over 40 hours and hence are considered full time employed as their
                                                        working hours and skills meet the adopted methodology.
                                                        <br />
                                                        It is important to note that the international definition of unemployment, underemployment or
                                                        employment is not a function of the quantity/suitability of wages earned nor it is a function of job
                                                        satisfaction. Rather employment, underemployment and unemployment are treated strictly as a function of
                                                        a person's involvement or otherwise in economic activity even if that activity is performed solely to make
                                                        ends meet and not for satisfaction or enjoyment. The suitability of wages or job fulfilment is covered under
                                                        other indices such as the living standard, poverty rate or happiness index, but not in determining whether
                                                        one is employed, unemployed or underemployed, which is a function of economic engagement.
                                                    </p>
                                                </MDBTabsPane>
                                            </MDBTabsContent>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='progress-div-bg'>
                <div className="container">
                    <div className="row">
                        <div class="my-5 pt-5 HeadCountSection_col1__ldfRh">
                            <h1 class="HeadCountSection_title__5kXTH">Prevalence of the different DISTRIBUTION OF UNEMPLOYED ADULTS BY LENGTH OF UNEMPLOYMENT</h1>
                            <p class="HeadCountSection_description__Q8vkG">This indicates that the rise in unemployment has been more from the large influx of new entrants in the market and their inability to find enough jobs to absorb them.</p>
                        </div>

                        <div className="col-md-6">
                            <h3 class="text-[20px] font-[600] text-white text-[#ffffff]">Frequency </h3>
                            <div className="card">
                                <ApexSideCharts />
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <h3 class="text-[20px] font-[600] text-white text-[#ffffff]">Percent </h3>
                            <div className='mb-5'>
                                <div className="card ">
                                    <ApexSideCharts />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
export default EmpStats;


