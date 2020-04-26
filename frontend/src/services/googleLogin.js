
import * as queryString from 'query-string';
import axios from 'axios';

const apiURL = 'http://localhost:5050';
const redirectURL = 'http://localhost:3000';
const storedTokenName = 'loja-do-sebastiao-token';

const stringifiedParams = queryString.stringify({
  client_id: '780399092682-lsjkeo6d5m5eeicumjj0el8vrvrunult.apps.googleusercontent.com',
  redirect_uri: `${ redirectURL }/app`,
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ].join(' '), // space seperated string
  response_type: 'code',
  access_type: 'offline',
  prompt: 'consent',
});

const googleLoginURL = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;

// Requisita o token ao google
async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: '780399092682-lsjkeo6d5m5eeicumjj0el8vrvrunult.apps.googleusercontent.com',
      client_secret: '42A3ebaXl2o1fuN0E5MUccYs',
      redirect_uri: `${ redirectURL }/app`,
      grant_type: 'authorization_code',
      code,
    },
  });
  console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
};

// Retira o código vindo como query param
// Gera o token
// Verifica se o token é válido
// Se for, salva o token
async function storeToken() {
  const urlParams = queryString.parse(window.location.search);

  if (urlParams.error) {
      console.log(`An error occurred: ${urlParams.error}`);
  } else {
      console.log(`The code is: ${urlParams.code}`);
  }

  if(urlParams.code) {
      const token = await getAccessTokenFromCode(urlParams.code);
      const { data } = await axios.post(`${ apiURL }/auth`, { token })
      if(data.accessPermission) {
          localStorage.setItem( storedTokenName, token );
      }	 
  }
}

async function logout() {
  const storedToken = localStorage.getItem( storedTokenName );
  if( storedToken ) {
    localStorage.removeItem( storedTokenName );
    return axios.post(`${ apiURL }/logout`, { storedToken });
  }
}

function getStoredToken() {
	return localStorage.getItem(storedTokenName);
}

export default {
    googleLoginURL, 
    storeToken,
    logout,
    getStoredToken,
};
    
