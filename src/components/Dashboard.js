import React from "react";
import ChartComp from "./Chart";
import { useFetch } from "../hooks/useFetch";
import ControlPanel from "./ControlPanel";

const Dashboard = () => {
  const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";
  const [orbBodySelector, seOrbBodySelector] = React.useState();
  const data = useFetch(url, seOrbBodySelector);

  const getOrbitingBodies = (array) => {
    return Array.from(new Set(array.map((neo) => neo.orbitingBodies).flat()));
  };

  return (
    <div>
      {!data ? (
        <h4>LOADING...</h4>
      ) : (
        <>
          <ControlPanel
            orbitingBodies={getOrbitingBodies(data)}
            orbBodySelector={orbBodySelector}
            seOrbBodySelector={seOrbBodySelector}
          />
          <div style={{ display: "flex", maxWidth: 900 }}>
            <ChartComp neos={data} orbBodySelector={orbBodySelector} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
