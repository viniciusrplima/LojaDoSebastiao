import React from 'react';
import "./styles/NotFound.css";


export default function NotFound() {

	return (
		<div id="NotFound">
            <div id="mensagemDeErro">
                <p>Página não encontrada</p>
                <p id="numErro">Error 404</p>
            </div>
            <div id="imagemDeErro"><img src="/assets/img/notFound.png" /></div>
        </div>
	);
}