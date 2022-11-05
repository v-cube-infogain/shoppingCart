import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateUserName, updatePassword, updateUserDetails } from "../../Redux/loginSlice";
import { loginService } from "../../Services/loginAPI";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.login);
    const [validationMsgs, setValidationMsg] = useState({ userNameMsg: "", passwordMsg: "" })

    const onLoginClick = () => {        
        if(validateForm()) {
            loginService(data).then(res => {
                dispatch(updateUserDetails(res?.data));
                navigate('/products')
            })
        }
    };

    const validateForm = () => {
        let isValid = true;
        const { userName, password } = data;
        const validations = {};

        if (!userName) {
            validations.userNameMsg = "User Name is Mandatory";
            isValid = false;
        }

        if (!password) {
           validations.passwordMsg = "Password is Mandatory";
           isValid = false;
        }

        setValidationMsg(validations);

        return isValid;
    }

    return (
        <Box
            sx={{
                width: 400,
                border: '1px solid #ccc',
                borderRadius: "8px",
                padding: "20px",
                marginLeft: "30%",
                marginTop: "10%"
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom align="center">
                        Login
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        size="small"
                        onChange={e => dispatch(updateUserName(e.target.value))}
                        error={Boolean(validationMsgs.userNameMsg)}
                        helperText={validationMsgs.userNameMsg}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        variant="outlined"
                        size="small"
                        onChange={e => dispatch(updatePassword(e.target.value))}
                        error={Boolean(validationMsgs.passwordMsg)}
                        helperText={validationMsgs.passwordMsg}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={onLoginClick}>Login</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" onClick={() => navigate('/registration')}>Create Account</Button>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Login;