import React from 'react';
import "./styles/error.css";

export default function AccessDenied() {

	return (
		<div id="AccessDenied">
            <div id="mensagemDeErro">
                <p>Acesso negado</p>
                <p id="numErro">Error 403</p>
            </div>
            <div id="imagemDeErro"><img src="/assets/img/accessDenied.png" /></div>
        </div>
	);
}
