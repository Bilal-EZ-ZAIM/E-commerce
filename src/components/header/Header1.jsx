import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  IconButton,
  useTheme,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  LightModeOutlined,
  Twitter,
  ExpandMore,
} from "@mui/icons-material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["EN", "FR"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "10px",
        borderBottomRightRadius:"4px",
        borderBottomLeftRadius:"4px"
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              color: "#fff",
              bgcolor: "#D23F57",
              p: "3px 10px",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
              textAlign: "center",
            }}
            variant="p"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              mr: 2,
              color: "#fff",
              borderRadius: "12px",
              fontSize: "13px",
            }}
            variant="body2"
          >
            free Express shopping
          </Typography>

          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "#fff", fontSize: "18px" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ color: "#fff", fontSize: "18px" }} />
              </IconButton>
            )}
          </div>

          <div>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{ m: 0, p: 0 }}
            >
              <ListItem
                sx={{ px: "3px", py: 0, "&hover": { cursor: "pointer" } }}
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    ".MuiTypography-root": { color: "#fff", fontSize: "14px" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <ExpandMore sx={{ color: "#fff", p: 0 }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  sx={{
                    fontSize: "12px",
                    p: "3px 10px",
                    minHeight: "10px",
                  }}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <Twitter
            sx={{
              fontSize: "18px",
              color: "#fff",
            }}
          />
          <Facebook
            sx={{
              fontSize: "18px",
              color: "#fff",
              mx: 1,
            }}
          />
          <Instagram
            sx={{
              fontSize: "18px",
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
