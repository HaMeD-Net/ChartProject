import React from "react";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MyChart = ({ chartData, chartType, key }) => {

    const labels = Object.keys(chartData);
    const chartValues = Object.values(chartData)
    const data = {
        labels: labels,
        datasets: [
            {
                label: "# of votes",
                data: chartValues,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (


        <div style={{ width: "30%", margin: 5 }} key={Math.random() * 100}>
            {chartType === "bar" ? <Bar data={data} key={Math.random() * 100} /> : <Pie data={data} key={Math.random() * 100} />}
        </div>


    );
};
export default MyChart;
