import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavbarInput from "./NavbarInput";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#0B2447" }} position='static'>
      <Toolbar sx={{paddingTop:'.5rem'}}>
        <Box>
          <Link to={"/"} style={{ color: "white", textDecorationLine: "none" }}>
            <Typography variant="h6">
              Sorting Algorithms 
            </Typography>
          </Link>
        </Box>
        <Box sx={{ marginLeft: "auto" }}>
          <Stack spacing={".1rem"} direction="row" alignItems={'center'}>
            <NavbarInput/>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
