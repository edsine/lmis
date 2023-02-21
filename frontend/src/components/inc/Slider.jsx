import React from 'react';
// import Slider0 from '../images/slider0.jpg';
// import Slider1 from '../images/slider1.jpg';
// import Slider2 from '../images/slider2.jpg';
// import Slider3 from '../images/slider3.jpg';
//import intelli from '../images/home-image.png';
import landing from '../images/lmis_welcome.png';
import { BiBuildings, BiBriefcase } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';

function Slider() {
  return (
    <div class="ms-3 col-12">
      <div class="row">
        <div class="col-md-4 no-pd">

          <img className='py-5' src={landing} alt="..." />


        </div>
        <div class="col-md-8">
          <div class="tool-home-content-text">
            <h1>Welcome</h1>
            {/* <p>At the end of the exercise, 12,298,944 Nigerians successfully completed the registration as new voters. All along, we have repeatedly assured Nigerians that our process of cleaning up the register is robust. In Nigeria, it involves the recruitment and training of staff and managing the logistics for their deployment to 176,846 polling units spread across 8,809 electoral wards, 774 local areas and 37 states of the federation and the Federal Capital Territory (FCT).</p> */}
            <p>
              The Labour Market Information System (LMIS) is a solution that uses artificial intelligence,
              adaptive intuition, and recognition from all labor data sources to populate labour market
              information.
              The LMIS queries in real-time the databases of the actors with a shared understanding that
              interventions in the labor market are far-ranging.
              The LMIS Portal provides information on drivers, barriers, needs and aspirations of Nigerians
              (home and abroad) through data and insights.
              The main purpose of a Labor Market Information System (LMIS) is the production of
              information and analysis for policy makers and other labor market stakeholders.
              LMIS assists in job matching, job searching, and providing information about market needs,
              developing job profiles, and improving application skills.

            </p>

          </div>
        </div>
        <center> <h4><b>Nigeria Labour Statistics</b></h4></center>


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
                    <div className="progress my-1" style={{height: '20px', width: '100%'}}>
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
                    <div className="progress my-1" style={{height: '20px', width: '100%'}}>
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
                    <div className="progress my-1" style={{height: '20px', width: '100%'}}>
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
                    <div className="progress my-1" style={{height: '20px', width: '100%'}}>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '45%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 


      </div>
    </div>
  );
}

export default Slider;