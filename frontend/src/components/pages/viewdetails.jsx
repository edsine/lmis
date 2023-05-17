import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { BiBuildings, BiBriefcase } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';


import ApexMixed from '../apexcharts/ApexMixed'
import Trends from './trends';
import Common from '../inc/Common';

function Viewdetails() {

  return (

    <div>
      <Common />
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center mb-8">
            <div className="col-4 pt-1">
            </div>
            <div className="col-4 text-center">
              <h4><a className="blog-header-logo text-dark" href="#"><b>Labour Market Intelligence</b></a></h4>
              <hr />
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
            </div>
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
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="card flex-md-row mb-6 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">Research</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'skyblue' }}>View Details</small>
                </Link></center>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">Hot Occupation</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'skyblue' }}>View Details</small>
                </Link></center>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">Enterpreneurship</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'grey' }}>View Details</small>
                </Link></center>
              </div>

            </div>
          </div>
          <div className="col-md-4">
            <div className="card flex-md-row mb-6 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">Overseas Employment</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'grey' }}>View Details</small>
                </Link></center>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">Employment Trends</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'grey' }}>View Details</small>
                </Link></center>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
              <div className="card-body d-flex flex-column ">
                <center><BiBuildings size={40} className="" color="#488134" /></center>

                <center>  <h2 className="mb-0">
                  <a className="text-dark" href="#">Statistics</a>
                </h2></center>

                <center> <Link to="/trends">
                  <small className="d-inline-block mb-2" style={{ color: 'grey' }}>View Details</small>
                </Link></center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>


  );

}
export default Viewdetails;