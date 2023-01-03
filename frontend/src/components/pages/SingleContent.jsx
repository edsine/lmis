
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import search from '../data/search.json';
import { getSingleIndicators } from '../helper/helper';
import Searchsidebar from '../inc/Searchsidebar';
import Dropdown from 'react-bootstrap/Dropdown';
import ApexChart from '../apexcharts/AreaChart';
import ApexChart2 from '../apexcharts/AreaChart2';
import ScatterChart from '../apexcharts/ScatterChart';
import StackedBar from '../chartjs/StackedBar';
import StackedBar2 from '../chartjs/StackedBar2';
import { AiOutlineDotChart, AiOutlineLineChart } from 'react-icons/ai';
import { MdStackedBarChart } from 'react-icons/md';
import { BsBarChartSteps } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import Apexhor from '../apexcharts/Apexhor';
import Apexstack from '../apexcharts/Apexstack';
import Apextime from '../apexcharts/Apextime';
import Apexvert from '../apexcharts/Apexvert';
import Apexcircle from '../apexcharts/Apexcircle';
import Population from './fetchpopulation';

class SingleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: search,
      activePage: 1,
      itemPerpage: 4,
      pageId: this.props.detailId,
      loading: false,
      showTable: false,
      error: false,
      tabledata: {},
      div: 'div1',
    }
    //this.loadClickHandler()
  }
  handleButtonClick(data) {
    if (data === "div1") {
      //alert(data)
      this.setState({
        div: "div1",
      });
    } else if (data === "div2") {
      this.setState({
        div: "div2",
      });
    } else if (data === "div3") {
      this.setState({
        div: "div3",
      });
    } else if (data === "div4") {
      this.setState({
        div: "div4",
      });
    } else if (data === "div5") {
      this.setState({
        div: "div5",
      });
    } else if (data === "div6") {
      this.setState({
        div: "div6",
      });
    } else if (data === "div7") {
      this.setState({
        div: "div7",
      });
    } else if (data === "div8") {
      this.setState({
        div: "div8",
      });
    } else if (data === "div9") {
      this.setState({
        div: "div9",
      });
    } else {
      this.setState({
        div: "div1",
      });
    }

  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }
  loadClickHandler = () => {
    //
    this.setState({ loading: true });
    //fetch(this.API_URL+"customers")
    /*     axios.get(API_URL+"population")
          .then((response) => {
            //alert(JSON.stringify(response))
            if (response) {
              this.setState({loading:false});
              //localStorage.setItem("population",JSON.stringify(response.data))
              return response.data;
            } else {
              throw new Error("Something went wrong");
            }
          })
          .then((data) => {
            this.setState({tabledata:data});
            this.setState({showTable:true});
            //console.log(data);
          })
          .catch((err) => {
            this.setState({error:true});
            console.log(err);
    
          }); */
  };
  render() {
    const paginationData = getSingleIndicators(this.state.pageId).map((item, i) => {
      return <article key={i} className={item.format === 'video' ? 'sigma_post style-7 post-format-video' : 'sigma_post style-7 ' && item.format === 'quote' ? 'sigma_post style-7 post-format-quote' : 'sigma_post style-7 ' && item.format === 'audio' ? 'sigma_post style-7 post-format-audio' : 'sigma_post style-7 ' && item.format === 'link' ? 'sigma_post style-7 post-format-link' : 'sigma_post style-7 '}>
        {/* Standard */}

        {/* Standard */}
        {/* Quote */}


        <div className="sigma_post-body">
          <div className="sigma_post-content">
            <h5 style={{ fontSize: '18px' }} className="text-green">
              <a href="#" style={{ display: 'none' }} class="badge badge-warning">Warning <span aria-hidden="true">&times;</span></a>
              {item.title}
            </h5>
            <p>{item.shorttext.slice(0, 250)}</p>
            <div className="sigma_post-meta">

              <p><b>Measure: </b> {item.measure} <br />
                <b>{item.datatype} </b></p>
              <b>Indicators by Breakdown: </b> &nbsp;&nbsp; {item.indicators_by_breakdown1}&nbsp;&nbsp;
              <b>Databases: </b> &nbsp;&nbsp; {item.database1}&nbsp;&nbsp;
              <b>Databases: </b> &nbsp;&nbsp; {item.database2}&nbsp;&nbsp;
              <b>Indicators by Subject: </b> &nbsp;&nbsp; {item.indicators_by_subject}&nbsp;&nbsp;
              <b>Indicators by Breakdown: </b> &nbsp;&nbsp; {item.indicators_by_breakdown2}<br /><br />
              <b>Related files: </b><br />
              {/* <Link to={"/assets/img/"} download={item.file_link} target="_self"><b className='primary-text-color'>{item.file_name}</b></Link> */}
              <a download={item.file_link} href="/assets/img/" title="Full CSV (ILO Bulk)">
                <b className='text-green'>{item.file_name}</b>
              </a>
            </div>
          </div>
        </div>
      </article>
    });
    return (
      <div className="sidebar-style-8">
        <div className="section section-padding">
          <div className="container" style={{ maxWidth: '990px' }} >
            <div className="row">
              <div className="col-lg-4">
                <Searchsidebar />
              </div>
              <div className="col-lg-8 ">
                <Tabs>
                  <TabList>
                    <Tab><div style={{ textAlign: 'center' }}><i className='fa fa-list-alt'></i></div>Overview</Tab>
                    <Tab><div style={{ textAlign: 'center' }}><i className='fa fa-list-alt'></i></div>Table</Tab>
                    <Tab>
                      <div style={{ textAlign: 'center' }}>
                        <i className='fa fa-bar-chart'></i>
                      </div>
                      <Dropdown>
                        <Dropdown.Toggle variant="default" id="dropdown-basic">
                          Chart
                        </Dropdown.Toggle>


                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div1')}><i className='fa fa-bar-chart'></i> Bar</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-2"><span onClick={() => this.handleButtonClick('div2')}><i className='fa fa-line-chart'></i> Row</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-3"><span onClick={() => this.handleButtonClick('div3')}><AiOutlineDotChart /> Scatter plot</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div4')}><i className="fa-solid fa-chart-bar"></i> Horizontal symbol</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div5')}><i className="fa-solid fa-chart-column"></i> Vertical symbol</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div6')}><AiOutlineLineChart /> Timeline</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div7')}><MdStackedBarChart /> Stacked bar</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div8')}><BsBarChartSteps /> Stacked row</span></Dropdown.Item>
                          <Dropdown.Item href="#/action-1"><span onClick={() => this.handleButtonClick('div9')}><BiWorld /> Choropleth world countries</span></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    {/* style 7 */}
                    {paginationData}
                    {/* style 7 */}
                  </TabPanel>
                  <TabPanel>

                    {/* <div className="section3">{this.state.showTable && <Table tabledata={this.state.tabledata} />}</div> */}
                    <div className="section3"><div className="sc-bcXHqe bZcmZg">
                      <table role="table">
                        <thead><tr role="row">
                          <th colSpan={1} role="columnheader">ID</th>
                          <th colSpan={1} role="columnheader">Reference Area</th>
                          <th colSpan={1} role="columnheader">Time Period</th>
                          <th colSpan={1} role="columnheader">Age 15+</th>
                          <th colSpan={1} role="columnheader">Age 15-64</th>
                          <th colSpan={1} role="columnheader">Age 15-24</th>
                          <th colSpan={1} role="columnheader">Age 25+</th>
                        </tr></thead>
                       
                       <Population />
                       
                       </table><div className="pagination"><button className="paginate0" disabled>&lt;&lt;</button> <button className="paginate0" disabled>&lt;</button> <button className="paginate0">&gt;</button> <button className="paginate0">&gt;&gt;</button> <span className="paginate1">Page <strong>1 of 23</strong> </span><span className="paginate1">
                          <input type="number" defaultValue={1} style={{ width: '50px', height: '30px', padding: '0px', margin: '0px', textAlign: 'right' }} /></span> <select style={{ width: '70px', padding: '0px', height: '30px', margin: '0px' }}><option value={3}>Show 3</option><option value={5}>Show 5</option><option value={15}>Show 15</option><option value={50}>Show 50</option><option value={100}>Show 100</option></select></div></div></div>

                  </TabPanel>
                  <TabPanel>
                    <h5>Working-age population by sex and age</h5>

                    <b>Frequency:</b> Annual &nbsp;&nbsp;
                    <b>Measure:</b> Working-age population &nbsp;&nbsp;
                    <b>Sex:</b> Total &nbsp;&nbsp;<br />
                    <b>Combined unit of measure:</b> Persons, Thousands &nbsp;&nbsp;

                    <div className="div1" style={{ display: this.state.div === "div1" ? "block" : "none" }}>
                      <ApexChart /></div>
                    <div className="div2" style={{ display: this.state.div === "div2" ? "block" : "none" }}>
                      <ApexChart2 /></div>
                    <div className="div3" style={{ display: this.state.div === "div3" ? "block" : "none" }}>
                      <ScatterChart /></div>
                    <div className="div4" style={{ display: this.state.div === "div4" ? "block" : "none" }}>
                      <Apexhor /></div>
                    <div className="div5" style={{ display: this.state.div === "div5" ? "block" : "none" }}>
                      <Apexvert /> </div>
                    <div className="div6" style={{ display: this.state.div === "div6" ? "block" : "none" }}>
                      <Apextime /> </div>
                    <div className="div7" style={{ display: this.state.div === "div7" ? "block" : "none" }}>
                      <StackedBar /> </div>
                    <div className="div8" style={{ display: this.state.div === "div8" ? "block" : "none" }}>
                      <Apexstack /> </div>
                    <div className="div9" style={{ display: this.state.div === "div9" ? "block" : "none" }}>
                      <Apexcircle /></div>


                  </TabPanel>
                </Tabs>


              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleContent;