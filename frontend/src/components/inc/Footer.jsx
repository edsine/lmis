import React from "react";
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import Logo from "../images/Logo2.png";
// import { Link } from "react-router-dom";

function Footer() {
    return (


        <><footer id="footer" className="footer" style={{ backgroundColor: 'rgba(242, 243, 232, 1)', color: 'rgba(72, 129, 52, 1)' }}>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                            {/* <span style={{ color: 'rgb(46, 93, 29)' }}>LMIS</span> */}
                            <img src={Logo} alt="Logo" height={40} width={100}></img>
                        </a>
                        <p>The Nigerian Labour Market Information System (LMIS) a programme by the Federal Ministry of Labour is a comprehensive online platform that provides up-to-date information on the labor market in Nigeria. It serves as a resource for job seekers, employers, policy makers, and researchers, offering a range of data and tools to help users make informed decisions about their careers and businesses.</p>
                        {/* <div className="social-links d-flex mt-4">
                            <a href="#" className="twitter" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-linkedin" /></a>
                        </div> */}
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul style={{ color: 'rgba(72, 129, 52, 1)' }}>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Home</a></li>
                            <li><Link to="/indicators" style={{ color: 'rgba(72, 129, 52, 1)' }}>Indicators</Link></li>
                            {/* <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Database</a></li> */}
                            {/* <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Terms of service</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Privacy policy</a></li> */}
                        </ul>
                    </div>
                    {/* <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Real database</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Online tools</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>National Budget</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Summary</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Data Insights</a></li>
                        </ul>
                    </div> */}
                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Federal Secretariat <br />
                            Abuja <br />
                            Nigeria <br /><br />
                            <strong>Phone:</strong> +234000000000<br />
                            <strong>Email:</strong> support@lmisnigeria.com<br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="credits">

                </div>
            </div>
        </footer><>
                <footer class="text-white text-center text-lg-start footer-bg" style={{backgroundColor: 'rgba(72, 129, 52, 1)'}}>
                    <div class="text-center p-3 copyright-bg">
                        © 2023
                        <a class="text-white" href="/"> Federal Ministry of Labour and Employment</a>
                    </div>
                </footer>
            </></>
        
    )
}
export default Footer;


