import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticate } from '../services/auth';
import googleLogin from '../services/googleLogin.js';


const PrivateRoute = function PrivateRoute({component: Component, ...rest}) {

    const [ isLoginDone, setLoginDone ] = useState(false);

    useEffect( () => {
	    const getTokenBeforeRender = async () => {
		    await googleLogin.storeToken();
		    setLoginDone(true);
	    }
	    getTokenBeforeRender();
    }, []);

    return(
     isLoginDone
     ?
     <Route { ...rest } render = {props => (
         isAuthenticate()
         ? 
         (<Component {...props}/>) 
         :
         (<Redirect to={{pathname: '/', state: {from:props.location}}}/>)
     )}/>
     :
     <></>
    );
 }


 export default PrivateRoute;
