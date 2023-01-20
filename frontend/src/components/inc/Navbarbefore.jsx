import React from 'react';
// import { Link } from 'react-router-dom';
import logo_new from '../images/lmis_logo.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// import { fab } from '@fortawesome/free-brands-svg-icons'
//   import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
//import logo_light from "../images/Logo2.png"
import { Link, useLocation } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaChartArea, FaHome, FaInfo, FaMap, FaPoll, FaVoteYea } from 'react-icons/fa';


function Navbarbefore() {
    const location = useLocation();

    return (
        <div className='row' style={{ borderBottom: '3px solid #0A6921',marginBottom: '5px' }}> 
        <div style={{ height: '55px' }} className="navbar col-md-12 navbar-expand-lg">
            <div style={{ alignItems: 'center' }} className="nav navbar-nav ps-5 col-md-2">
               <Link to={'/'}>
               <img style={{ height: '50px', alignItems: 'center' }} src={logo_new} alt="..." />
               </Link>
                
            </div>
            <div style={{ height: '55px', backgroundColor: '#fff' }} class="col-md-4 ">
                <div class="container-fluid">
                    {/* <Link class="nav navbar-brand text-light" to="/">National Democratic Institute</Link> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="collapse navbar-collapse col-md-6" id="navbarSupportedContent">
                        <Link class="navbar-brand text-light" to="/">National Democratic Institute</Link>
                    </div> */}
                  
                </div>
            </div>
            <div style={{ height: '55px', backgroundColor: '#fff' }} class="col-md-6">
                <div class="d-flex align-items-center">
                    <a href='https://nelexnigeria.com' target={'_blank'}  style={{height: '55px', backgroundColor: '#0A6921', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-5 me-2">
                        Find Jobs
                    </a>
                    <Link to={'job-statistics'}  style={{height: '55px', backgroundColor: '#0A6921', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-5 me-2">
                    Jobs Statistics
                    </Link>
                    <button  style={{height: '55px', backgroundColor: '#0A6921', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-5 me-2">
                        Login
                    </button>
                    <Link to={'tools'}  style={{height: '55px', backgroundColor: '#0A6921', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-5 me-2">
                    Online Tools
                    </Link>
                    <button style={{display: 'none', height: '55px', backgroundColor: '#0A6921', color: '#fff', textDecoration: 'none', borderRadius: '0px'}} type="button" class="btn btn-link px-4 me-2">
                        Sign up for free
                    </button>
                    <a class="btn btn-dark mx-1 px-3" href="https://facebook.com/lmis" role="button">
                        <FaFacebook />
                    </a>
                    <a class="btn btn-dark mx-1 px-3" href="https://twitter.com/lmis" role="button">
                        <FaTwitter />
                    </a>
                    <a class="btn btn-dark mx-1 px-3" href="https://instagram.com/lmis" role="button">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Navbarbefore;
