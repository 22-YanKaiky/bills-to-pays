import { Avatar, Button, Grid, Paper } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import UsersAPI from '../../Services/UsersAPI';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 300,
    margin: '75px auto'
}

const avatarStyle = {
    backgroundColor: '#4fbf8a'
}

const buttonStyle = {
    margin: '2rem 0',
    backgroundColor: '#4fbf8a'
}

export default function Home() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function getUsers() {
            const response = await axios.get(UsersAPI);

            setUser(response.data)
        }

        getUsers();
    }, [user])

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <MonetizationOnIcon />
                    </Avatar>

                    <h2>Home</h2>
                </Grid>

                <Button component={Link}
                    to="/login"
                    type='submit'
                    style={buttonStyle}
                    fullWidth variant='contained'
                >
                    Login
                </Button>
            </Paper>
        </Grid>
    )
}
