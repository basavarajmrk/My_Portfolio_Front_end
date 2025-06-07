import React, { useEffect, useState } from "react";
import { getProjectById } from "../services/api";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  Stack,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import BuildIcon from "@mui/icons-material/Build";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
const Proejct1 = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const environments = project ? project.environment?.split("/") : [];
  useEffect(() => {
    getProjectById(id).then((res) => {
      setProject(res);
    });
  }, [id]);

  if (!project) return <p>Loading...</p>;
  return (
    <Box sx={{ p: 10,backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${project?.image})`, height: "100vh", backgroundSize: "cover", backgroundPosition: "center" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card
        sx={{
          maxWidth: "960px",
          mx: "auto",
          my: 6,
          borderRadius: 4,
          background: "linear-gradient(135deg, #f8f9fa, #e0f7fa)",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
          p: 3,
        }}
      >
        <CardContent>
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#0d47a1" }}
          >
            {project.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", color: "#333", mb: 3 }}
          >
            {project.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Environment */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              <BuildIcon fontSize="small" sx={{ mr: 1 }} />
              Environment & Tools
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {environments.map((env, idx) => (
                <Chip
                  key={idx}
                  label={env.trim()}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>

          {/* Roles & Responsibilities */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              <WorkOutlineIcon fontSize="small" sx={{ mr: 1 }} />
              Roles & Responsibilities
            </Typography>
            <Typography
              variant="body2"
              sx={{
                whiteSpace: "pre-line",
                textAlign: "justify",
                color: "#444",
              }}
            >
              {project.roles_and_responsibilities}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
    </Box>
  );
};
export default Proejct1;
