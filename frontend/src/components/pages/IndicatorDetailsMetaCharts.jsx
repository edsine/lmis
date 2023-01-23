import React, { useState, useEffect } from "react";
import Common from "../inc/Common";
import { BACKEND_URL } from "../../constants";
import { Dropdown, Button } from "react-bootstrap";
import {
	Doughnut,
	Pie,
	Line,
	Scatter,
	Bar,
	HorizontalBar,
	Radar,
	Polar,
	Bubble,
} from "react-chartjs-2";

const IndicatorDetailsMetaChart = (props) => {
	const {
		location: { state },
	} = props;
	const [data, setData] = useState(null);
	const [chartData, setChartData] = useState({});
	const [selectedOption, setSelectedOption] = useState(null);
	const [chartType, setChartType] = useState("bar");

	console.log(state);

	useEffect(() => {
		fetch(
			`${BACKEND_URL}/indicator-detail-metas?filters[indicator_detail][id][$eq]=${state.id}`
		)
			.then((response) => response.json())
			.then((data) => {
				setData(data.data);
				// updateChartData(selectedOption);
			})
			.catch((err) => {
				console.log(err.message)
			});
	}, []);

	const updateChartData = (dimensions, title) => {
		const labels = [];
		const values = [];

    data.map((item) => {
      //   if (selectedOption === "Genger By Age") {
      //     labels.push(item.attributes.sex);
      //     values.push(item.attributes.age);
      //   } else if (selectedOption === "Marital Status by Frequency") {
      //     labels.push(item.attributes.marital_status);
      //     values.push(item.attributes.frequency);
      //   } else if (selectedOption === "Option 3") {
      //     labels.push(item.attributes.year);
      //     values.push(item.attributes.gdp);
      //   }
      labels.push(item.attributes?.[`${dimensions[1].attributes?.value}`]);
      values.push(item.attributes?.[`${dimensions[0].attributes?.value}`]);

		});
		setChartData({
			labels: labels,
			datasets: [
				{
					label: title,
					data: values,
					backgroundColor: "rgba(255, 99, 132, 0.2)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 1,
				},
			],
		});
	};

	return (
		<>
			<Common />
			<div className="container">
				<div className="row">
					<div className="my-5 col-md-12">
						<div className="card shadow">
							<div className="card-body card-body1">
								<Dropdown>
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{selectedOption}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										{state.feasibleDimensionCombinations?.map(
											(value, index) => {
												return (
													<Dropdown.Item
														key={index}
														onClick={() => {
															setSelectedOption(value.attributes?.title);
															updateChartData(
																value.attributes?.dimensions?.data,
																value.attributes?.title
															);
														}}
													>
														{value.attributes?.title}
													</Dropdown.Item>
												);
											}
										)}
									</Dropdown.Menu>
								</Dropdown>
								<div className="text-center">
									<div>
										{state.feasibleCharts?.map((value, index) => {
											console.log(value);
											return (
												<Button
													variant="success"
													className="m-1"
													onClick={() =>
														setChartType(`${value.attributes?.value}`)
													}
												>
													{value.attributes?.name}
												</Button>
											);
										})}
										{chartType === "bar" && <Bar data={chartData} />}
										{chartType === "line" && <Line data={chartData} />}
										{chartType === "pie" && <Pie data={chartData} />}
										{chartType === "doughnut" && <Doughnut data={chartData} />}
										{chartType === "scatter" && <Scatter data={chartData} />}
										{chartType === "horizontalbar" && (
											<HorizontalBar data={chartData} />
										)}
										{chartType === "radar" && <Radar data={chartData} />}
										{chartType === "polar" && <Polar data={chartData} />}
										{chartType === "bubble" && <Bubble data={chartData} />}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IndicatorDetailsMetaChart;
