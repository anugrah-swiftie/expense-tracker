import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  //instead of using 12 chart bars for 12 months, we can make a flexible chart which is not restricted to months or 12 data points
  //Instead we can say that whenever our Chart component is being used somewhere in our application, we wanna receive the data points that should be plotted as props so that the Chart component becomes fairly configurable and the components that use the chart component can decide how many data points with which values should be rendered.
  //Therefore we will ouput the chart bars dynamically from an array of data points, and basically mapping each data point to a chart bar
  //We also wanna make sure that every ChartBar plots the value in relation to the maximum value in the entire chart
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //Since max method requires a list of arguments or numbers to return the maximum number we will use the spread operator with the dataPointValues array to pull out array elements and add them as standalone arguments to this max method
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
