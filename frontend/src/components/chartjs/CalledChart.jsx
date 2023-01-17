import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const CalledChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/indicator-detail-metas')
      .then(res => {
        setChartData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="text-center">Bar Chart</h2>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalledChart;
