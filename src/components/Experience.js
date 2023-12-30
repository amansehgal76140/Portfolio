import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { experience } from "../constant";
import Grid from "@mui/material/Grid";

function Experience() {
  return (
    <Box style={{ backgroundColor: "#D4E9F5", color: "#333333" }} p={4}>
      <Typography variant="h4" style={{ marginBottom: 2 }}>
        Work Experience
      </Typography>
      {experience.map((currentExp, index) => {
        return (
          <div key={index}>
            <Box mt={3}>
              <Typography varinat="h5" style={{ color: "GrayText" }}>
                {currentExp.role}
              </Typography>
              <Grid container spacing={1} style={{ marginTop: 2 }}>
                <Grid item xs={12} sm={2}>
                  <Typography variant="body1" style={{ marginTop: 2 }}>
                    {currentExp.company_name}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Typography variant="body1" style={{ marginTop: 2 }}>
                    {currentExp.time}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Typography variant="body1" style={{ marginTop: 2 }}>
                    {currentExp.duration}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box mt={2}>
              <ul>
                {currentExp.description.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </Box>
            {currentExp.technology && (
              <Box mt={2}>
                <Typography variant="body1">
                  Technologies Used -
                  {currentExp.technology.map((tech) => {
                    return (
                      <span key={tech}>
                        {" "}
                        {tech}
                        {tech !== "MySQL" && ","}{" "}
                      </span>
                    );
                  })}
                </Typography>
              </Box>
            )}
          </div>
        );
      })}
    </Box>
  );
}

export default Experience;
