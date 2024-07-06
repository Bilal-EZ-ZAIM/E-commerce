import { IconButton, Box, Container, Stack, Typography } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { ShoppingCartOutlined, Person2Outlined } from "@mui/icons-material";
import CustomizedBadges from "../Badeges";
import SimpleListMenu from "../Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Header2 = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Container sx={{ my: 3 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "18px",
            }}
            variant="body2"
          >
            <ShoppingCartOutlined /> E-commerce
          </Typography>

          <Search
            sx={{
              border: "1px solid #777",
              borderRadius: "20px",
              width: "500px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 0.4,
              minWidth: "300px",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
            <SimpleListMenu />
          </Search>

          <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
              <Person2Outlined />
            </IconButton>

            <CustomizedBadges />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header2;
