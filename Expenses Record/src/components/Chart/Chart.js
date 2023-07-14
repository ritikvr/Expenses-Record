import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  let totalExpense = 0;
  for(const dataPoint of props.dataPoints)
  {
    totalExpense+=dataPoint.value;
  }
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          TotalExpense={totalExpense}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}
export default Chart;
