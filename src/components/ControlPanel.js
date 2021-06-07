import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";
import MenuOrbBody from "./MenuOrbBody";
import styled from "styled-components";
import SwitchButton from "./SwitchButton";

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
  handleAlignment,
  alignment,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    seOrbBodySelector(e.target.innerText);
    setAnchorEl(null);
  };

  return (
    <>
      <Box display='flex' p={1} bgcolor='background.paper'>
        <Box>
          <StyledButton
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
          >
            <span>Orbiting body ({orbBodySelector})</span>
          </StyledButton>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
          >
            {orbitingBodies.map((item) => (
              <MenuOrbBody handleClose={handleClose} item={item} />
            ))}
          </Menu>
        </Box>
        <Box>
          <SwitchButton
            handleAlignment={handleAlignment}
            alignment={alignment}
          />
        </Box>
      </Box>
    </>
  );
};

export default ControlPanel;
