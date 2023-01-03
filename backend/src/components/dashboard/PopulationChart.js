import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import authHeader from "../../services/auth-header";
import { API_URL } from "../../constants/constant";

class PopulationChart extends React.Component {
    constructor(props) {
      super(props);
  //this.time_p =localStorage.getItem("population");
  
      this.state = {
        series: [
          {
            name: 'Age 15+',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
            name: 'Age 15-64',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
            name: 'Age 15-24',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }, {
            name: 'Age 25+',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }				
        ],
        options: {
          chart: {
            type: 'bar',
            
            height: 370,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '57%',
              endingShape: "rounded",
              //borderRadius: 12,
            },
          },
          states: {
            hover: {
              filter: 'none',
            }
          },
          title: {
            text: 'Working-age population by sex and age',
            align: 'center',
          },
          //colors:['#D2D2D2', '#EBEBEB'],
          //colors:['var(--primary)'],
          dataLabels: {
            enabled: false,
          },
          markers: {
            shape: "circle",
          },
          legend: {
            show: true,
            fontSize: '12px',
            labels: {
              colors: '#000000',
              
              },
            markers: {
            width: 18,
            height: 18,
            strokeWidth: 10,
            strokeColor: '#fff',
            fillColors: ['var(--primary)', '#FD5353', '#0000FF', '#A020F0'],
            radius: 12,	
            }
          },
          stroke: {
            show: true,
            width: 4,
            curve: 'smooth',
            lineCap: 'round',
            colors: ['transparent']
          },
          grid: {
            borderColor: '#eee',
          },
          xaxis: {
            position: 'bottom',
            categories:[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            labels: {
              style: {
                colors: '#787878',
                fontSize: '13px',
                fontFamily: 'poppins',
                fontWeight: 100,
                cssClass: 'apexcharts-xaxis-label',
              },
            },
            crosshairs: {
              show: false,
            }
          },
          yaxis: {
            labels: {
              offsetX:-16,
              style: {
                colors: '#787878',
                fontSize: '13px',
                 fontFamily: 'poppins',
                fontWeight: 100,
                cssClass: 'apexcharts-xaxis-label',
              },
            },
          },
          fill: {
            opacity: 1,
            colors:['var(--primary)', '#FD5353', '#0000FF', '#A020F0'],
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " People"
              }
            }
          },
          
        },
      }
    }

    loadClickHandler = () => {
      //
      this.setState({loading:true});
      //fetch(this.API_URL+"population")
      axios.get(API_URL+"population", { headers: authHeader() })
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
  
        });
    };
    render() {
        return (
          <Chart options={this.state.options} series={this.state.series} type="bar" height={370} />
        )
      }
    }

    export default PopulationChart;