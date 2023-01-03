import React from 'react';
import { BiBuildings, BiBriefcase } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import Common from '../inc/Common';
import  './statistics.css'
import img from '../images/bg2.png'

class Nelex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            itemPerpage: 4
        }
    }
    
    render() {
        
        return (
             <>
             <Common />
             <div className="sidebar-style-8">
                <div className="section section-padding">
                    <div className="container">
                        <h3 style={{ textAlign: 'center' }}>Jobs Statistics</h3>
                   
                        <div>
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
                    <span className="text-gray-500 f-size-16">Live Job</span>
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
                    <div className="f-size-24 ft-wt-5"><span className="counter">16</span>
                    </div>
                    <span className="text-gray-500 f-size-16">Companies</span>
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
                    <span className="text-gray-500 f-size-16">Candidates</span>
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
                    <span className="text-gray-500 f-size-16">New Jobs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="container">
          <h3 style={{ textalign: 'center' }}>Most Popular Vacancies</h3>
          <div className="rt-spacer-40 rt-spacer-md-20" />
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Graphic%20designer">Graphic designer</a>
                  </h6>
                  <p>0 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Web%20Devloper">Web Devloper</a>
                  </h6>
                  <p>1 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Assistant%20Manager">Assistant Manager</a>
                  </h6>
                  <p>3 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Director">Director</a>
                  </h6>
                  <p>5 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Administrator">Administrator</a>
                  </h6>
                  <p>7 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Executive">Executive</a>
                  </h6>
                  <p>7 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Team%20Leader">Team Leader</a>
                  </h6>
                  <p>9 Open Positions</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="most-popular-wrap">
                <div className="most-popular-item">
                  <h6><a href="=Manager">Manager</a>
                  </h6>
                  <p>12 Open Positions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap">
                <div className="flex-grow-1">
                  <h3 style={{ textalign: 'center' }}>Popular Category</h3>
                </div>
                <div className="flex-grow-0 rt-pt-md-10">
                  <a href="" className="btn btn-outline-primary">
                    <span className="button-content-wrapper ">
                      <span className="button-icon align-icon-right">
                        <i className="ph-arrow-right" />
                      </span>
                      <span className="button-text">
                        View All Jobs
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rt-spacer-40 rt-spacer-md-20" />
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=IT%20%26%20Telecommunication">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-desktop" />
                  </div>
                  <div className="popular-category-data">
                    <h6>IT &amp; Telecommunication</h6>
                    <p>3 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Others">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-ellipsis-v" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Others</h6>
                    <p>8 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Driving%2FMotor%20Technician">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-car" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Driving/Motor Technician</h6>
                    <p>4 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Law%2FLegal">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-gavel" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Law/Legal</h6>
                    <p>7 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Hospitality%2F%20Travel%2F%20Tourism">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-hospital" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Hospitality/ Travel/ Tourism</h6>
                    <p>3 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Engineer%2FArchitects">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-hammer" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Engineer/Architects</h6>
                    <p>7 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Garments%2FTextile">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-tshirt" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Garments/Textile</h6>
                    <p>5 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Design%2FCreative">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i className="fas fa-pen" />
                  </div>
                  <div className="popular-category-data">
                    <h6>Design/Creative</h6>
                    <p>1 Open Position</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '60px' }}>
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap">
                <div className="flex-grow-1">
                  <h4>Featured Job</h4>
                </div>
                <a href="" className="flex-grow-0 rt-pt-md-10">
                  <button className="btn btn-outline-primary">
                    <span className="button-content-wrapper ">
                      <span className="button-icon align-icon-right">
                        <i className="ph-arrow-right" />
                      </span>
                      <span>
                        View All
                      </span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="rt-spacer-40 " />
          <div className="row">
            <div className="col-12">
              <ul className="rt-list">
                <li className="d-block fade-in-bottom  rt-mb-24">
                  <div className="card iconxl-size jobcardStyle1 ">
                    <div className="card-body">
                      <div className="rt-single-icon-box icb-clmn-lg ">
                        <a href="" className="icon-thumb">
                          <img src={img} alt="" draggable="false" />
                        </a>
                        <a href="" className="iconbox-content">
                          <div className="post-info2">
                            <div className="post-main-title">
                              MERN Stack Developer
                              <span className="badge rounded-pill bg-primary-50 text-primary-500">
                                Part Time
                              </span>
                            </div>
                            <div className="body-font-4 text-gray-600 pt-2">
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Nigeria
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 2.0625V19.9375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.8125 7.5625C15.8125 7.11108 15.7236 6.66408 15.5508 6.24703C15.3781 5.82997 15.1249 5.45102 14.8057 5.13182C14.4865 4.81262 14.1075 4.55941 13.6905 4.38666C13.2734 4.21391 12.8264 4.125 12.375 4.125H9.28125C8.36957 4.125 7.49523 4.48716 6.85057 5.13182C6.20591 5.77648 5.84375 6.65082 5.84375 7.5625C5.84375 8.47418 6.20591 9.34852 6.85057 9.99318C7.49523 10.6378 8.36957 11 9.28125 11H13.0625C13.9742 11 14.8485 11.3622 15.4932 12.0068C16.1378 12.6515 16.5 13.5258 16.5 14.4375C16.5 15.3492 16.1378 16.2235 15.4932 16.8682C14.8485 17.5128 13.9742 17.875 13.0625 17.875H8.9375C8.02582 17.875 7.15148 17.5128 6.50682 16.8682C5.86216 16.2235 5.5 15.3492 5.5 14.4375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                500 - 2K ₦
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.125 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M6.875 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M3.4375 7.5625H18.5625" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-danger">Expired</span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="iconbox-extra align-self-center">
                          <div>
                            <button type="button" className="text-primary-500 hoverbg-primary-50 plain-button icon-button login_required">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block fade-in-bottom  rt-mb-24">
                  <div className="card iconxl-size jobcardStyle1 ">
                    <div className="card-body">
                      <div className="rt-single-icon-box icb-clmn-lg ">
                        <a href="" className="icon-thumb">
                          <img src={img} alt="" draggable="false" />
                        </a>
                        <a href="" className="iconbox-content">
                          <div className="post-info2">
                            <div className="post-main-title">
                              React Developer
                              <span className="badge rounded-pill bg-primary-50 text-primary-500">
                                Freelance
                              </span>
                            </div>
                            <div className="body-font-4 text-gray-600 pt-2">
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Nigeria
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 2.0625V19.9375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.8125 7.5625C15.8125 7.11108 15.7236 6.66408 15.5508 6.24703C15.3781 5.82997 15.1249 5.45102 14.8057 5.13182C14.4865 4.81262 14.1075 4.55941 13.6905 4.38666C13.2734 4.21391 12.8264 4.125 12.375 4.125H9.28125C8.36957 4.125 7.49523 4.48716 6.85057 5.13182C6.20591 5.77648 5.84375 6.65082 5.84375 7.5625C5.84375 8.47418 6.20591 9.34852 6.85057 9.99318C7.49523 10.6378 8.36957 11 9.28125 11H13.0625C13.9742 11 14.8485 11.3622 15.4932 12.0068C16.1378 12.6515 16.5 13.5258 16.5 14.4375C16.5 15.3492 16.1378 16.2235 15.4932 16.8682C14.8485 17.5128 13.9742 17.875 13.0625 17.875H8.9375C8.02582 17.875 7.15148 17.5128 6.50682 16.8682C5.86216 16.2235 5.5 15.3492 5.5 14.4375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                250 - 600K ₦
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.125 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M6.875 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M3.4375 7.5625H18.5625" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-danger">Expired</span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="iconbox-extra align-self-center">
                          <div>
                            <button type="button" className="text-primary-500 hoverbg-primary-50 plain-button icon-button login_required">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                          <a href="" className="btn btn-primary2-50">
                            <span className="button-content-wrapper ">
                              <span className="button-icon align-icon-right"><i className="ph-arrow-right" /></span>
                              <span className="button-text">Apply Now</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block fade-in-bottom  rt-mb-24">
                  <div className="card iconxl-size jobcardStyle1 gradient-bg">
                    <div className="card-body">
                      <div className="rt-single-icon-box icb-clmn-lg ">
                        <a href="" className="icon-thumb">
                          <img src={img} alt="" draggable="false" />
                        </a>
                        <a href="" className="iconbox-content">
                          <div className="post-info2">
                            <div className="post-main-title">
                              Frontend Developer
                              <span className="badge rounded-pill bg-primary-50 text-primary-500">
                                Full Time
                              </span>
                            </div>
                            <div className="body-font-4 text-gray-600 pt-2">
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Nigeria
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 2.0625V19.9375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.8125 7.5625C15.8125 7.11108 15.7236 6.66408 15.5508 6.24703C15.3781 5.82997 15.1249 5.45102 14.8057 5.13182C14.4865 4.81262 14.1075 4.55941 13.6905 4.38666C13.2734 4.21391 12.8264 4.125 12.375 4.125H9.28125C8.36957 4.125 7.49523 4.48716 6.85057 5.13182C6.20591 5.77648 5.84375 6.65082 5.84375 7.5625C5.84375 8.47418 6.20591 9.34852 6.85057 9.99318C7.49523 10.6378 8.36957 11 9.28125 11H13.0625C13.9742 11 14.8485 11.3622 15.4932 12.0068C16.1378 12.6515 16.5 13.5258 16.5 14.4375C16.5 15.3492 16.1378 16.2235 15.4932 16.8682C14.8485 17.5128 13.9742 17.875 13.0625 17.875H8.9375C8.02582 17.875 7.15148 17.5128 6.50682 16.8682C5.86216 16.2235 5.5 15.3492 5.5 14.4375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                200 - 500K ₦
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.125 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M6.875 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M3.4375 7.5625H18.5625" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-danger">Expired</span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="iconbox-extra align-self-center">
                          <div>
                            <button type="button" className="text-primary-500 hoverbg-primary-50 plain-button icon-button login_required">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-block fade-in-bottom  rt-mb-24">
                  <div className="card iconxl-size jobcardStyle1 gradient-bg">
                    <div className="card-body">
                      <div className="rt-single-icon-box icb-clmn-lg ">
                        <a href="" className="icon-thumb">
                          <img src={img} alt="" draggable="false" />
                        </a>
                        <a href="/uiux-designer" className="iconbox-content">
                          <div className="post-info2">
                            <div className="post-main-title">
                              UI/UX Designer
                              <span className="badge rounded-pill bg-primary-50 text-primary-500">
                                Intern
                              </span>
                            </div>
                            <div className="body-font-4 text-gray-600 pt-2">
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Nigeria
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M11 2.0625V19.9375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.8125 7.5625C15.8125 7.11108 15.7236 6.66408 15.5508 6.24703C15.3781 5.82997 15.1249 5.45102 14.8057 5.13182C14.4865 4.81262 14.1075 4.55941 13.6905 4.38666C13.2734 4.21391 12.8264 4.125 12.375 4.125H9.28125C8.36957 4.125 7.49523 4.48716 6.85057 5.13182C6.20591 5.77648 5.84375 6.65082 5.84375 7.5625C5.84375 8.47418 6.20591 9.34852 6.85057 9.99318C7.49523 10.6378 8.36957 11 9.28125 11H13.0625C13.9742 11 14.8485 11.3622 15.4932 12.0068C16.1378 12.6515 16.5 13.5258 16.5 14.4375C16.5 15.3492 16.1378 16.2235 15.4932 16.8682C14.8485 17.5128 13.9742 17.875 13.0625 17.875H8.9375C8.02582 17.875 7.15148 17.5128 6.50682 16.8682C5.86216 16.2235 5.5 15.3492 5.5 14.4375" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                200 - 500K ₦
                              </span>
                              <span className="info-tools">
                                <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.875 3.4375H4.125C3.7453 3.4375 3.4375 3.7453 3.4375 4.125V17.875C3.4375 18.2547 3.7453 18.5625 4.125 18.5625H17.875C18.2547 18.5625 18.5625 18.2547 18.5625 17.875V4.125C18.5625 3.7453 18.2547 3.4375 17.875 3.4375Z" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M15.125 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M6.875 2.0625V4.8125" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M3.4375 7.5625H18.5625" stroke="#C5C9D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-danger">Expired</span>
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="iconbox-extra align-self-center">
                          <div>
                            <button type="button" className="text-primary-500 hoverbg-primary-50 plain-button icon-button login_required">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 21L11.9993 17.25L6 21V4.5C6 4.30109 6.07902 4.11032 6.21967 3.96967C6.36032 3.82902 6.55109 3.75 6.75 3.75H17.25C17.4489 3.75 17.6397 3.82902 17.7803 3.96967C17.921 4.11032 18 4.30109 18 4.5V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: '60px' }}>
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap">
                <div className="flex-grow-1">
                  <h4>Top <span className="text-primary-500 has-title-shape">Companies
                      <img src="" alt="" />
                    </span></h4>
                </div>
                <a href="" className="flex-grow-0 rt-pt-md-10">
                  <button className="btn btn-outline-primary">
                    <span className="button-content-wrapper ">
                      <span className="button-icon align-icon-right">
                        <i className="ph-arrow-right" />
                      </span>
                      <span>
                        View All
                      </span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="rt-spacer-40 " />
          <div className="row">
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">IntelliWare</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Solomon Islands
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        IntelliWare
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                    <button type="button" className="btn btn-primary2-50 d-block bg-green text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="/employers/radiance-software" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Radiance Software</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Iceland
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Radiance Software
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                    <button type="button" className="btn btn-primary2-50 d-block bg-green text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Java Points</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Iceland
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Java Points
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                    <button type="button" className="btn btn-primary2-50 d-block bg-green text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Softtech Point</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Cameroon
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Softtech Point
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                    <button type="button" className="btn btn-primary2-50 d-block bg-green text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Google</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Canada
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Google
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                      <button type="button" className="btn btn-primary2-50 d-block bg-secondary text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            No Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Digital Point</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Malaysia
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Digital Point
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                      <button type="button" className="btn btn-primary2-50 d-block bg-secondary text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            No Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Quantum Comp Solutions</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Korea
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Quantum Comp Solutions
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                      <button type="button" className="btn btn-primary2-50 d-block bg-secondary text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            No Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href={img} className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">TriTech International</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Barbados
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        TriTech International
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                      <button type="button" className="btn btn-primary2-50 d-block bg-secondary text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            No Open Position
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 fade-in-bottom  condition_class rt-mb-24">
              <div className="card jobcardStyle1">
                <div className="card-body">
                  <div className="rt-single-icon-box">
                    <div className="icon-thumb company-logo">
                      <img src={img} alt="" draggable="false" />
                    </div>
                    <div className="iconbox-content">
                      <div className>
                        <a href="" className="tw-text-[#191F33] tw-text-lg tw-font-medium tw-whitespace-nowrap tw-text-ellipsis tw-overflow-hidden tw-inline-block tw-max-w-[250px]">Nerdware</a>
                      </div>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-map-pin" />
                        Palau
                      </span>
                      <span className="loacton text-gray-400 ">
                        <i className="ph-suitcase-simple" />
                        Nerdware
                      </span>
                    </div>
                  </div>
                  <div className="post-info d-flex">
                    <div className="flex-grow-1">
                      <button type="button" className="btn btn-primary2-50 d-block bg-secondary text-light">
                        <div className="button-content-wrapper ">
                          <span className="button-text">
                            No Open Position
                          </span>
                        </div>
                      </button>
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
            </>
        );
    }
}

export default Nelex;