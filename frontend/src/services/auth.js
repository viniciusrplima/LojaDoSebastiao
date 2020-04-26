import googleLogin from '../services/googleLogin.js';

export const isAuthenticate = () => {
    const token = googleLogin.getStoredToken();
    console.log( token );
    if( token ) return true;
    else return false;
};
