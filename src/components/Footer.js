import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <Box style={{ backgroundColor: "#F5F5F5", color: "#333333" }} p={3}>
      <Box>
        <Typography variant="body2" color={"GrayText"}>
          Aman Sehgal
        </Typography>
        <div>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </Typography>
        </div>
        <Typography variant="caption">
          Made with <span style={{ color: "red" }}>&hearts;</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
