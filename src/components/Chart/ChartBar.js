import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  //In this ChartBar component, we need to calculate by how much  this specific instance of the chart bar should be filled
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* we all need to change this chart-bar__fill div here. This div is required
        to basically remember by how much this chart bar will be filled */}
        {/* style prop wants a JavaScript object as a value and in this object we
        should use css property names as key names and values as values */}
        {/* if we have a css property name with a -, we should use quotes around it if we are using a style prop for an element, otherwise it will be an invalid property name or we can use camel case for the property name */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
