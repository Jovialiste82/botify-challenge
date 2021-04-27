const getNeosData = (array, selector) => {
  const neosData = array
    .filter((neo) => neo.orbitingBodies.includes(selector))
    .map((neo) => [
      neo.name,
      parseInt(neo.minEstimatedDiameter),
      parseInt(neo.maxEstimatedDiameter),
    ]);

  neosData.unshift([
    "NEO Name",
    "Min Estimated Diamater (km)",
    "Min Estimated Diamater (km)",
  ]);

  return neosData;
};

export default getNeosData;
