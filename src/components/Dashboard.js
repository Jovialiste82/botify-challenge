import React from "react";
import ChartDisplay from "./Chart";
import { useFetchOrbitingBodies } from "../hooks/useFetchOrbitingBodies";
import ControlPanel from "./ControlPanel";

const Dashboard = () => {
  const [orbBodySelector, setOrbBodySelector] = React.useState();
  const data = useFetchOrbitingBodies(setOrbBodySelector);
  const [viewMode, setViewMode] = React.useState("BarChart");

  const handleAlignment = (event, newAlignment) => {
    setViewMode(newAlignment);
  };

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
            setOrbBodySelector={setOrbBodySelector}
            handleAlignment={handleAlignment}
            alignment={viewMode}
          />
          <ChartDisplay
            neos={data}
            orbBodySelector={orbBodySelector}
            viewMode={viewMode}
            options={
              viewMode === "BarChart"
                ? {
                    chartArea: { width: "50%" },
                    hAxis: {
                      title: "Min Estimated Diamater (km)",
                      minValue: 0,
                    },
                    vAxis: {
                      title: "NEO Name",
                    },
                  }
                : {
                    showRowNumber: true,
                  }
            }
          />
        </>
      )}
    </div>
  );
};

export default Dashboard;
