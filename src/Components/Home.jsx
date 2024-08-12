import { Box, Button, Typography, Card, CardContent } from "@mui/material";
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
        background: "linear-gradient(to bottom right, #362050, #9368AB)",
      }}
    >
      <Card
        sx={{
          backgroundColor: "#121212",
          padding: 3,
          borderRadius: 2,
          boxShadow:
            "0 8px 12px 0 rgba(0, 0, 0, 0.6), 0 10px 30px 0 rgba(0, 0, 0, 0.6)",
        }}
      >
        <CardContent>
          <Typography variant="h3" color="#fff" textAlign="center" gutterBottom>
            Welcome
          </Typography>
          <Typography variant="h6" color="#bebebe" gutterBottom>
            Please choose an option to get started
          </Typography>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              sx={{
                color: "#fff",
                width: "120px",
                textAlign: "center",
                borderRadius: "10px",
                background: "linear-gradient(to right, #D05DB8, #6E62E5)",
                mr: 2,
                "&:hover": {
                  background: "linear-gradient(to right, #6E62E5, #D05DB8)",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
            <Button
              sx={{
                color: "#fff",
                width: "120px",
                textAlign: "center",
                borderRadius: "10px",
                background: "linear-gradient(to right, #D05DB8, #6E62E5)",
                "&:hover": {
                  background: "linear-gradient(to right, #6E62E5, #D05DB8)",
                  transform: "scale(1.05)",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
