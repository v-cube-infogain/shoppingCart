import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { updateFirstName, updateLastName, updatePhone, updateEmail, updateGender, updatePassword } from '../../Redux/registartionSlice';
import { registrationService } from '../../Services/registrationAPI';

const Registration = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = useSelector(state => state.registration);
    console.log("data", data)

    const onRegistrationClick = () => {
        registrationService(data);
    };

    return (
        <Box
            sx={{
                width: 500,
                height: 300,
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
                        Registartion
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="First Name" variant="outlined" size="small" onChange={e => dispatch(updateFirstName(e.target.value))} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Last Name" variant="outlined" size="small" onChange={e => dispatch(updateLastName(e.target.value))} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth label="Email" variant="outlined" size="small" onChange={e => dispatch(updateEmail(e.target.value))} />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="number" label="Phone" variant="outlined" size="small" onChange={e => dispatch(updatePhone(e.target.value))} />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={e => dispatch(updateGender(e.target.value))}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth type="password" label="Password" variant="outlined" size="small" onChange={e => dispatch(updatePassword(e.target.value))} />
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" onClick={onRegistrationClick}>Registartion</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" onClick={() => navigate('/login')}>Back to Login</Button>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Registration;