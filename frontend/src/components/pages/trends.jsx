import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { HorizontalBar } from 'react-chartjs-2';
import { Chart } from "react-google-charts";


import ApexMixed from '../apexcharts/ApexMixed'
import Apexscatter from '../apexcharts/Apexscatter';
import Common from '../inc/Common';





let data = [
    ["Age Group", "Percentage"],
    ["20-25", 4],
    ["26-30", 3],
    ["30-40", 1.5],
    ["> 41", 1.5],
    [null, 10]
];
const geodata = [
    ["Country", "Popularity"],
   

  ["Nigeria", -90],
    
];
export const options = {
    region: "002", // Nigeria
    colorAxis: { colors: ["#00853f", "black", "#e31b23", "green"] },
    // backgroundColor: "#81d4fa",
    // datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  };
function Trends() {

    return(

 <div>
     <Common />
     <hr />
 <div className="container">
   <header className="blog-header">
     <div className="row flex-nowrap justify-content-between align-items-center">
       <div className="col-4 pt-1">
       <select
                    class="form-select-lg border-bg-success"
                    aria-label=".form-select-lg example"
                  >
                    <option selected><b>Past 1 year</b></option>
                    <option value="1">-2 years</option>
                    <option value="2">-3 years</option>
                    <option value="3">-4 years</option>
                    <option value="4">-5 years</option>
                    <option value="5">-6 years</option>
                    
                    <option value="28">-7 years</option>

                    <option value="29">-8 years</option>

                  </select>
       </div>
       <div className="col-4 text-center">
       <select
                    class="form-select-lg"
                    aria-label=".form-select-lg example"
                  >
                    <option selected><b>All Categories</b></option>
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
       <div className="col-4 d-flex justify-content-end align-items-center">
       <select
                    class="form-select-lg"
                    aria-label=".form-select-lg example"
                  >
                    <option selected><b>Select State</b></option>
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
   </header>
   <hr />

   <div className="jumbotron  p-md-5 text-white rounded bg-white">
     <div className="col-md-12 px-0">
     <ApexMixed/>
     </div>
   </div>
   <div className="row mb-2">
     <div className="col-md-6">
       <div className="card flex-md-row mb-4 box-shadow h-md-250">
        
         <div className="card-body">
         <span class="badge badge-primary">Kaduna</span>
<span class="badge badge-secondary">Past 2 years</span>
<span class="badge badge-success">Employment</span>
<span class="badge badge-danger">200 miles</span>
<span class="badge badge-warning">High</span>

            
         <Chart chartType="GeoChart" width="100%" height="400px" data={geodata} options={options}/>
         </div>
 
       </div>
     </div>
     <div className="col-md-6">
       <div className="card">
       <button type="button" class="btn btn-secondary ms-4">
       Compared breakdown by subregion <span class="badge badge-light">4</span>
</button>
         <div className="card-body">
           <strong className="d-inline-block mb-2 text-darl">Related  Queries</strong>

           <ol class="list-group list-group-numbered">
  <li class="list-group-item"><b>Ondo</b>
  <div className="progress my-1" style={{height: '20px', width: '80%'}}>
                      <div className="progress-bar bg-dark" role="progressbar" style={{ width: '45%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div>
  </li>
  <li class="list-group-item">  <b>Nasarawa</b><div className="progress my-1" style={{height: '20px', width: '80%'}}>
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div></li>
                    <li class="list-group-item">  <b>Kaduna</b><div className="progress my-1" style={{height: '20px', width: '80%'}}>
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '95%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div></li>
                    <li class="list-group-item">  <b>Benue</b><div className="progress my-1" style={{height: '20px', width: '80%'}}>
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '75%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div></li>
                    <li class="list-group-item">  <b>FCT Abuja</b><div className="progress my-1" style={{height: '20px', width: '80%'}}>
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                    </div></li>
</ol>

         </div>
       
       </div>
     </div>
   </div>
 </div>
 <main role="main" className="container">
   <div className="row">
     <div className="col-md-8 blog-main">
       <div className="blog-post">
         <h2 className="blog-post-title">Present data</h2>
         <p className="blog-post-meta">December 21, 2022 by <a href="#">LMIS</a></p>
         <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
         <hr />
         <blockquote>
          <p>The report highlights the periodic movement in the labour market and the prospects of growth in employment in Nigeria </p>
         </blockquote>

        
       </div>{/* /.blog-post */}
      
     
     </div>{/* /.blog-main */}
     <aside className="col-md-4 blog-sidebar">
       <div className="p-3 mb-3 bg-light rounded">
         <h4 className="font-italic">Region Stats</h4>
         <Apexscatter/>
       </div>

       
     </aside>{/* /.blog-sidebar */}
   </div>{/* /.row */}
   <hr />
   <br></br>
 </main>{/* /.container */}
 <hr />
</div>



);
        
}
export default Trends;