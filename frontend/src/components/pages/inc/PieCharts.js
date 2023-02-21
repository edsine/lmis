import React, { Component } from "react";
import { Chart } from "react-google-charts";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        loaded: true
      },
      () => {
        this.setState({
          width: document.querySelector("#container").getBoundingClientRect()
            .width
        });
      }
    );

    console.log(document.querySelectorAll("text").length);
  }

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div id="container">
            <Chart
              width={this.state.width}
              height={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.props.data}
              options={{
                backgroundColor: "transparent",
                title: "Distribution of Vote",
                pieHole: 0.4,
                pieStartAngle: 270,
                slices: {
                  4: {
                    color: "transparent"
                  }
                }
              }}
            />
          </div>
        ) : (
          "Cargando datos"
        )}
      </div>
    );
  }
}

// module.exports = PieChart;
export default PieChart;