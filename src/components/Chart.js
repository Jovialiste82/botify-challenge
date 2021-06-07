import React from "react";
import Chart from "react-google-charts";
import getNeosData from "../helpers/getNeosData";

const ChartDisplay = ({ neos, orbBodySelector, viewMode, options }) => {
  return (
    <Chart
      width={"800px"}
      height={"700px"}
      chartType={viewMode}
      loader={<div>Loading {viewMode}</div>}
      data={getNeosData(neos, orbBodySelector)}
      options={options}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default ChartDisplay;
