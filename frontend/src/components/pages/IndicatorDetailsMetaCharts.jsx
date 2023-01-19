import React, { useState, useEffect } from "react";
import Common from "../inc/Common";
import { BACKEND_URL } from "../../constants";
import { Dropdown, Button } from 'react-bootstrap';
import { Doughnut, Pie, Line, Scatter, Bar, HorizontalBar, Radar, Polar, Bubble} from 'react-chartjs-2';


const IndicatorDetailsMetaChart = (props) => {
	const [data, setData] = useState(null);
	const [chartData, setChartData] = useState({});
	const [selectedOption, setSelectedOption] = useState("Genger By Age");
	const [chartType, setChartType] = useState("bar");

	useEffect(() => {
		fetch(`${BACKEND_URL}/indicator-detail-metas?populate=*`)
			.then((response) => response.json())
			.then((data) => {
				setData(data.data);
				updateChartData(selectedOption);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	const updateChartData = (selectedOption) => {
		const {
			location: { state },
		} = props;
		const labels = [];
		const values = [];

		data
			.filter((item) => item.attributes?.indicator_detail?.data?.id === state.id)
			.map((item) => {
				if (selectedOption === "Genger By Age") {
					labels.push(item.attributes.sex);
					values.push(item.attributes.age);
				} else if (selectedOption === "Marital Status by Frequency") {
					labels.push(item.attributes.marital_status);
					values.push(item.attributes.frequency);
				} else if (selectedOption === "Option 3") {
					labels.push(item.attributes.year);
					values.push(item.attributes.gdp);
				}
			});
		setChartData({
			labels: labels,
			datasets: [
				{
					label: selectedOption,
					data: values,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1
				}

			]
		});
	}

	return (
		<>
			<Common />
			<div className="container">
				<div className="row">
					<div className="my-5 col-md-12">
						<div className='card shadow'>
							<div className="card-body card-body1">
								<Dropdown>
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{selectedOption}
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item onClick={() => {
											setSelectedOption("Genger By Age");
											updateChartData("Genger By Age");
										}}>Genger By Age</Dropdown.Item>

										<Dropdown.Item onClick={() => {
											setSelectedOption("Marital Status by Frequency");
											updateChartData("Marital Status by Frequency");
										}}>Marital Status by Frequency</Dropdown.Item>

										<Dropdown.Item onClick={() => {
											setSelectedOption("Option 3");
											updateChartData("Option 3");
										}}>Option 3</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								<div className="text-center">
									<div>
									<Button variant="success" className="m-1" onClick={() => setChartType("bar")}>Bar</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("line")}>Line</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("pie")}>Pie</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("doughnut")}>Doughnut</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("scatter")}>Scatter</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("horizontalbar")}>HorizontalBar</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("radar")}>Radar</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("polar")}>Polar</Button>
								    <Button variant="success" className="m-1" onClick={() => setChartType("bubble")}>Bubble</Button>
								    {chartType === "bar" && <Bar data={chartData} />}
								    {chartType === "line" && <Line data={chartData} />}
								    {chartType === "pie" && <Pie data={chartData} />}
								    {chartType === "doughnut" && <Doughnut data={chartData} />}
								    {chartType === "scatter" && <Scatter data={chartData} />}
								    {chartType === "horizontalbar" && <HorizontalBar data={chartData} />}
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
}

export default IndicatorDetailsMetaChart;
