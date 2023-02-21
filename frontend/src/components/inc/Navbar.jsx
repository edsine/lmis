import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{ height: '118px', backgroundColor: '#0A6921' }} class="navbar navbar-expand-lg ">
            <div class="container-fluid px-5">

                <Link class="navbar-brand text-light" to="/">
                    <div >
                        
                    </div>
                    {/* <p className="image-cropper"><img className='profile-pic' style={{ maxWidth: '200px', backgroundColor: '#fff' }} src={LMIS_LOGO} alt="..." /> LABOUR MARKET INFORMATION SERVICE</p> */}
                    <h4>LABOUR MARKET INFORMATION SYSTEM</h4>
                </Link>
            </div>
        </div>

    );
}

export default Navbar;