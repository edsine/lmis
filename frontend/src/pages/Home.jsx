import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import Script from "react-load-script";
import "../styles/bootstrap.min.css";
import "../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/bootstrap-icons/bootstrap-icons.css";
import Act from "../components/images/gr.jpg";
import Chea from "../components/images/unsplash_h5xEHzfepNk.png";
import Nur from "../components/images/stats-img.svg";
import Common from "../components/inc/Common";
import ApexPie from "../components/apexcharts/ApexPie";
import Homedata from "../components/pages/inc/apis/hdata_call";
import Introdata from "../components/pages/inc/apis/fetch_intro";
import Eventdata from "../components/pages/inc/apis/fetch_events";
import Labourdata from "../components/pages/inc/apis/fetch_labour";
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

      <section
        id="hero"
        className="hero"
        style={{
          backgroundImage: `url(${Chea})`,
          backgroundColor: "rgba(72, 129, 52, 0.85)",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          display: "block",
        }}
      >
        <div className="container position-relative">
          <div className="row gy-5" data-aos="fade-in">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
              <h2>
                Welcome to <span>Nigeria Labour Market Information System</span>
              </h2>
              <p style={{ fontSize: "23PX" }}>
                We provide facts, studies and statistics
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to="/indicators" className="btn-get-started">
                  Search our database
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2"></div>
          </div>
        </div>

        <Homedata />
      </section>
      {/* End Hero Section */}

      <section>
        <div className="container">
          <div className="row">
            <div className="my-1 col-md-6">
              <div className="shadow">
                <div className="card-body card-body1">
                  <h5>Nigeria Employed Age Distribution</h5>
                  
                </div>
              </div>
            </div>
            <div className="my-1 col-md-6">
              <div className="shadow">
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
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={1}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Nigeria Employment</strong> Statistics by sector
                    2021
                  </p>
                </div>
                {/* End Stats Item */}
                <div className="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={2}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Unemployment rate</strong> in Nigeria 1991-2022
                  </p>
                </div>
                {/* End Stats Item */}
                <div className="stats-item d-flex align-items-center">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={3}
                    data-purecounter-duration={1}
                    className="purecounter"
                  /> 
                  <p>
                    <strong>43.9% Of working Population</strong> 18 &amp; older
                    NBS, 2022
                  </p>
                </div>
                {/* End Stats Item */}
              </div>
            </div>
          </div>
        </section>
        {/* End Stats Counter Section */}
        {/* ======= Call To Action Section ======= */}
        <section
          id="call-to-action"
          className="call-to-action"
          style={{
            backgroundImage: `url(${Act})`,
            backgroundColor: "rgba(72, 129, 52, 0.85)",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
            marginLeft: "10%",
            marginRight: "10%",
            padding: "10px 40px",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <Introdata />
        </section>

        {/* End Call To Action Section */}
        {/* ======= Our Services Section ======= */}

        {/* <section id="services" className="services sections-bg">
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
              </div> */}

        {/* End Service Item */}

        {/* <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Browse Data Sectors</h3>
                  <p>browse numerous data over 23 different sectors</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div> */}

        {/* End Service Item */}

        {/* <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Browse Occupation Data</h3>
                  <p>Browse data across 48 different Occupations</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div> */}

        {/* End Service Item */}

        {/* <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Online Tools</h3>
                  <p>Non et tem ea fuga sit provident adipisci neque.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div> */}

        {/* End Service Item */}

        {/* <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>LMIS Budget</h3>
                  <p>Cumque et suscipit saepe. Est maiores autem  ut</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div> */}

        {/* End Service Item */}

        {/* <div className="col-lg-4 col-md-6">
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text" style={{ marginLeft: '15PX', marginBottom: '10px' }} />
                  </div>
                  <h3>Key Data</h3>
                  <p>Hic molestias ea quibusdam eos. Fugiat enim.</p>
                  <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
                </div>
              </div> */}

        {/* End Service Item */}

        {/* </div>
          </div>
        </section> */}

        {/* End Our Services Section */}

        <div className="container">
          <header className="blog-header pt-5 mt-5">
            <div className="row flex-nowrap justify-content-between align-items-center mb-5">
              <div className="col-4 pt-1"></div>
              <div className="col-4 text-center">
                <h4>
                  <a className="blog-header-logo text-dark" href="#">
                    <b>Labour Market Intelligence</b>
                  </a>
                </h4>
                <hr />
              </div>

              <div className="col-4 d-flex justify-content-end align-items-center"></div>
            </div>
          </header>

          {/* <div className="jumbotron p-2 p-md-5 text-white rounded bg-white">
     <div className="col-md-12  card box-shadow p-4">
     <center>  <h3 className="mb-0">
            <a className="text-dark" href="#">Enterpreneurship</a>
           </h3></center> 

           <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
           <a href="#">View Details</a>
     </div>
   </div> */}
          <Labourdata />
        </div>

        {/* ======= Our Team Section ======= */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Upcoming Events</h2>
            </div>
            <Eventdata />
          </div>
        </section>
        {/* End Our Team Section */}
      </main>
      {/* End #main */}

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  );
}
export default Home;
