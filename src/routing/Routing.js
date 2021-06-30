import React from 'react'
import Header from '../components/header/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from '../components/footer/Footer'
import Home from '../modules/home/Home';
import Login from '../auth/Login';
import Singup from '../singup/Singup';
import PrivateRouting from './PrivateRoute';
import { useSelector } from "react-redux";
import PublicRouting from './PublicRouting';
export default function Routing() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    return (
       <Router>
           <Header/>
           <Switch>
               <PrivateRouting exact path='/home' auth={authState}>
                   <Home/>
               </PrivateRouting>
               <PublicRouting exact path='/login' auth={authState}>
                   <Login/>
               </PublicRouting>
               <PublicRouting exact path='/singup' auth={authState}>
                   <Singup/>
               </PublicRouting>
              
           </Switch>
           <Footer/>
       </Router>
    )
}
