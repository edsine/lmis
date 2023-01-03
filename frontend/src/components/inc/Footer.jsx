import React from "react";
import * as Icon from 'react-bootstrap-icons';
// import { Link } from "react-router-dom";

function Footer() {
    return (


        <><footer id="footer" className="footer" style={{ backgroundColor: 'rgba(242, 243, 232, 1)', color: 'rgba(72, 129, 52, 1)' }}>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span style={{ color: 'rgb(46, 93, 29)' }}>LMIS</span>
                        </a>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                        <div className="social-links d-flex mt-4">
                            <a href="#" className="twitter" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin" style={{ color: 'rgba(72, 129, 52, 1)' }}><i className="bi bi-linkedin" /></a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul style={{ color: 'rgba(72, 129, 52, 1)' }}>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Home</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Indicators</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Database</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Terms of service</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Real database</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Online tools</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>National Budget</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Summary</a></li>
                            <li><a href="#" style={{ color: 'rgba(72, 129, 52, 1)' }}>Data Insights</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            A108 Adam Street <br />
                            Abuja <br />
                            Nigeria <br /><br />
                            <strong>Phone:</strong> 09023814800<br />
                            <strong>Email:</strong> lmis@gmail.com<br />
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
                        © 2022 Copyright:
                        <a class="text-white" href="https://lmis.ng/"> Labour Market Information System</a>
                    </div>
                </footer>
            </></>
        
    )
}
export default Footer;


