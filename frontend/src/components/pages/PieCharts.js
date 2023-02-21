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
            // maxWidth={'1000px'}
              Width={this.state.width}
              height={'400px'}
              // minHeight={"400px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={this.props.data}
              options={{
                backgroundColor: "transparent",
                title: "Labour Distribution By Age Group",
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
          "Labour Market Information System"
        )}
      </div>
    );
  }
}

export default PieChart;