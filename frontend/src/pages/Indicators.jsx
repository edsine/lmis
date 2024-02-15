import React, { useEffect } from "react";
import Script from "react-load-script";
import "../styles/bootstrap.min.css";
import "../styles/mine.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/bootstrap-icons/bootstrap-icons.css";
import Common from "../components/inc/Common";
import Indicator from "../components/pages/fetchindicator";

function Indicators() {
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

      <section id="team" className="team">
        <div className="container" data-aos="fade-up" style={{ padding: '60px' }}>
          <p>
            Home || <b style={{ color: "green" }}>Indicators Category</b>
          </p>
          <div className="row gy-4">
            <Indicator />
          </div>
        </div>
      </section>
      {/* End Our Team Section */}

      <a
        href="#"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>

    //     <>
    //     <Common />

    //     <div className='bg' style={{ backgroundImage: `url(${unsplash})`,backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',/*
    //     width: '100vw',
    //     height: '100vh' */ }}>
    //     <div className="container">
    //     <div className="row" style={{ display: 'flex',  justifyContent:'center', alignItems:'center', }}>

    //  <div style={{ width: "50%",marginBottom: 30,marginTop: 30,backgroundColor: 'white' }}>
    //             <div className="row" style={{ margin: 30 }}>
    //             <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Population </Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour force</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Employment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Informal sector and informal employment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Public sector employment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Employees</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Working poverty</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Unemployment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Time-related underemployment</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Other measures of labour underutilization</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>School-to-work transition</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Hours of work</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Earnings</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour income</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour cost</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour productivity</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Social protection</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Occupational injuries</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Labour inspection</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Trade union membership</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Collective bargaining</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Strikes and lockouts</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Unpaid work</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>International migrant stock</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>International migrant flow</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Nationals abroad</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Child labour</Link>
    //     </div>
    //     <div className='col-md-3' style={{ marginTop: 20 }}>
    //     <Link className="text-black" to={'/search/6'}>Consumer prices</Link>
    //     </div>

    //             </div>

    //         </div>
    //     </div>

    //     </div> </div>
    //     </>
  );
}
export default Indicators;
