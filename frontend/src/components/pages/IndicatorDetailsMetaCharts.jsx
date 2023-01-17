
import React, { useState, useEffect } from "react";
import Content from "./Content";
import {
  CDBCard,
  CDBCardBody,
  CDBDataTable,
  CDBRow,
  CDBCol,
  CDBContainer,
} from "cdbreact";
import Common from "../inc/Common";
import { BACKEND_URL } from "../../constants";
import { Bar } from 'react-chartjs-2';

const IndicatorDetailsMetaChart = (props) => {
  const [data, setData] = useState(null);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch(`${BACKEND_URL}/indicator-detail-metas?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
        const {
          location: { state },
        } = props;
        // map over data to create chartData
        const labels = [];
        const values = [];
        // const values1 = [];
        // const values3 = [];


        data.data
          .filter((item) => item.attributes?.indicator_detail?.data?.id === state.id)
          .map((item) => {
            labels.push(item.attributes.sex);
            values.push(item.attributes.age);
            // values1.push(item.attributes.frequency);
            // values3.push(item.attributes.marital_status);
          });
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Age',
              data: values,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
            // {
            //   label: 'Frequency',
            //   data: values1,
            //   backgroundColor: 'rgba(170, 99, 132, 0.2)',
            //   borderColor: 'rgba(255, 99, 132, 1)',
            //   borderWidth: 1
            // },
            // {
            //   label: 'Frequency',
            //   data: values3,
            //   backgroundColor: 'rgba(170, 99, 132, 0.2)',
            //   borderColor: 'rgba(255, 99, 132, 1)',
            //   borderWidth: 1
            // }
          ]
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  // useEffect(() => {
  //   fetch(`${BACKEND_URL}/indicator-detail-metas?populate=*`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //   setData(data.data);
  //   const {
  //   location: { state },
  //   } = props;
  //   // map over data to create chartData
  //   const labels = [];
  //   const values = [];
  //   const selectedIds = [...new Set(state.ids)]; // make an array of unique ids
  //   data.data.forEach((item) => {
  //   if (selectedIds.includes(item.attributes?.indicator_detail?.data?.id)) {
  //   labels.push(item.attributes.sex);
  //   labels.push(item.attributes.marital_status);
  //   values.push(item.attributes.age);
  //   }
  //   });
  //   setChartData({
  //   labels: labels,
  //   datasets: [
  //   {
  //   label: 'Age',
  //   data: values,
  //   backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //   borderColor: 'rgba(255, 99, 132, 1)',
  //   borderWidth: 1
  //   }
  //   ]
  //   });
  //   })
  //   .catch((err) => {
  //   console.log(err.message);
  //   });
  //   }, []);


  return (
    <>
      <Common />
      {/* <div className="my-5 py-5">
        <div style={{ maxWidth: "990px", margin: "auto" }}>
          <Bar
            data={chartData}
            width={100}
            height={100}
            options={{ maintainAspectRatio: false }}
          />
          <Bar data={chartData} options={{ responsive: true }} />
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="my-5 col-md-12">
            <div className='card shadow'>
              <div className="card-body card-body1">
                <Bar data={chartData} width={100}
                  height={40} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default IndicatorDetailsMetaChart;
