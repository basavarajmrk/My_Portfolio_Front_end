import React, { useEffect, useState } from "react";
import { getHome } from "../services/api";
import LinearProgress from "@mui/material/LinearProgress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Select,
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
      <Box
        sx={{ backgroundColor: "#e4f2f7", width: "100%", minHeight: "100vh" }}
      >
        {/* Header */}
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

        {/* Description and Resume */}
        <Container
          maxWidth="sm"
          sx={{
            minHeight: "calc(100vh - 300px)",
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

        {/* Skills Card */}
        <Box sx={{ backgroundColor: "#e4f2f7", width: "100%", pb: 8 }}>
          <Container maxWidth={false} sx={{ pt: 4, maxWidth: "800px" }}>
            <Box
              sx={{
                // backgroundColor: "rgba(255, 255, 255, 0.09)", // semi-transparent white
                // backdropFilter: "blur(100px)", // glass blur
                // WebkitBackdropFilter: "blur(10px)", // Safari support
                borderRadius: 3,
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                // border: "1px solid rgba(255, 255, 255, 0.18)",
                p: 3,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                align="center"
              >
                01 PROFESSIONAL
              </Typography>
              <Typography variant="subtitle1" gutterBottom align="center">
                MY KNOWLEDGE LEVEL IN SOFTWARE
              </Typography>

              {data?.skills?.map((skill, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#1565c0", fontWeight: "bold", mb: 1 }}
                  >
                    {skill.skill_name}
                  </Typography>

                  {skill.subskills?.map((sub, subIndex) => {
                    const chartData = [
                      {
                        name: sub.subskill_name,
                        value: Math.min(sub.skill_percentage, 100),
                      },
                    ];
                    return (
                      <Box key={subIndex} sx={{ mb: 1 }}>
                        <Typography
                          variant="body1"
                          sx={{ mb: 1, fontWeight: 500, color: "#333" }}
                        >
                          {sub.subskill_name}
                        </Typography>
                        <ResponsiveContainer width="100%" height={30}>
                          <BarChart
                            data={chartData}
                            layout="vertical"
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                          >
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis type="category" dataKey="name" hide />
                            <Tooltip
                              formatter={(value) => [`${value}%`, "Skill"]}
                              cursor={{ fill: "rgba(25, 118, 210, 0.1)" }}
                            />
                            <Bar
                              dataKey="value"
                              barSize={10}
                              radius={[5, 5, 5, 5]}
                            >
                              <Cell fill="#1976d2" />
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </Box>
                    );
                  })}
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Box>
    </section>
  );
};
export default Home;
