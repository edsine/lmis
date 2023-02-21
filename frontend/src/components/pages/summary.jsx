import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import Seetools from './seetools';
import ApexMult from '../apexcharts/ApexMult'
import Common from '../inc/Common';


function Summary() {
    

    const [activities] = useState({
        labels: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5', 'Yr 6', 'Yr 7'],
        datasets: [
            {
                type: 'line',
                label: 'Line Dataset',
                backgroundColor: 'yellow',
                data: [610, 510, 620, 802, 60, 40, 2360],
                fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }, {
                label: 'Active',
                backgroundColor: '#488134',
                borderColor: 'red',
                data: [905, 145, 805, 1160, 450, 90, 415],
                borderRadius: 20,
            }
        ],
    });

    
    const [pieset] = useState({
        labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'skyblue',
                borderColor: 'navblue',
                data: [30, 50, 70, 40, 19, 96, 27, 80],
                transform: 'rotate(-60.25deg)',
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(71, 225, 167, 0.5)',
                borderColor: 'rgb(71, 225, 167)',
                data: [28, 48, 40, 19, 96, 27, 100],
            },
        ],
    });
    
    
    return(

      
                <div>
                    <Common/>
                  <nav className="navbar navbar-default no-margin">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header fixed-brand">
                     
                    </div>
                    {/* navbar-header*/}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li className="active">
                          <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
                          </button>
                        </li>
                      </ul>
                    </div>
               
                    {/* bs-example-navbar-collapse-1 */}
                  </nav>
                  <div id="wrapper">
                    {/* Sidebar */}
                    <div id="sidebar-wrapper" style={{backgroundColor: 'white'}} className="shadow">
                      <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
                        <li className="">
                         
                          <ul className="" style={{listStyleType: 'none'}}>
                        
                        <li style={{color: '#488134'}}>

                        <Link style={{color: '#488134'}} className="nav-pills nav-stacked" to="/viewtools"><span className="fa-stack fa-lg pull-left "><i className="fa fa-eye fa-stack-1x " /></span>Overview</Link>
                        </li>
                        <li style={{color: '#488134'}}>
                          <a href="#" style={{color: '#488134'}} className="nav-pills nav-stacked "><span className="fa-stack fa-lg info "><i className="fa fa-info-circle fa-stack-1x" /></span>National plan</a>
                        </li>
                        <li >
                          <a href="#" style={{color: '#488134'}} className="nav-pills nav-stacked "><span className="fa-stack fa-lg pull-left "><i className="fa fa-bank fa-stack-1x " /></span>Budget</a>
                        </li>
                        <li >
                          <a href="#" style={{color: 'white'}} className="nav-pills nav-stacked active"><span className="fa-stack fa-lg pull-left "><i className="fa fa-gear fa-stack-1x " /></span>Summary</a>
                        </li>
                          </ul>
                        </li>
                      
                      </ul>
                    </div>
                    {/* /#sidebar-wrapper */}
                    {/* Page Content */}
                    <div className="container">
                        <br />
                    <center><h4>Ministry of Labour Budget</h4></center>
                    <table class="table table-striped table-bordered table-hover pb-2" >
                        <br />
                       
  <thead>
    <tr>
      <th scope="col" style={{color: 'black'}}>NO</th>
      <th scope="col" tyle={{color: 'black'}}>MDA</th>
      <th scope="col" tyle={{color: 'black'}}>Personel</th>
      <th scope="col" tyle={{color: 'black'}}>Overhead</th>
      <th scope="col" tyle={{color: 'black'}}>Capital</th>
    </tr>
  </thead>
  <tbody>
    <tr class="success">
 
      <th scope="row">1</th>
      <td>FEDERAL MINISTRY OF LABOUR</td>
      <td>5,474,367,517</td>
      <td>693,587,739</td>
      <td>7,908,583,110</td>

    </tr>
    <br />
 
  
    <tr style={{padding: '20px'}}>
   
      <th scope="row">2</th>
      <td>INDUSTRIAL ARBITRATION PANEL</td>
      <td>505,362,542</td>
      <td>130,851,136 3</td>
      <td>3,678,057,430</td>
     
    </tr>
    <br />
   

    <tr>
      <th scope="row">3</th>
      <td>MICHAEL IMODU INSTITUTE OF LABOUR
STUDIES</td>
      <td>590,708,840</td>
      <td>92,792,900</td>
      <td>380,011,890</td>
    </tr>
    <br />
    

    <tr>
      <th scope="row">4</th>
      <td>NATIONAL PRODUCTIVITY CENTRE </td>
      <td>1,109,245,661 </td>
      <td>182,025,080 </td>
      <td>6,802,701,588 </td>
    </tr>
    <br />

    <tr>
      <th scope="row">5</th>
      <td>NATIONAL DIRECTORATE OF
EMPLOYMENT</td>
      <td>5,098,172,481</td>
      <td>338,413,077</td>
      <td>14,716,129,894</td>
    </tr>
    <br />
  </tbody>
</table>
         
          <div className="" />
         
        </div>
     
        <div className="container">
          <div className="row">
            <div className="col-12">
            
               
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="activities mt-5">2022 Summary</h3>
                                    <ApexMult/>
                                </div>
                            </div>
                        
           
            </div>
         
        
        
         
            
           
                        




          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap">
                
               
              </div>
            </div>
          </div>
          </div>
                    
                  </div>
            
              
                </div>
    );
        
}
export default Summary;


