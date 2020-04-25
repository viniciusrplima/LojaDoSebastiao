const axios = require('axios');

// Em uma melhor implementação, jogar isso pro banco
const users = [
	"vinicius.rodrigues.lima@ccc.ufcg.edu.br", 
	"fernando.silva@ccc.ufcg.edu.br", 
	"mraes.mariana@gmail.com"
];

let tokens = [];

function verifyToken(token) {
	axios.post(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${ token }`)
	.then( ({ data }) => {
		if(data.email_verified) {
			if(users.includes(data.email)) {
				console.log('access permited');
				tokens.push( token );
			}
			else {
				console.log('access denied');
			}
		}
	})
	.catch( err => {
		console.log(err);
	} )
}

// Controller methods
function authentication(req, res) {
	const { token } = req.body;
	verifyToken(token);
	console.log('token verified');
	res.send('OK');
}

function accessVerify(req, res, next) {
	const token = req.query.token;
	
	if( tokens.includes( token ) ) {
		next();
	}
	else{
		console.log('database access denied!');
		next('Access denied!');
	}
}

function logout(req, res) {
	const token = req.body.token;
	const index = tokens.indexOf( token );

	if( index >= 0 ) {
		tokens[ index ] = tokens[ tokens.length-1 ];
		tokens.pop();
	}

	res.send('OK');
}

module.exports = {
	authentication, 
	accessVerify,
	logout
}
