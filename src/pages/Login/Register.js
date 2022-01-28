import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import React from "react";

const paperStyle = {
    padding: 20,
    height: '80vh',
    width: 300,
    margin: '20px auto'
}

const avatarStyle = {
    backgroundColor: '#4fbf8a'
}

const inputStyle = {
    marginTop: '1.5rem'
}

const buttonStyle = {
    margin: '2rem 0',
    backgroundColor: '#4fbf8a'
}

export default function Register() {
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <MonetizationOnIcon />
                    </Avatar>

                    <h2>Sign Up</h2>
                </Grid>

                <TextField label="Name" placeholder='Enter username' variant="outlined" fullWidth required style={inputStyle} />
                <TextField label="Last name" placeholder='Enter username' variant="outlined" fullWidth required style={inputStyle} />
                <TextField label="CPF/CNPJ" placeholder='Enter username' variant="outlined" fullWidth required style={inputStyle} />
                <TextField label="Password" placeholder='Enter password' type='password' variant="outlined" fullWidth required style={inputStyle} />

                <Button type='submit' style={buttonStyle} fullWidth variant='contained'>Sign in</Button>

                <Typography>
                    You haven an account?
                    <Link to="/">
                        Sign in
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
