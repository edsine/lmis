import React from 'react';
import Common from "../inc/Common"
import { CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol, CDBContainer } from 'cdbreact';
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import ApexDistributedColumnCharts from './ApexDistributedColumnCharts';


const SkillBank = () => {
    function testClickEvent(param) {
        alert('Row Click Event');
    }

    const data = () => {
        return {
            columns: [
                {
                    label: 'Job Title',
                    field: 'jobtitle',
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Jobtitle',
                    },
                },
                {
                    label: 'Country',
                    field: 'country',
                    width: 270,
                },
                {
                    label: 'Parish',
                    field: 'parish',
                    width: 200,
                },
                {
                    label: 'Total',
                    field: 'total',
                    sort: 'asc',
                    width: 100,
                },
            ],
            rows: [
                {
                    jobtitle: 'Tiger Nixon',
                    country: 'System Architect',
                    parish: 'Edinburgh',
                    total: '61',
                    clickEvent: () => testClickEvent(1),
                },
                {
                    jobtitle: 'Garrett Winters',
                    country: 'Accountant',
                    parish: 'Tokyo',
                    total: '63',
                },
                {
                    jobtitle: 'Ashton Cox',
                    country: 'Junior Technical Author',
                    parish: 'San Francisco',
                    total: '66',
                },
                {
                    jobtitle: 'Cedric Kelly',
                    country: 'Senior Javascript Developer',
                    parish: 'Edinburgh',
                    total: '22',
                },
            ],
        };
    };
    const optionsArray = [
        { key: "ac", label: "Associate Consultant" },
        { key: "ak", label: "HouseKeeper" },
        { key: "mi", label: "Microbiology Intern" },
        { key: "pn", label: "Practical Nurse" },
        { key: "sp", label: "Supervisor" },
        { key: "vt", label: "Volunteer" },
        { key: "tc", label: "Teacher" },
        { key: "aa", label: "Administrative Assistant" },
        // { key: "fr", label: "France" },

    ];
    return (
        <>
            <Common />
            <div className="section">
                <div className="container">
                    <div className="row">
                        {/* Heading Text Start */}
                        <div className="text-center">
                            <div id="header-title">
                                <h3>Labour market data and <span className="accent-text">statistics</span></h3>
                                <span>
                                    Our Skills Bank shows data about labour market information and statistics
                                </span>
                            </div>
                        </div>
                        <div className="row row-cols-1 g-3">
                            <div className="col">
                                <div className="m-b-10 p-15 bg-white tiled">
                                    <div className="card">
                                        <div className="card-body">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-6 col-sm-3"><DropdownMultiselect options={optionsArray} name="countries" /></div>
                                                    <div class="col-6 col-sm-3"><DropdownMultiselect options={["Nigeria"]} name="jobtitles" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col-md-6">
                            <div class="t-header widget clearfix">
                                <div class="th-title">
                                    <p>
                                        <query-link query="$ctrl.widget.getQuery()" visualization="$ctrl.widget.visualization" readonly="!$ctrl.canViewQuery">
                                            <a ng-href="" class="query-link">
                                                <visualization-name visualization="$ctrl.visualization"></visualization-name>
                                                <span>Job Title by Location</span>
                                            </a>
                                        </query-link>
                                    </p>
                                    <div class="text-muted query--description" ng-bind-html="$ctrl.widget.getQuery().description | markdown"></div>
                                </div>
                            </div>
                            <div className="card mb-3">
                                <div className="card-body">
                                    <CDBDataTable striped bordered hover paging={false} data={data()} height={295} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="t-header widget clearfix">
                                <div class="th-title">
                                    <p>
                                        <query-link query="$ctrl.widget.getQuery()" visualization="$ctrl.widget.visualization" readonly="!$ctrl.canViewQuery">
                                            <a ng-href="" class="query-link">
                                                <visualization-name visualization="$ctrl.visualization"></visualization-name>
                                                <span>Job Title by Location</span>
                                            </a>
                                        </query-link>
                                    </p>
                                    <div class="text-muted query--description" ng-bind-html="$ctrl.widget.getQuery().description | markdown"></div>
                                </div>
                            </div>
                            <div className="card mb-3">

                                <div className="card-body">
                                    <ApexDistributedColumnCharts></ApexDistributedColumnCharts>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SkillBank;