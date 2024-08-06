import React, { useState, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import profileImage from "../images/Profile.jpeg";
import Box from "@mui/material/Box";
import { Button, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Leetcode from "../images/Leetcode.png";
import GFG from "../images/GFG.png";
import { about } from "../constant";
import MailIcon from "@mui/icons-material/Mail";

function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const text = useMemo(() => ["Full Stack Developer", "React Developer"], []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text[textIndex].length) {
        setDisplayText((prevText) => prevText + text[textIndex][currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        setDisplayText("");
        setCurrentIndex(0);
        setTextIndex((textIndex + 1) % 2);
      }
    }, 300); // Adjust the interval duration (in milliseconds) to control the typing speed

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, text, textIndex]);

  return (
    <Box style={{ backgroundColor: "#FFE5E1", color: "#333333" }} p={4}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={3}>
            <img
              alt="Profile"
              src={profileImage}
              style={{ height: 400, width: "80%", borderRadius: "50%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mt={5}>
            <Box maxWidth={"80%"}>
              <Typography variant="h4">Hi, I am Aman Sehgal</Typography>
              <Typography variant="h6">I am a {displayText}</Typography>
              <Box mt={3}>
                <Typography variant="body2">{about.description}</Typography>
              </Box>
              <Box mt={3}>
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#333333",
                  }}
                >
                  <Link
                    style={{
                      textTransform: "none",
                      color: "#fff",
                      textDecoration: "none",
                    }}
                    href="https://drive.google.com/file/d/1FD160KI1olUESK-lU1Bb7vvF7U7sVCug/view?usp=drivesdk"
                  >
                    Check Resume
                  </Link>
                </Button>
              </Box>
              <Box display={"flex"} mt={3}>
                <Link href="mailto:amansehgal0800@gmail.com">
                  <MailIcon
                    sx={{ fontSize: "30px", marginRight: 2, color: "#333333" }}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/aman-sehgal-65a86019b/">
                  <LinkedInIcon
                    sx={{ fontSize: "30px", marginRight: 2, color: "#333333" }}
                  />
                </Link>
                <Link href="https://github.com/amansehgal76140">
                  <GitHubIcon
                    sx={{ fontSize: "30px", color: "#333333", mr: 2 }}
                  />
                </Link>
                <Link href="https://leetcode.com/AmanSehgal_14/">
                  <img
                    src={Leetcode}
                    alt="Logo"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "16px",
                    }}
                  />
                </Link>
                <Link href="https://auth.geeksforgeeks.org/user/sehgalaman901/">
                  <img
                    src={GFG}
                    alt="Logo"
                    style={{ width: "30px", height: "30px" }}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
//https://drive.google.com/file/d/1FD160KI1olUESK-lU1Bb7vvF7U7sVCug/view?usp=drivesdk