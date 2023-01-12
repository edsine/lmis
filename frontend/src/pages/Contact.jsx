import React from 'react';
import BallotBox from '../components/images/Ballot_Box.jpg'
import Common from '../components/inc/Common';

function Contactus() {
    return (
        <div>
            <Common />
            <section className='py-4 bg-info'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className='float-end'>Home / Contact Us</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card card1shadow">
                        <div className="card-body card-body1">
                            <div className="row">
                                <div class="row justify-content-center">

                                    <div class="col-xl-10 col-lg-12 col-md-12">

                                        <div class=" o-hidden border-0 shadow-lg my-5">
                                            <div class="p-0">
                                                {/* <!-- Nested Row within Card Body --> */}
                                                <div class="row">
                                                    <div class="col-lg-6 text-center">
                                                        <img style={{maxWidth: '400px'}} src={BallotBox} alt="" />
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="p-5">
                                                            <div class="text-center">
                                                                <h1 class="h4 text-gray-900 mb-4">Drop A Message Here!<hr /></h1>

                                                            </div>
                                                            <form class="user">
                                                                <div className="form-group">
                                                                    <label className='mb-1'>Full Name</label>
                                                                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className='mb-1'>Phone Number</label>
                                                                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className='mb-1'>Email Address</label>
                                                                    <input type="text" className='form-control' placeholder='Enter Full Name' />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label className='mb-1'>Message</label>
                                                                    <textarea className='form-control' rows="3" placeholder='Type your message...'></textarea>
                                                                </div>
                                                                <div className="form-group py-3">
                                                                    <button className='btn btn-primary shadow w-100'>Submit</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Contactus;