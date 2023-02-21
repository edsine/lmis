import React from 'react';
import { MDBAccordion, MDBAccordionItem, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import PieChart from "../components/pages/inc/PieCharts";
import Common from "../components/inc/Common"

let data = [
    ["Task", "Porcentaje"],
    ["T2P%", 4],
    ["T3P%", 3],
    ["TL%", 1.5],
    ["TO%", 1.5],
    [null, 10]
];

export default function StoryPage() {
    return (
        <section>
            <Common />
            <header className='text-center my-5'><h1>Welcome</h1></header>
            <div className="container">
                <div class="row">

                    {/* <!-- Voters (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            Voters (Monthly)</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">40,000</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Voters (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            Voters (Annual)</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">215,000</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Voters (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Accredited
                                        </div>
                                        <div class="row no-gutters align-items-center">
                                            <div class="col-auto">
                                                <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">75%</div>
                                            </div>
                                            <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Pending Requests Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Pending Collection</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="App">
                            <div className="text-center">
                                <h3>Nigeria — 2023 presidential election</h3>
                                <h5 className='my-3'>Nigeria ELECTS A NEW PRESIDENT</h5>
                                <p>Since no candidate won an outright majority in the first round, a run-off was held. Jane Doe won the vote to become Nigeria’s first female president.</p>
                            </div>
                            <PieChart language="es" data={data} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <MDBAccordion initialActive={1}>
                            <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </MDBAccordionItem>
                        </MDBAccordion>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <h2>Elections in Nigeria — Latest news</h2>
                            <div className='underline'></div>
                        </div>
                        <div className="col-md-4">
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Partnership</MDBCardTitle>
                                    <MDBCardText>
                                        We place priority on our partners worldwide as the centerpiece of our global mission and programming, as they are the experts on their own experience. We are open to working with all civic and political actors that support peaceful democratic change.   Empowering them is the key for democracy and freedom to prevail.
                                    </MDBCardText>
                                    <MDBBtn href='/'>Read More..</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="col-md-4">
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Responsibility</MDBCardTitle>
                                    <MDBCardText>
                                        We are individually and collectively responsible for our behaviors, actions, and the consequences of our actions to each other and to anyone with whom we interact. We act at all times in ways that promote the security and well being of our colleagues as well as those who support or benefit from our work, adhering to “do no harm”principles                                    </MDBCardText>
                                    <MDBBtn href='/'>Read More..</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="col-md-4">
                            <MDBCard>
                                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBRipple>
                                <MDBCardBody>
                                    <MDBCardTitle>Integrity</MDBCardTitle>
                                    <MDBCardText>
                                        We place priority on our partners worldwide as the centerpiece of our global mission and programming, as they are the experts on their own experience. We are open to working with all civic and political actors that support peaceful democratic change.   Empowering them is the key for democracy and freedom to prevail.
                                    </MDBCardText>
                                    <MDBBtn href='/'>Read More..</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-4">
                                <MDBCard>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>Partnership</MDBCardTitle>
                                        <MDBCardText>
                                            We place priority on our partners worldwide as the centerpiece of our global mission and programming, as they are the experts on their own experience. We are open to working with all civic and political actors that support peaceful democratic change.   Empowering them is the key for democracy and freedom to prevail.
                                        </MDBCardText>
                                        <MDBBtn href='/'>Read More..</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <div className="col-md-4">
                                <MDBCard>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>Responsibility</MDBCardTitle>
                                        <MDBCardText>
                                            We are individually and collectively responsible for our behaviors, actions, and the consequences of our actions to each other and to anyone with whom we interact. We act at all times in ways that promote the security and well being of our colleagues as well as those who support from our work, adhering to “do no harm”principles                                    </MDBCardText>
                                        <MDBBtn href='/'>Read More..</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <div className="col-md-4">
                                <MDBCard>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>Integrity</MDBCardTitle>
                                        <MDBCardText>
                                            We place priority on our partners worldwide as the centerpiece of our global mission and programming, as they are the experts on their own experience. We are open to working with all civic and political actors that support peaceful democratic change.   Empowering them is the key for democracy and freedom to prevail.
                                        </MDBCardText>
                                        <MDBBtn href='/'>Read More..</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-5 py-5">
                <div class="row">

                    {/* <!-- Content Column --> */}
                    <div class="col-lg-6 mb-4">

                        {/* <!-- Project Card Example --> */}
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                            <div class="card-body">
                                <h4 class="small font-weight-bold">National parliament voting intention (percentage) <span class="float-right">20%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-danger" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">PVC Tracking <span class="float-end">40%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Voters Database <span class="float-right">60%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Individual Details <span class="float-right">80%</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h4 class="small font-weight-bold">Polling Unit Setup <span class="float-right">Complete!</span></h4>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Color System --> */}
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-primary text-white shadow">
                                    <div class="card-body">
                                        Total Population
                                        <div class="text-white-50 small">211,400,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-success text-white shadow">
                                    <div class="card-body">
                                        Voters
                                        <div class="text-white-50 small">190,600,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-info text-white shadow">
                                    <div class="card-body">
                                        Male Voters
                                        <div class="text-white-50 small">90,600,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-warning text-white shadow">
                                    <div class="card-body">
                                        Female Voters
                                        <div class="text-white-50 small">100,600,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-danger text-white shadow">
                                    <div class="card-body">
                                        Age 18 - 30
                                        <div class="text-white-50 small">60,600,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-secondary text-white shadow">
                                    <div class="card-body">
                                        Age 31 - 55
                                        <div class="text-white-50 small">70,900,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-light text-black shadow">
                                    <div class="card-body">
                                        Age 56 - 70
                                        <div class="text-black-50 small">10,000,0000</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-4">
                                <div class="card bg-dark text-white shadow">
                                    <div class="card-body">
                                        Age 71 - 120
                                        <div class="text-white-50 small">30,000,0000</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-6 mb-4">

                        {/* <!-- Illustrations --> */}
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
                            </div>
                            <div class="card-body">
                                <div class="text-center">
                                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem;' }} src="img/undraw_posting_photo.svg" alt="..." />
                                </div>
                                <p>Adding some quality, illustrations to your vote technic courtesy of <a target="_blank" rel="nofollow" href="https://lmis-nigeria.herokuapp.com">National Democratic Institute</a>,
                                    The National Democratic Institute is a nonprofit, nonpartisan organization working to support and strengthen democratic institutions worldwide!</p>
                                <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                    LMIS →</a>
                            </div>
                        </div>

                        {/* <!-- Approach --> */}
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                            </div>
                            <div class="card-body">
                                <p>LMIS is a non-profit, non-partisan, non-governmental organization that works in partnership around the world to strengthen and safeguard democratic institutions, processes, norms and values to secure a better quality of life for all. LMIS envisions a world where democracy and freedom prevail, with dignity for all.</p>
                                <p class="mb-0">We envision a world where democracy and freedom prevail, with dignity for all.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}