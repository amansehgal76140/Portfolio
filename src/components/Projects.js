import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Project, skills } from "../constant";
import Button from "@mui/material/Button";

function Projects() {
  return (
    <Box style={{ backgroundColor: "#E7EDDF ", color: "#333333" }} p={4}>
      <Typography variant="h4">Projects</Typography>
      {Project.map((currProject, index) => {
        return (
          <Box mt={4} key={index}>
            <Typography variant="h5" style={{ color: "GrayText" }}>
              {currProject.name}
            </Typography>
            <Box mt={2}>
              <ul>
                {currProject.description.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </Box>
            <Box mt={1} display={"flex"}>
                <Typography variant="body2" style={{ color: "GrayText", marginRight: "8px" }}>Technologies Used:-  </Typography>
                <Typography variant={"body2"}>
                {currProject.Technologies.map((tech, index)=>{
                  return <span key={index}>{tech}{index < 3 ? ", " : "."}</span>
                })} 
                </Typography>
            </Box>
          </Box>
        );
      })}
      <Box mt={4}>
        <Typography variant="h4">Skills</Typography>
        <Box dispaly={"flex"} my={2}>
          {skills.map((skill) => {
            return (
              <Button
                key={skill}
                color="success"
                variant="contained"
                style={{
                  color: "#333333",
                  marginRight: "12px",
                  marginBottom: "8px",
                }}
                disabled={true}
              >
                <span style={{ textTransform: "none" }}>{skill}</span>
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Projects;
