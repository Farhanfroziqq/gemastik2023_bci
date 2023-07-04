import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import history from "../../../assets/history";
import Chart from "chart.js/auto";

const Graph = () => {
	const [historyData, setHistoryData] = useState({
		labels: history.map((data) => data.day),
		datasets: [
			{
				label: "Protein",
				data: history.map((data) => data.total_protein),
				borderColor: "green",
				borderWidth: 2,
			},
			{
				label: "Carbohydrate",
				data: history.map((data) => data.total_carbs),
				borderColor: "blue",
				borderWidth: 2,
			},
			{
				label: "Fat",
				data: history.map((data) => data.total_fat),
				borderColor: "red",
				borderWidth: 2,
			},
			{
				label: "Calories",
				data: history.map((data) => data.total_calories),
				borderColor: "orange",
				borderWidth: 2,
			},
		],
	});

	function LineChart({ chartData }) {
		return <Line data={chartData} />;
	}

	return (
		<div>
			<div style={{ width: 700 }} className='mx-auto'>
				<LineChart chartData={historyData} />
			</div>
		</div>
	);
};

export default Graph;
