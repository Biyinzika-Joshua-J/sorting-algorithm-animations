import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector } from "react-redux";
import { useSelect } from "@mui/base";

const Footer = () => {
  const theme = useSelector(state => state.theme.mode);
  const darkModeStyles = {
    backgroundColor : '#576CBC ',
    color:'#fff',
    transition: 'background-color all .9s'
  }
  return (
    <Box
      className='footer'
      sx={{
        borderTop: "2px solid #19376D",
        textAlign: "center",
        width: "100%",
        marginTop: "auto",
        ...(theme==='dark'?darkModeStyles:{ transition: 'all .2s'}),
      }}
    >
      <Stack direction={"column"} spacing={1}>
        <Typography>
          Designed by Joshua Biyinzika
        </Typography>
          <Stack direction={"row"} spacing={2} justifyContent="center">
            <IconButton
              color="primary"
              href="https://linkedin.com/in/biyinzika-joshua-j
"
              target={"_blank"}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton color="primary"  href="https://twitter.com/JoshJosephB
"
              target={"_blank"}>
              <TwitterIcon />
            </IconButton>
            <IconButton color="primary"  href="mailto:joshuabiyinzika22@gmail.com">
              <EmailIcon />
            </IconButton>
          </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
