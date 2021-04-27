import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      const getAverage = (min, max) => (min + max) / 2;
      const data = json.near_earth_objects.map((neo) => {
        return {
          id: neo.id,
          name: neo.name,
          minEstimatedDiameter:
            neo.estimated_diameter.kilometers.estimated_diameter_min,
          maxEstimatedDiameter:
            neo.estimated_diameter.kilometers.estimated_diameter_max,
          avgEstimatedDiameter: getAverage(
            neo.estimated_diameter.kilometers.estimated_diameter_min,
            neo.estimated_diameter.kilometers.estimated_diameter_max
          ),
        };
      });
      const sortedData = data.sort(
        (a, b) => b.avgEstimatedDiameter - a.avgEstimatedDiameter
      );
      setResponse(sortedData);
    };
    fetchData();
  }, [url]);
  return response;
};
