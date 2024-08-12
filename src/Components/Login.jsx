import {
  FormControl,
  TextField,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/Slice";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    error: stateError,
    user,
  } = useSelector((state) => state.user);

  const validate = () => {
    const errors = {};
    if (!login.email) errors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(login.email))
      errors.email = "Invalid email";

    if (!login.password) errors.password = "Password is required";
    else if (!/^[a-zA-Z0-9]{8,20}$/.test(login.password))
      errors.password = "Invalid password";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      await dispatch(loginUser(login)).unwrap();
      navigate("/dashboard");
    } catch (error) {
      setError({ server: stateError || "Login failed!!" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          border: "1px solid #333",
          padding: "30px 50px 50px 50px",
          borderRadius: "20px",
          backgroundColor: "#eee",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          display="flex"
          alignItems="flex-start"
          mb="8px"
          position="absolute"
          top="10px"
          left="20px"
        >
          <ArrowBackIosIcon
            onClick={() => navigate(-1)}
            fontSize="small"
            sx={{
              color: "#000",
              cursor: "pointer",
              width: "15px",
              height: "12px",
            }}
          />
        </Stack>
        <Typography sx={{ marginBottom: "20px", fontSize: "20px" }}>
          Login Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <FormControl>
              <TextField
                name="email"
                label="Email"
                value={login.email}
                onChange={handleChange}
                error={!!error.email}
                helperText={error.email}
                sx={{ width: "300px", borderRadius: "20px" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={login.password}
                onChange={handleChange}
                error={!!error.password}
                helperText={error.password}
                sx={{ width: "300px", borderRadius: "20px" }}
              />
            </FormControl>
            {error.server && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error.server}
              </Typography>
            )}
            <Button
              type="submit"
              sx={{
                color: "#fff",
                width: "100px",
                textAlign: "center",
                borderRadius: "10px",
                background: "linear-gradient(to right, #D05DB8, #6E62E5)",
                "&:hover": {
                  background: "linear-gradient(to right, #D05DB8, #6E62E5)",
                },
              }}
            >
              {loading ? "Loading..." : "Login"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;