const axios = require('axios');

// Em uma melhor implementação, jogar isso pro banco
const users = [
	"vinicius.rodrigues.lima@ccc.ufcg.edu.br", 
	"fernando.silva@ccc.ufcg.edu.br", 
	"mraes.mariana@gmail.com"
];

let tokens = [];

async function verifyToken(token) {
	const { data } = await axios.post(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${ token }`)
	if(data.email_verified) {
		return users.includes( data.email );
	}
	return false;
}

// Controller methods
async function authentication(req, res) {
	const { token } = req.body;
	const verified = await verifyToken(token);
	
	if( verified ) {
		tokens.push( token );
		res.send({ accessPermission: true });
	}
	else {
		res.send({ accessPermission: false });
	}
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

	console.log(tokens);

	res.send('OK');
}

module.exports = {
	authentication, 
	accessVerify,
	logout
}
