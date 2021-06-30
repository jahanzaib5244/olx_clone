import React from 'react';
import './Login.css'
import UseLogin from './UseLogin';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

export default function Login() {

    const [setEmail,setPassword,doLoginUser] = UseLogin()
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '400px',
          },
        },
      }));
      
      
        const classes = useStyles();


    return (
        <div className='rootdiv'>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className='center' >
                <h1>LOG IN</h1>
                
                <div>  <TextField id="standard-basic" label="Email...."  onChange={(e)=> setEmail(e.target.value) } /></div>
                <div> <TextField id="standard-basic" type='password' label="password...." onChange={(e)=> setPassword(e.target.value) } /></div>
                <div><button onClick={doLoginUser} >Log In</button></div>
                <Link to="/singup">Sign Up</Link>

            
                
            </div>
           
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
