import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Checkbox, Paper, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';


const Login=()=> { 
     const avatarStyle={ backgroundColor: "green"}
    const TextField={
    const btnstyle= { margin: '8px 0'}
    
    }

    const paperstyle={
        padding:"20px",
        height:'70vh',
        width: 280,
        margin:'20px auto'
    }
  return(
    <Grid align="center">
            <Paper Elevation={10}style={paperstyle}>
                <Avatar style={avatarStyle}> <LockIcon></LockIcon></Avatar>
           <h2>Sign In</h2>
            
            <TextField label='Username' placeholder='Enter Username' margin="dense" fullWidth required></TextField>
            <TextField label='Password' placeholder='Enter Password' margin="dense" type='password' fullWidth required></TextField>
            <FormControlLabel
                control={
                    <Checkbox
                    name='Checked'
                    color='primary'
                    />}
                    label='remember me'
                    />

                    <Button type='submit' color='primary' variant='contained' fullWidth style={btnstyle}>Sign In</Button>
                    <Typography>
                        <Link href="#"></Link>
                    </Typography>
            </Paper>
        </Grid>
        
    )
}

export default Login;