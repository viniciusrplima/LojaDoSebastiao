
import * as queryString from 'query-string';
import axios from 'axios';

const apiURL = 'https://api-loja-do-sebastiao.herokuapp.com';
const redirectURL = 'https://loja-do-sebastiao.herokuapp.com';

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
async function getToken() {
  const urlParams = queryString.parse(window.location.search);

  if (urlParams.error) {
      console.log(`An error occurred: ${urlParams.error}`);
  } else {
      console.log(`The code is: ${urlParams.code}`);
  }

  if(urlParams.code) {
      const token = await getAccessTokenFromCode(urlParams.code);
      localStorage.setItem('loja-do-sebastiao-token', token);
      axios.post(`${ apiURL }/auth`, { token })
      .catch( err => {
	console.log(err);
      } )
  } 
}

async function logout() {
  const token = localStorage.getItem('loja-do-sebastiao-token');
  localStorage.removeItem('loja-do-sebastiao-token');
  return axios.post(`${ apiURL }/logout`, { token });
}

export default {
    googleLoginURL, 
    getToken,
    logout
};
    
