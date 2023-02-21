import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';



function Seetools() {

    const [activities] = useState({
        labels: ['Yr 1', 'Yr 2', 'Yr 3', 'Yr 4', 'Yr 5', 'Yr 6', 'Yr 7'],
        datasets: [
            {
                type: 'line',
                label: 'Line Dataset',
                backgroundColor: 'yellow',
                data: [60, 50, 60, 80, 60, 40, 60],
                fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }, {
                label: 'Active',
                backgroundColor: '#488134',
                borderColor: 'red',
                data: [45, 45, 45, 60, 45, 90, 45],
                borderRadius: 20,
            }
        ],
    });

    
    const [pieset] = useState({
        labels: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'lightgrey',
                borderColor: 'skyblue',
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
                          <li>
                          <a href="#" style={{color: 'white'}} className="nav-pills nav-stacked active"><span className="fa-stack fa-lg pull-left"><i className="fa fa-refresh fa-stack-1x " /></span>Unemployment</a>
                        </li>
                        <li style={{color: '#488134'}}>
                          <a href="#" style={{color: '#488134'}} className="nav-pills nav-stacked "><span className="fa-stack fa-lg pull-left "><i className="fa fa-eye fa-stack-1x " /></span>Overview</a>
                        </li>
                        <li style={{color: '#488134'}}>
                          <a href="#" style={{color: '#488134'}} className="nav-pills nav-stacked "><span className="fa-stack fa-lg info "><i className="fa fa-info fa-stack-1x" /></span>National plan</a>
                        </li>
                        <li >
                          <a href="#" style={{color: '#488134'}} className="nav-pills nav-stacked "><span className="fa-stack fa-lg pull-left "><i className="fa fa-bank fa-stack-1x " /></span>Budget</a>
                        </li>
                        <li >
                          <a href="#" style={{color: '#488134'}} className="nav-pills nav-stacked "><span className="fa-stack fa-lg pull-left "><i className="fa fa-gear fa-stack-1x " /></span>Analytics</a>
                        </li>
                          </ul>
                        </li>
                      
                      </ul>
                    </div>
                    {/* /#sidebar-wrapper */}
                    {/* Page Content */}
                    <div className="container">
          <h3 style={{ textalign: 'center' }}>Unemployment statement</h3>
          <div className="" />
          <div className="row">
          <div class="mb-1 my-1">
                            {/* <h1>Welcome</h1> */}
                            <p className=''>
                                Since Nigeria's 1999 transition from military to civilian rule, LMIS has worked closely with Nigerian groups to support the development of the country's democratic institutions. Since 2011, LMIS has supported citizen election observer groups to conduct parallel vote tabulations (PVTs) for two presidential and 19 gubernatorial elections. LMIS’s PVT partners have also deployed pre-election observation reporting projects, marking the first time citizen observation groups have collected systematic data in the pre-election phase.
                            </p>
                        </div>

           
          
          </div>
        </div>
        <br /><br />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-wrap">
                <div className="flex-grow-1">
                  <h3 style={{ textalign: 'center' }}>Tools tag list</h3>
                </div>
                <div className="flex-grow-0 rt-pt-md-10">
                  <a href="" className="btn btn-outline-success">
                    <span className="button-content-wrapper ">
                      <span className="button-icon align-icon-right">
                        <i className="ph-arrow-right" />
                      </span>
                      <span className="button-text" style={{ color: '#488134' }}>
                     Download pdf
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
                    <i style={{ color: '#488134' }} className="fas fa-map" />
                  </div>
                  <div className="popular-category-data">
                    <h6 style={{ color: '#488134' }} >Economical Repoprt</h6>
                  
                  </div>
                </div>
              </a>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Others">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i style={{ color: '#488134' }}  className="fas fa-road" />
                  </div>
                  <div className="popular-category-data">
                    <h6 style={{ color: '#488134' }}>Key indicators</h6>
                  
                  </div>
                </div>
              </a>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Others">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i style={{ color: '#488134' }}  className="fas fa-house" />
                  </div>
                  <div className="popular-category-data">
                    <h6 style={{ color: '#488134' }}>Urban and rural</h6>
                  
                  </div>
                </div>
              </a>
            </div>
        
         
            <div className="col-xl-3 col-lg-4 col-md-6">
              <a href="?category=Design%2FCreative">
                <div className="popular-category-item">
                  <div className="popular-category-icon">
                    <i style={{ color: '#488134' }}  className="fas fa-pen" />
                  </div>
                  <div className="popular-category-data">
                    <h6 style={{ color: '#488134' }}> Unemployed Creativity</h6>
                  
                  </div>
                </div>
              </a>
            </div>
            
            <div className="my-5 col-md-6">
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="activities mt-5">2020 index</h3>
                                    <Bar data={activities} options={{ responsive: true }} />
                                </div>
                            </div>
                        </div>
                        <div className="my-5 col-md-6">
                            <div className='card shadow'>
                                <div className="card-body card-body1">
                                    <h3 className="activities mt-5">Activities</h3>
                                    <Pie data={pieset} options={{ responsive: true }} />
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
export default Seetools;


