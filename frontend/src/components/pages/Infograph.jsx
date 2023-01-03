import React, { useState } from 'react';
// import VMC from './inc/Vmc';
// import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { MDBAccordion, MDBAccordionItem, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import PieChart from "./PieCharts";
import { HorizontalBar } from 'react-chartjs-2';
import { Chart } from "react-google-charts";
import Common from "../inc/Common"


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
    ["Algeria", 36],
  ["Angola", -8],
  ["Benin", 6],
  ["Botswana", -24],
  ["Burkina Faso", 12],
  ["Burundi", -3],
  ["Cameroon", 3],
  ["Canary Islands", 28],
  ["Cape Verde", 15],
  ["Central African Republic", 4],
  ["Ceuta", 35],
  ["Chad", 12],
  ["Comoros", -12],
  ["Cote d'Ivoire", 6],
  ["Democratic Republic of the Congo", -3],
  ["Djibouti", 12],
  ["Egypt", 26],
  ["Equatorial Guinea", 3],
  ["Eritrea", 15],
  ["Ethiopia", 9],
  ["Gabon", 0],
  ["Gambia", 13],
  ["Ghana", 5],
  ["Guinea", 10],
  ["Guinea-Bissau", 12],
  ["Kenya", -1],
  ["Lesotho", -29],
  ["Liberia", 6],
  ["Libya", 32],
  ["Madagascar", null],
  ["Madeira", 33],
  ["Malawi", -14],
  ["Mali", 12],
  ["Mauritania", 18],
  ["Mauritius", -20],
  ["Mayotte", -13],
  ["Melilla", 35],
  ["Morocco", 32],
  ["Mozambique", -25],
  ["Namibia", -22],
  ["Niger", 14],
  ["Nigeria", 8],
  ["Republic of the Congo", -1],
  ["Réunion", -21],
  ["Rwanda", -2],
  ["Saint Helena", -16],
  ["São Tomé and Principe", 0],
  ["Senegal", 15],
  ["Seychelles", -5],
  ["Sierra Leone", 8],
  ["Somalia", 2],
  ["Sudan", 15],
  ["South Africa", -30],
  ["South Sudan", 5],
  ["Swaziland", -26],
  ["Tanzania", -6],
  ["Togo", 6],
  ["Tunisia", 34],
  ["Uganda", 1],
  ["Western Sahara", 25],
  ["Zambia", -15],
  ["Zimbabwe", -18],
  ["Nigeria", 100],
    
];
export const options = {
    region: "002", // Nigeria
    colorAxis: { colors: ["#00853f", "black", "#e31b23", "green"] },
    // backgroundColor: "#81d4fa",
    // datalessRegionColor: "#f8bbd0",
    defaultColor: "#f5f5f5",
  };
function Infographs() {
    const [horizontalBar] = useState({
        labels: ['Male', 'Female', 'Under Age', 'Young Adults', 'Adults', 'Aged', 'Unavaillable'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'white',
                borderColor: 'green',
                data: [100, 60, 60, 40, 90, 20, 90],
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#488134',
                borderColor: 'blue',
                data: [28, 78, 100, 38, 38, 18, 20],
            },
        ],
    });
    return (
        <>
        <Common />
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="App">
                            {/* <div className="text-center">
                            <h3>Nigeria — 2023 presidential election</h3>
                        </div> */}
                            <PieChart language="es" data={data} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <MDBAccordion initialActive={1}>
                            <MDBAccordionItem collapseId={1} headerTitle='What is a Labour Market Information System (LMIS)?'>
                            A labour market information system is a network of institutions, persons and information that have mutually recognized roles, agreements and functions with respect to the production, storage, dissemination and use of labour market related information and results in order to maximise the potential for relevant and applicable policy and programme formulation and implementation.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={2} headerTitle='What is the purpose?'>
                            The main purpose of LMIS is the production of information and analysis for policy makers and other labour market stakeholders. For example, the functions of the European Employment Observatory are stated as follows: “The European Employment Observatory contributes to the development of the European Employment Strategy through the provision of information, comparative research and evaluation on employment policies and labour market trends.” It is important to establish institutional arrangements in order to make the information and analysis widely available, and to provide opportunities for labour market stakeholders to influence the agenda of the LMIS. 

The LMIS can also be directly involved in monitoring and reporting on employment and labour policies. Both at the international and national levels, the institutional role of the LMIS can be broadened to include the exchange of information or coordination of the LMIS activities of labour market stakeholders, which include statistical agencies, research agencies and agencies involved in policy formulation and implementation, including and workers’ and employers’ organizations. This function may range from the dissemination of information on concepts, definitions and standards, to the allocation of resources regarding data collection or specific analytical activities.
                            </MDBAccordionItem>
                            <MDBAccordionItem collapseId={3} headerTitle='Which type of sources are used?'>
                            Effective LMIS draw on all major data sources. Each source has advantages and limitations in terms of the cost, quality and type of information gained. 

Labour force surveys can be designed to cover the entire population of a country, all sectors of the economy and all categories of workers, including own-account workers, contributing family workers and persons engaged in casual work. For this reason, household-based labour force surveys offer a unique advantage to obtain information on the labour market of a country and its structure. Other sources, such as population censuses, multi-purpose household surveys, establishment surveys, or administrative records (e.g., employment service records), differ in scope, coverage, units of measurement or methods of data collection.

Meanwhile, establishment surveys typically have poor coverage of very small or unregistered businesses but are a more reliable source on wages and earnings. Similarly, administrative records provide a low-cost source of labour market information, but this information is limited by the purpose of the records, which may be different from that of an analyst or policy maker. 
                            </MDBAccordionItem>
                        </MDBAccordion>
                    </div>

                    <div className="row">
                        <div className="mb-3">
                            <h2>Elections in Nigeria — Latest news</h2>
                            <div className='underline'></div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className='card shadow'>
                            <div className="card-body card-body1">
                                <h3 className="activities mt-5">Activities</h3>
                                <HorizontalBar data={horizontalBar} options={{ responsive: true }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='card shadow'>
                            <div className="card-body card-body1">
                                <h3 className="activities mt-5">Activities</h3>
                                <HorizontalBar data={horizontalBar} options={{ responsive: true }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 my-5 py-5">
                        <div className='card shadow'>
                            <div className="card-body card-body1">
                                <div className="App">
                                    <Chart chartType="GeoChart" width="100%" height="400px" data={geodata} options={options}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        </>
    )
}
export default Infographs;


