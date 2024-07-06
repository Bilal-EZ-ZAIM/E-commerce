import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const options = ["Mobile", "Lap Top", "Cars"];

export default function SimpleListMenu() {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          p: 0,
          py: 1.5,
          bgcolor: theme.palette.BgMenu.main,
          borderTopRightRadius: "19px",
          borderBottomRightRadius: "19px",
          width: "150px",
          cursor: "pointer",
        }}
      >
        <ListItem
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ p: 0, pr: "10px", textAlign: "center"  }}
        >
          <ListItemText secondary={options[selectedIndex]} />
          <ExpandMore sx={{ p: 0 }} />
        </ListItem>
      </List>

      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            sx={{fontSize:"13px"}}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
