import React from "react";
import Chart from "react-google-charts";
import getNeosData from "../helpers/getNeosData";

const Table = ({ neos, orbBodySelector }) => {
  return (
    <Chart
      width={"800px"}
      height={"700px"}
      chartType='Table'
      loader={<div>Loading Table</div>}
      data={getNeosData(neos, orbBodySelector)}
      options={{
        showRowNumber: true,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default Table;
