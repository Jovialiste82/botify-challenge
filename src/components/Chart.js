import React from "react";
import Chart from "react-google-charts";

const ChartComp = ({ neos }) => {
  const getNeosData = (array) => {
    let neosData = neos.map((neo) => [
      neo.name,
      parseInt(neo.minEstimatedDiameter),
      parseInt(neo.maxEstimatedDiameter),
    ]);

    neosData.unshift([
      "NEO Name",
      "Min Estimated Diamater (km)",
      "Min Estimated Diamater (km)",
    ]);
    console.log("#### neosData ####");
    console.log(neosData);
    return neosData;
  };

  return (
    <Chart
      width={"800px"}
      height={"700px"}
      chartType='BarChart'
      loader={<div>Loading Chart</div>}
      data={getNeosData(neos)}
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
