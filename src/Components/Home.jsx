import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Typography variant="h4" color="#fff">
        Welcome
      </Typography>
      <Box>
        <Button
          sx={{
            color: "#fff",
            width: "100px",
            textAlign: "center",
            borderRadius: "10px",
            background: "linear-gradient(to right, #D05DB8, #6E62E5)",
            mr: "4px",
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </Button>
        <Button
          sx={{
            color: "#fff",
            width: "100px",
            textAlign: "center",
            borderRadius: "10px",
            background: "linear-gradient(to right, #D05DB8, #6E62E5)",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
