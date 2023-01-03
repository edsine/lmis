import React, {useState} from "react";
//import Bar from './Bar';
import { Link } from "react-router-dom";
import {
  BiBuoy,
  BiCoinStack,
  BiBriefcase,
  BiLineChart,
  BiNews,
} from "react-icons/bi";

import Common from "../inc/Common";
import nigeriaHigh from "../images/ng.svg";
import list from '../data/list';
import Footer from "../inc/Footer";
 

function Sector() {
  const [sectorState,setSectorState] = useState()

  const  handleChange = (e)=>{
    const selected =  e.target.value;
    const selectedSectorState = list.filter((d)=>d.id == selected)[0];
    console.log(selectedSectorState);
    setSectorState(selectedSectorState);


  }
  
  return (
    <>
      <Common />

      <div className="container-fluid">
        <div className="container mt-3 mb-3">
          <h1>Filters</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <h2>sectors</h2>

              <div>
                <div class="col text-center ">
    <select onChange={(e)=>{
              handleChange(e)
            }}>
              {
                list && list.map((l)=>(
                  <option key={l.id} value={l.id} className="">
                    {l.restaurant}
                    
                    </option>
                ))
              }
                    
                  </select>
                  
                  
                  
                  {/*
                  <select 
                    class=" form-select-lg mb-3 pe-5"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>Select Sectors</option>
                    <option value="1">-Business Services</option>
                    <option value="2">--Administrative Services</option>
                    <option value="3">--Arts and Recreation</option>
                    <option value="4">--Proffessional Services</option>
                    <option value="5">-Construction</option>
                    <option value="6">--Construction</option>
                    <option value="7">--Distribution & transport</option>
                    <option value="8">--Accommodation and food</option>
                    <option value="9">--Transport & storage</option>

                    <option value="10">--Wholesale & retail trade</option>
                    <option value="11">Administrative Services</option>
                    <option value="12">-Manufacturing</option>
                    <option value="13">--Manufacturing</option>
                    <option value="14">-Non-marketed services</option>
                    <option value="15">--Education</option>
                    <option value="16">-- health and Social care</option>
                    <option value="17">-- Public sector & defence</option>
                    <option value="18">-Primary sector & utilities</option>

                    <option value="19">
                      --Agriculture,forestry and fishing
                    </option>

                    <option value="20">-- Energy supply services</option>

                    <option value="21">-- Mining and quarry</option>

                    <option value="21">-- Water and waste treatment</option>
                  </select>
                  */}
                </div>
              </div>
            </div>

            <div className="col">
              <h2>states</h2>
              <div>
                <div class="col text-center ">
                  <select
                    class="form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>Select State</option>
                    <option value="1">-Abia</option>
                    <option value="2">-Adamawa</option>
                    <option value="3">-Akwa Ibom</option>
                    <option value="4">-Anambra</option>
                    <option value="5">-Bauchi</option>
                    <option value="6">-Bayelsa</option>
                    <option value="7">-Benue</option>
                    <option value="8">-Borno</option>
                    <option value="9">-Cross River</option>

                    <option value="10">-Delta</option>
                    <option value="11">Ebonyi</option>
                    <option value="12">-Edo</option>
                    <option value="13">-Ekiti</option>
                    <option value="14">-Enugu</option>
                    <option value="15">-Gombe</option>
                    <option value="16">-Imo</option>
                    <option value="17">-Jigawa</option>
                    <option value="18">-Kaduna</option>

                    <option value="19">-Kano</option>

                    <option value="20">-Katsina</option>

                    <option value="21">-Kebbi</option>

                    <option value="22">-Kogi</option>

                    <option value="23">-Kwara</option>

                    <option value="24">-Lagos</option>

                    <option value="25">-Nasarawa</option>

                    <option value="26">-Niger</option>

                    <option value="27">-Ogun</option>

                    <option value="28">-Ondo</option>

                    <option value="29">-Osun</option>

                    <option value="30">-Oyo</option>

                    <option value="30">-Plateau</option>

                    <option value="31">-Rivers</option>

                    <option value="32">-Sokoto</option>

                    <option value="30">-Sokoto</option>

                    <option value="31">-Taraba</option>

                    <option value="32">-Yobe</option>

                    <option value="33">-Sokoto</option>

                    <option value="34">-Yobe</option>

                    <option value="35">-Zamfara</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
         <div class="row container-fluid">
            <h2>sectors</h2>
        <div class="col text-center d-box">
        
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>
                    
                    </option>
                     <option value="1">
                     -Business Services
                     </option>
                    <option value="2">
                    --Administrative Services
                    </option>
                    <option value="3">
                    --Arts and Recreation
                    </option>
                    <option value="4">
                     --Proffessional Services
                     </option>
                    <option value="5">
                    -Construction
                    </option>
                    <option value="6">
                    --Construction
                    </option>
                    <option value="7">
                     --Distribution & transport
                     </option>
                    <option value="8">
                    --Accommodation and food
                    </option>
                    <option value="9">
                    --Transport & storage
                    </option>

                    <option value="10">
                     --Wholesale & retail trade
                     </option>
                    <option value="11">
                    Administrative Services
                    </option>
                    <option value="12">
                    -Manufacturing
                    </option>
                    <option value="13">
                     --Manufacturing
                     </option>
                    <option value="14">
                    -Non-marketed services
                    </option>
                    <option value="15">
                    --Education
                    </option>
                    <option value="16">
                    -- health and Social care
                     </option>
                    <option value="17">
                    -- Public sector & defence
                    </option>
                    <option value="18">
                    -Primary sector & utilities
                    </option>

                    <option value="19">
                    --Agriculture,forestry and fishing
                    </option>

                    <option value="20">
                    -- Energy supply services
                    </option>

                    <option value="21">
                    -- Mining and quarry 
                    </option>

                    <option value="21">
                    -- Water and waste treatment 
                    </option>


                    
                    
                </select>
                    </div>

    <h2>States</h2>
     <div class="col text-center d-box">
     <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected></option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
     </div>
  
</div>
 */}

        <div class="m-5">
          <div className="container-fluid">
            <div class="card card-margin">
              <div
                class="card-header"
                style={{ backgroundColor: "#0A6921", color: "#fff" }}
              >
                {sectorState?.restaurant}
              </div>
              <div class="card-body" className="py-font py-5 px-5">
              {sectorState?.bio}
              </div>
            </div>
          </div>
        </div>

        <div className="container row mb-10">
          <h1>Key Facts</h1>
        </div>

        <div>
          <div className="card-group container-fluid">
            <div class="row">
              <div class="col-8">
                <div className="row ml-2">
                  <div
                    className="card col-3"
                    style={{ backgroundColor: "rgba(116,166,39, 0.1)" }}
                  >
                    {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
                    <div className="card-body">
                      <div className="text-center">
                        <div className="py-5">
                          <BiBuoy size={70} color="#488134" />
                        </div>
                      </div>
                      <h5 className="card-title py-font">Total employment yes</h5>
                      <p className="card-text py-font">
                        618,900 in <strong>2020</strong> in NGN
                      </p>
                      <p className="card-text py-font">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>

                  <div className="card col-3">
                    {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
                    <div className="card-body">
                      <div className="text-center">
                        <div className="py-5">
                          <BiCoinStack size={70} color="#488134" />
                        </div>
                      </div>
                      <h5 className="card-title">
                        Employment share of high-tech occupations
                      </h5>
                      <p className="card-text">
                        19.5% in <strong>2020</strong> in NGN27
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>

                  <div
                    className="card col-3"
                    style={{ backgroundColor: "rgba(116,166,39, 0.1)" }}
                  >
                    {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
                    <div className="card-body">
                      <div className="text-center">
                        <div className="py-5">
                          <BiBriefcase size={70} color="#488134" />
                        </div>
                      </div>
                      <h5 className="card-title">Future employment change</h5>
                      <p className="card-text">-15.5 in 2020-2030 in NGN27</p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>

                  <div className="card col-3">
                    {/*<img src="" className="card-img-top" alt="Hollywood Sign on The Hill" />*/}
                    <div className="card-body">
                      <div className="text-center">
                        <div className="py-5">
                          <BiLineChart size={70} color="#488134" />
                        </div>
                      </div>
                      <h5 className="card-title">
                        Share of people with high education level
                      </h5>
                      <p className="card-text">
                        19.5% in <strong>2020</strong> in NGN27
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center p-5">
                  <img src={sectorState?.image} />
                </div>
              </div>
              <div class="col-4">
                <div className=" container card  mb-5" style={{}}>
                  <div class="card-header">
                    <span className="card-title text-uppercase fs-2 fw-bolder">
                      Data insights
                    </span>
                    <BiNews size={70} color="#488134" className="float-end" />
                  </div>

                  <div className="card-body" style={{}}>
                    <p className="card-text">LIST ALL 113 Sectors Mining</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <h2> How economic sectors are doing in the crisis</h2>
                      <p>
                        Manufacturing and construction sustain massive jobs
                        losses, but employment is growing in health care, social
                        work and education
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h2>
                        Skills developments and trends in the tourism sector
                      </h2>
                      <p>
                        Tourism is a very complex industry made up of a number
                        of different businesses and economic activities. It can
                        be defined with reference to the goods and services
                        tourists consume, where a tourist might be defined as a
                        person who is travelling or visiting a place for a
                        variety of purposes. This…
                      </p>
                    </li>
                    <li className="list-group-item">
                      <h2>
                        Financial intermediation sector provides most continuing
                        vocational training
                      </h2>
                      <p>
                        More than double the average number of hours of
                        continuing vocational training is provided to people
                        working in financial intermediation.
                      </p>
                    </li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*from here for 1*/}
        </div>
      </div>
    </>
  );
}

export default Sector;
