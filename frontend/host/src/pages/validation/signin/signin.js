// SignIn.js

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import './styles/signin.css'; // Import the CSS file
import { Navbar } from '../../common-components';
import { useStore } from "store/store";
import CustomizedSnackbars from '../../common-components/snackbar';
const SignIn = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({ email: "", password: "" });
  const { loginUser } = useStore();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState({ message: "", severity: "success" })
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(creds)
      setOpen(true);
      setSeverity({ ...severity, message: "Logged in Up Successfully", severity: "successs" });
      localStorage.setItem("token", response?.data?.token);
      setTimeout(()=>{
        navigate("/");
    }, 1500)
    } catch (err) {
      setOpen(true);
      setSeverity({ ...severity, message: "User Credentials Mismatch please try again.", severity: "error" });
      console.log(err, "errmess")
    }
  };

  const handleCreds = (e) => {
    const { name, value } = e.target;
    setCreds({ ...creds, [name]: value })
  }

  return (
    <div>
      <Navbar />
      <Container component="main" maxWidth="xs" className="container">
        <Paper elevation={3} className="paper">
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              value={creds?.email}
              onChange={handleCreds}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={creds?.password}
              onChange={handleCreds}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
      <CustomizedSnackbars open={open} setOpen={setOpen} severity={severity} />
    </div>
  );
};

export default SignIn;
