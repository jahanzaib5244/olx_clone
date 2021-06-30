import React from 'react';
import UseSignup from './UseSignup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export default function Signup() {
    const [setEmail,setPassword,doSignupUser] = UseSignup()
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
            <br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className='center' >
                <h1>Sign Up</h1>
                
                <div>  <TextField id="standard-basic" label="Email...."  onChange={(e)=> setEmail(e.target.value) } /></div>
                <div> <TextField id="standard-basic" type='password' label="password...." onChange={(e)=> setPassword(e.target.value) } /></div>
                <div><button onClick={doSignupUser} >Sign UP</button></div>
                
            </div>
           
           <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}
