import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { AccountCircle, Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import styles from './styles/signup.module.css';
import { Navbar } from '../../common-components';
import { useStore } from "store/store";
import CustomizedSnackbars from '../../common-components/snackbar';
const SignupForm = () => {
    const navigate = useNavigate();
    const { signUpUser } = useStore();
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const [showPassword, setShowPassword] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState({ message: "", severity: "success" })

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleUser = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signUpUser(user)
            setOpen(true);
            setSeverity({ ...severity, message: "Signed Up Successfully", severity: "successs"});
            setTimeout(()=>{
                navigate("/signin");
            }, 1500)
        }catch(err){
            setOpen(true);
            setSeverity({ ...severity, message: "User Already Exist Please try with another email.", severity: "error"});
            console.log(err,"errmess")
        }
    }

    return (
        <div className={styles.signupContainer}>
            <Navbar />
            <div className={styles.root}>
                <Container component="main" maxWidth="xs">
                    <Paper className="paper" elevation={3}>
                        <Typography component="h1" variant="h5">
                            Sign Up
                        </Typography>
                        <form onSubmit={handleSubmit} className="form">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Username"
                                name='username'
                                className='inpField'
                                onChange={handleUser}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                className='inpField'
                                type="email"
                                name="email"
                                onChange={handleUser}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                className='inpField'
                                label="Password"
                                onChange={handleUser}
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end" className="passwordToggle">
                                            <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign Up
                            </Button>
                        </form>
                    </Paper>
                </Container>
            </div>
            <CustomizedSnackbars open={open} setOpen={setOpen} severity={severity}/>
        </div>
    );
};

export default SignupForm;
