import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const group = {
  backgroundColor: "#f0f1fa",
  borderRadius: "50px",
  padding: "5px",
  margin: "16px",
};

const selected = {
  backgroundColor: "#657DF2",
  color: "#f0f1fa",
  borderRadius: "50px",
  width: "120px",
  height: "30px",
  textTransform: "none",
  letterSpacing: "0.5px",
  fontWeight: "900",
  border: "none",
};

const notselected = {
  backgroundColor: "#f0f1fa",
  color: "#657DF2",
  borderRadius: "50px",
  width: "120px",
  height: "30px",
  textTransform: "none",
  letterSpacing: "0.5px",
  fontWeight: "900",
  border: "none",
};

const SwitchButton = ({ handleAlignment, alignment }) => {
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      style={group}
      aria-label='text alignment'
    >
      <ToggleButton
        value='chart'
        aria-label='left aligned'
        style={alignment === "chart" ? selected : notselected}
      >
        Chart View
      </ToggleButton>
      <ToggleButton
        value='table'
        aria-label='right aligned'
        style={alignment === "table" ? selected : notselected}
      >
        Table View
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SwitchButton;
