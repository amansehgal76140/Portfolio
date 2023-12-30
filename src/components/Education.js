import React from "react";
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { education, cerificates } from "../constant";

function Education() {
  return (
    <Box p={3} style={{ backgroundColor: "#FFECCE", color: "#333333" }}>
      <Typography variant="h4" style={{ marginBottom: 2 }}>
        Education
      </Typography>
      {education.map((currEducation, index) => {
        return (
          <Box mt={3} key={index}>
            <Typography variant="h5" color={"GrayText"}>
              {currEducation.course}
            </Typography>
            <Typography variant="h6">{currEducation.college}</Typography>
            <Grid container spacing={1} style={{ marginTop: 2 }}>
              <Grid item xs={12} sm={2}>
                <Typography variant="body1" style={{ marginTop: 2 }}>
                  {currEducation.time}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography variant="body1" style={{ marginTop: 2 }}>
                  CGPA - {currEducation.CGPA}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      })}
      <Box mt={4}>
        <Typography variant="h6" style={{ marginBottom: 2 }}>
          Certification
        </Typography>
        <Link href={cerificates[0].link}>{cerificates[0].name}</Link>
      </Box>
    </Box>
  );
}

export default Education;
