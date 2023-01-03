import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';




import Script from 'react-load-script'
import "../../styles/bootstrap.min.css";
import "../../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/bootstrap-icons/bootstrap-icons.css";
import Ndd from '../images/rice.jpg'
import Act from '../images/gr.jpg'
import Neds from '../images/NEDS.jpg'
import Nmis from '../images/NMIS.jpg'
import Nurhi from '../images/NURHI.jpg'
import Nship from '../images/lmis_welcome.png'
import Vacs from '../images/VACS.jpg'
import Chea from '../images/unsplash_h5xEHzfepNk.png'
import Im from '../images/rice.jpg'
import Nur from '../images/stats-img.svg'
import Common from '../inc/Common';
import ApexMixed from '../apexcharts/ApexMixed'
import ApexCandle from '../apexcharts/ApexCandle'
import ApexCand from '../apexcharts/ApexCand'
// import ApexRadar from '../apexcharts/ApexRadar'
// import ApexBob from '../apexcharts/ApexBob'
import { BiBuildings, BiBriefcase } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import ApexPie from '../apexcharts/ApexPie';

// import "../../styles/aos.css";

function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (




    <div>





      <script src="http://localhost:3000/bootstrap.bundle.js"></script>

      <Script url="http://localhost:3000/aos/aos.js" />
      <Script url="http://localhost:3000/swiper/swiper-bundle.min.js" />
      <Script url="http://localhost:3000/purecounter/purecounter_vanilla.js" />
      <Script url="http://localhost:3000/glightbox/js/glightbox.min.js" />
      <Script url="http://localhost:3000/isotope-layout/isotope.pkgd.min.js" />


      <Script url="http://localhost:3000/main.js" />



      <Common />


      <section id="hero" className="hero" style={{ backgroundImage: `url(${Chea})`, backgroundColor: 'rgba(72, 129, 52, 0.85)', backgroundBlendMode: 'multiply', backgroundSize: 'cover', display: 'block' }}>
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>Welcome to <span>Nigeria Labour Market Information System</span></h2>
              <p style={{ fontSize: '23PX' }}>We provide facts, studies and statistics</p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="#about" className="btn-get-started">Search our database</a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
            </div>
          </div>
        </div>
        <div className="icon-boxes position-relative">
          <div className="container position-relative">
            <div className="row gy-4 mt-5">
              <div className="col-xl-3 col-md-6 card-white" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon-box zoom">
                  <div className="" style={{ fontSize: '23px', color: 'lightgrey' }}>200M Approximately</div>
                  <hr />
                  <h4 className="title"><a href className="stretched-link">National Population 2022</a></h4>
                </div>
              </div>
              {/*End Icon Box */}
              <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon-box zoom">
                  <div className style={{ fontSize: '23px', color: 'lightgrey' }}>120M Approximately</div>
                  <hr />
                  <h4 className="title"><a href className="stretched-link">Employment Population</a></h4>
                </div>
              </div>
              {/*End Icon Box */}
              <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon-box zoom">
                  <div className style={{ fontSize: '23px', color: 'lightgrey' }}>7.79%</div>
                  <hr />
                  <h4 className="title"><a href className="stretched-link">Employment Rate Macro trends</a></h4>
                </div>
              </div>
              {/*End Icon Box */}
              <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                <div className="icon-box zoom">
                  <div className style={{ fontSize: '23px', color: 'lightgrey' }}>35,987</div>
                  <hr />
                  <h4 className="title"><a href className="stretched-link">Number of Registered Business</a></h4>
                </div>
              </div>
              {/*End Icon Box */}
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      <section>
        <div className="container">
          <div className="row">
            <div className="my-1 col-md-6">
              <div className='shadow'>
                <div className="card-body card-body1">
                  <ApexCand />
                </div>
              </div>
            </div>
            <div className="my-1 col-md-6">
              <div className='shadow'>
                <div className="card-body card-body1">
                  <h5 className="activities">Nigeria Employment Rate</h5>
                  <ApexPie />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-sm-6 mx-auto rt-mb-30">
            <div className="card jobcardStyle1 counterbox tw-bg-white hover:tw-shadow-[0px_12px_48px_rgb(2,131,79,0.9)]">
              <div className="card-body">
                <div className="rt-single-icon-box">
                  <div className="icon-thumb">
                    <div className="icon-72">
                      <BiBriefcase />
                    </div>
                  </div>
                  <div className="iconbox-content">
                    <div className="f-size-24 ft-wt-5"><span className="counter">44</span>
                    </div>
                    <div className="progress my-1" style={{ height: '20px', width: '100%' }}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mx-auto rt-mb-30">
            <div className="card jobcardStyle1 counterbox tw-bg-white hover:tw-shadow-[0px_12px_48px_rgb(2,131,79,0.9)]">
              <div className="card-body">
                <div className="rt-single-icon-box">
                  <div className="icon-thumb">
                    <div className="icon-72">
                      <BiBuildings />
                    </div>
                  </div>
                  <div className="iconbox-content">
                    <div className="f-size-24 ft-wt-5">
                      <span className="counter">16</span>
                    </div>
                    <div className="progress my-1" style={{ height: '20px', width: '100%' }}>
                      <div className="progress-bar" role="progressbar" style={{ width: '15%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mx-auto rt-mb-30">
            <div className="card jobcardStyle1 counterbox tw-bg-white hover:tw-shadow-[0px_12px_48px_rgb(2,131,79,0.9)]">
              <div className="card-body">
                <div className="rt-single-icon-box">
                  <div className="icon-thumb">
                    <div className="icon-72">
                      <FiUsers />
                    </div>
                  </div>
                  <div className="iconbox-content">
                    <div className="f-size-24 ft-wt-5"><span className="counter">36</span>
                    </div>
                    <div className="progress my-1" style={{ height: '20px', width: '100%' }}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '75%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6 mx-auto rt-mb-30">
            <div className="card jobcardStyle1 counterbox tw-bg-white hover:tw-shadow-[0px_12px_48px_rgb(2,131,79,0.9)]">
              <div className="card-body">
                <div className="rt-single-icon-box">
                  <div className="icon-thumb">
                    <div className="icon-72">
                      <BiBriefcase />
                    </div>
                  </div>
                  <div className="iconbox-content">
                    <div className="f-size-24 ft-wt-5"><span className="counter">22</span>
                    </div>
                    <div className="progress my-1" style={{ height: '20px', width: '100%' }}>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '45%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <main id="main">
        {/* ======= Stats Counter Section ======= */}
        <section id="stats-counter" className="stats-counter">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6">
                <img src={Nur} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <div className="stats-item d-flex align-items-center">
                  <span data-purecounter-start={0} data-purecounter-end={1} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>Nigeria Employment</strong> Statistics by sector 2021</p>
                </div>{/* End Stats Item */}
                <div className="stats-item d-flex align-items-center">
                  <span data-purecounter-start={0} data-purecounter-end={2} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>Unemployment rate</strong> in Nigeria 1991-2022</p>
                </div>{/* End Stats Item */}
                <div className="stats-item d-flex align-items-center">
                  <span data-purecounter-start={0} data-purecounter-end={3} data-purecounter-duration={1} className="purecounter" />
                  <p><strong>43.9% Of working Population</strong> 18 &amp; older NBS, 2022</p>
                </div>{/* End Stats Item */}
              </div>
            </div>
          </div>
        </section>{/* End Stats Counter Section */}
        {/* ======= Call To Action Section ======= */}
        <section id="call-to-action" className="call-to-action" style={{ backgroundImage: `url(${Act})`, backgroundColor: 'rgba(72, 129, 52, 0.85)', backgroundBlendMode: 'multiply', backgroundSize: 'cover', marginLeft: '10%', marginRight: '10%', padding: '10px 40px', borderRadius: '15px', overflow: 'hidden' }}>

          <div className="container text-center" data-aos="zoom-out">
            <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox command-btn" />
            <h3>Introduction </h3>
            <p> The LMIS queries in real-time the databases of the actors with a shared understanding that interventions in the labor market are far-ranging. The LMIS Portal provides information on drivers, barriers, needs and aspirations of Nigerians (home and abroad) through data and insights. The main purpose of a Labor Market Information System (LMIS) is the production of information and analysis for policy makers and other labor market stakeholders. LMIS assists in job matching, job searching, and providing information about market needs, developing job profiles, and improving application skills.</p>
            <a className="cta-btn" href="#">Explore More</a>
          </div>
        </section>{/* End Call To Action Section */}
        {/* ======= Our Services Section ======= */}
        <section id="services" className="services sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Our Services</h2>
            </div>
            <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-4 col-md-6">
                <div className="service-item  position-relative">
                  <div className="icon" >
                    <i className="bi bi-activity" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Explore Data</h3>
                  <p>Over 2.3 million observations to explore</p>
                  <a href="#" className="readmore stretched-link" >Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Browse Data Sectors</h3>
                  <p>browse numerous data over 23 different sectors</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Browse Occupation Data</h3>
                  <p>Browse data across 48 different Occupations</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Online Tools</h3>
                  <p>Non et tem ea fuga sit provident adipisci neque.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>LMIS Budget</h3>
                  <p>Cumque et suscipit saepe. Est maiores autem  ut</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Key Data</h3>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div>{/* End Service Item */}
            </div>
          </div>
        </section>{/* End Our Services Section */}

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
        </section>{/* End About Us Section */}

        {/* ======= Our Team Section ======= */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Upcoming Events</h2>
            </div>
            <div className="row gy-4">
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
                <div className="member">
                  <img src={Nurhi} style={{ height: '280px', width: '350px', objectFit: 'cover' }} className="img-fluid" alt="" />
                  <h4>Eco Voluntary Walks</h4>
                  <span>Lagos State</span>
                  <div className="social">
                    view more
                    <a href><i className="bi bi-eye" /></a>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
                <div className="member">
                  <img src={Ndd} className="img-fluid" style={{ height: '280px', width: '350px', objectFit: 'cover' }} alt="" />
                  <h4>Creativity &amp; Knowledge Conference</h4>
                  <span>Enugu State</span>
                  <div className="social">
                    view more
                    <a href><i className="bi bi-eye" /></a>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
                <div className="member">
                  <img src={Nmis} style={{ height: '280px', width: '350px', objectFit: 'cover' }} className="img-fluid" alt="" />
                  <h4>WOLEX Skills aquistion training</h4>
                  <span>Kaduna</span>
                  <div className="social">
                    view more
                    <a href><i className="bi bi-eye" /></a>
                  </div>
                </div>
              </div>{/* End Team Member */}
              <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
                <div className="member">
                  <img src={Vacs} style={{ height: '280px', width: '350px', objectFit: 'cover' }} className="img-fluid" alt="" />
                  <h4>Ministry of famers Agriculture Development</h4>
                  <span>Benue State</span>
                  <div className="social">
                    view more
                    <a href><i className="bi bi-eye" /></a>
                  </div>
                </div>
              </div>{/* End Team Member */}
            </div>
          </div>
        </section>{/* End Our Team Section */}
      </main>{/* End #main */}

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>

    </div>
  )
}
export default Home;
