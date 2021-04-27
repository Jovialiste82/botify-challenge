import React from "react";
import MenuItem from "@material-ui/core/MenuItem";

const MenuOrbBody = ({ handleClose, item }) => {
  return <MenuItem onClick={handleClose}>{item}</MenuItem>;
};

export default MenuOrbBody;
