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

const Register = () => {
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({});

  const validate = () => {
    const errors = {};
    if (!register.firstName) errors.firstName = "First name is required";
    if (!register.phone) errors.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(register.phone))
      errors.phone = "Phone number must be 10 digits";
    if (!register.email) errors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(register.email))
      errors.email = "Invalid email";
    if (!register.password) errors.password = "Password is required";
    else if (!/^[a-zA-Z0-9]{8,20}$/.test(register.password))
      errors.password = "Password must be 8-20 characters long";

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          firstName: register.firstName,
          lastName: register.lastName,
          phone: register.phone,
          email: register.email,
          password: register.password,
        })
      );

      navigate("/login");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

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
          Register Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <FormControl>
              <TextField
                name="firstName"
                label="First Name"
                value={register.firstName}
                onChange={handleChange}
                error={!!error.firstName}
                helperText={error.firstName}
                sx={{ width: "300px", borderRadius: "20px" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                name="lastName"
                label="Last Name"
                value={register.lastName}
                onChange={handleChange}
                error={!!error.lastName}
                helperText={error.lastName}
                sx={{ width: "300px", borderRadius: "20px" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                name="phone"
                label="Phone"
                value={register.phone}
                onChange={handleChange}
                error={!!error.phone}
                helperText={error.phone}
                sx={{ width: "300px", borderRadius: "20px" }}
              />
            </FormControl>
            <FormControl>
              <TextField
                name="email"
                label="Email"
                value={register.email}
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
                value={register.password}
                onChange={handleChange}
                error={!!error.password}
                helperText={error.password}
                sx={{ width: "300px", borderRadius: "20px" }}
              />
            </FormControl>
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
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;