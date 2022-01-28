import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TextField from '@mui/material/TextField';
import UsersAPI from '../../Services/UsersAPI';
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

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

const typographyStyle = {
    marginBottom: '8px',
}

const buttonStyle = {
    margin: '2rem 0',
    backgroundColor: '#4fbf8a'
}

export default function Login() {
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        async function getUsers() {
            const response = await axios.get(UsersAPI);

            setUser(response.data)
        } 

        getUsers();
    }, [user])

    const setInput = (event) => {
        const { name, value } = event.target;

        const login = {
            ...user,
            [name]: value
        }
        
        setUser(login)
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

                <TextField onChange={(e) => setInput(e)} value={user.name} label="Name" placeholder='Enter name' variant="outlined" fullWidth required style={inputStyle} />
                <TextField onChange={(e) => setInput(e)} value={user.last_name} label="Lastname" placeholder='Enter last name' variant="outlined" fullWidth required style={inputStyle} />

                <FormControlLabel
                    control={<Checkbox name='checkedB' color='primary' />}
                    label='remember me'
                    style={inputCheckStyle}
                />

                <Button type='submit' style={buttonStyle} fullWidth variant='contained'>Sign in</Button>

                <Typography style={typographyStyle}>
                    <Link href="#">
                        Forgot password?
                    </Link>
                </Typography>

                <Typography>
                    You haven't an account?
                    <Link to="/register">
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}
