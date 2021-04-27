import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuOrbBody from "./MenuOrbBody";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #6772e5;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  margin: 16px;
  &:hover {
    background-color: #5469d4;
  }
  & .MuiButton-label {
    color: #fff;
  }
`;

const ControlPanel = ({
  orbitingBodies,
  orbBodySelector,
  seOrbBodySelector,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    seOrbBodySelector(
      e.target.innerHTML.split('<span class="MuiTouchRipple-root"')[0]
    );
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <span>Orbiting body (${orbBodySelector})</span>
      </StyledButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {orbitingBodies.map((item) => (
          <MenuOrbBody handleClose={handleClose} item={item} />
        ))}
      </Menu>
    </>
  );
};

export default ControlPanel;
