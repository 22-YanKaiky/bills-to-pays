import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import React from "react";

export default function Login() {
    const paperStyle = {
        padding: 20,
        height: '70vh',
        width: 300,
        margin: '20px auto'
    }
    
    const avatarStyle = {
        backgroundColor: '#4fbf8a'
    }

    const inputStyle = {
        marginTop: '1.5rem'
    }

    const inputCheckStyle = {
        marginTop: '0.5rem'
    }

    const buttonStyle = {
        color: '#fff',
        marginTop: '2rem',
        backgroundColor: '#4fbf8a'
    }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <MonetizationOnIcon />
                    </Avatar>

                    <h2>Sign in</h2>
                </Grid>

                <TextField label="Username" placeholder='Enter username' variant="outlined" fullWidth required style={inputStyle}/>
                <TextField label="Password" placeholder='Enter password' type='password' variant="outlined" fullWidth required style={inputStyle}/>

                <FormControlLabel
                    control={<Checkbox name='checkedB' color='primary' />}
                    label='remember me'
                    style={inputCheckStyle}
                />

                <Button type='submit' style={buttonStyle} fullWidth variant='contained'>Sign in</Button>
            </Paper>
        </Grid>
    )
}
