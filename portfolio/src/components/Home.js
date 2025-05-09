import React, { useEffect, useState } from "react";
import { getHome } from "../services/api";
import LinearProgress from "@mui/material/LinearProgress";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
// React: Needed to write React components
// useState: manages the state (semiler to variable chenges)
// useEffect: run code when the component loads

// this is the function component that will be used to display the home page
const Home = () => {
  const [data, setData] = useState([]);
  // data this will store the api responce(like title, decitpion)
  // setData is used to update data
  // useState({}) // this is the initial state of data, it is an empty object
  // usecase similarly store the data from the database query in a variable in python

  useEffect(() => {
    getHome().then((res) => {
      setData(res[0]);
    });
  }, []);

  // useeffect runs when the component  mounts(loads)
  // getHome() call the api (api/home)
  // .then(setData); when the data is recived it update the data state
  // [] empty arrey means it will run only once when the component mounts
  // UseCase like querying  your Django API when a view loads.

  // Display the data
  // This is the JSX (React's HTML-like syntax).

  return (
    <section id="home">
      <Box sx={{ backgroundColor: "#e4f2f7", width: "100%", height: "100vh" }}>
        <Container maxWidth="md" sx={{ pt: 8, textAlign: "center" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {data?.username?.split(" ").map((word, index) => (
              <div key={index}>{word}</div>
            ))}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {data.designation}
          </Typography>
        </Container>

        <Container
          maxWidth="sm"
          sx={{
            minHeight: "calc(100vh - 300px)", // subtract space for top text
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            backgroundColor="#b9ccd6"
            boxShadow={3}
            //   borderRadius={2}
            alignItems="center"
            justifyContent="center"
            minHeight="30vh"
            textAlign="center"
            p={4}
          >
            <Typography variant="body1" color="textSecondary">
              {data.description}
            </Typography>
            {data?.resume && (
              <a href={data.resume} download style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Download Resume
                </Button>
              </a>
            )}
          </Box>
        </Container>
        <Box sx={{ backgroundColor: "#e4f2f7", width: "100%", pb: 4 }}>
          <Container
            maxWidth="md"
            sx={{
              pt: 8,
              textAlign: "center",
              backgroundColor: "#d0e5ef",
              borderRadius: 2,
              pb: 8,
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              01 PROFESSIONAL
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              MY KNOWLEDGE LEVEL IN SOFTWARE
            </Typography>

            <Grid container spacing={4}>
              {data?.skills?.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: "#ffffff",
                      borderRadius: 3,
                      boxShadow: 3,
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "#1565c0", mb: 2, fontWeight: "bold" }}
                    >
                      {skill.skill_name}
                    </Typography>

                    {skill.subskills?.map((sub, subIndex) => (
                      <Box key={subIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mb: 0.5,
                          }}
                        >
                          <Typography variant="body1">
                            {sub.subskill_name}
                          </Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {Math.min(sub.skill_percentage, 100)}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={Math.min(sub.skill_percentage, 100)}
                          sx={{
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: "#e0e0e0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#1976d2",
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </section>
  );
};
export default Home;
