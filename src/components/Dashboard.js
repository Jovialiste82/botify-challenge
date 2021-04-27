import React from "react";
import ChartComp from "./Chart";
import { useFetch } from "../hooks/useFetch";

const Dashboard = () => {
  const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";
  const data = useFetch(url);
  return (
    <div>
      {!data ? (
        <h4>LOADING...</h4>
      ) : (
        <div style={{ display: "flex", maxWidth: 900 }}>
          <ChartComp neos={data} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
