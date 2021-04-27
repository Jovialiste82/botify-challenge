import React from "react";
import Chart from "react-google-charts";
import getNeosData from "../helpers/getNeosData";

const ChartComp = ({ neos, orbBodySelector }) => {
  return (
    <Chart
      width={"800px"}
      height={"700px"}
      chartType='BarChart'
      loader={<div>Loading Chart</div>}
      data={getNeosData(neos, orbBodySelector)}
      options={{
        chartArea: { width: "50%" },
        hAxis: {
          title: "Min Estimated Diamater (km)",
          minValue: 0,
        },
        vAxis: {
          title: "NEO Name",
        },
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default ChartComp;
