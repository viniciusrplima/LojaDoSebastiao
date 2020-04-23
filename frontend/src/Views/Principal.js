import React, { Component } from 'react';
import './styles/Principal.css';


class Principal extends Component {

    render() {
        return (
            <>
                <header>
                    <nav>
                        <div className="nav-wrapper grey darken-2">
                            <a href="#" className="brand-logo">Loja do Sebastião</a>
                        </div>
                    </nav>
                </header>
                <main style={{minHeight: '500px'}}>
                    <div className="parallax-container valign-wrapper">
                        <div className="section no-pad-bot" style={{ width: '100%' }}>
                            <div className="row">
                                <div className="col s12 m6">
                                    <div className="container">
                                        <h1 className="texto-principal white-text">CONTROLE SEU ESTOQUE!</h1>
                                        <h5 className="texto-abaixo  white-text">Sistema que tem com intuito de gerenciar eletrônicos por categorias para melhor representar sua loja.</h5>
                                    </div>
                                </div>
                                <div className="col s12 m6 hide-on-med-and-down">
                                    <div className="container red" style={{ height: '300px' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="parallax">
                            <img src="/assets/img/background2.jpg" style={{ opacity: '1', transform: 'translate3d(-50%, px, 1000px)', filter: 'grayscale(100%)' }} />
                        </div>
                    </div>
                    <div className="container hide-on-large-only show-on-small">
                        <div className="section red">
                            <div className="container" style={{ height: '300px' }}></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section">
                            <div className="row">
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center brown-text"><i className="material-icons large">flash_on</i></h2>
                                        <h5 className="center">Melhor performace</h5>
                                        <p className="light">Fizemos a maior parte do trabalho pesado para você fornecer um sistema que incorpora as melhores tecnologias do mercado. Além disso, refinamos animações e transições para proporcionar uma experiência mais suave aos desenvolvedores.</p>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center brown-text"><i className="material-icons large">group</i></h2>
                                        <h5 className="center">Interface amigavél</h5>

                                        <p className="light">
                                            Utilizando elementos e princípios do Material Design da Google, conseguindo assim criar uma estrutura que incorpora
                                            componentes que fornecem uma plataforma mais amigavél aos usuários. Além disso, o sistema é responsivo.
                                        </p>
                                    </div>
                                </div>

                                <div className="col s12 m4">
                                    <div className="icon-block">
                                        <h2 className="center brown-text"><i className="material-icons large">settings</i></h2>
                                        <h5 className="center">Fácil de manusear</h5>

                                        <p className="light">
                                            Fornecemos um sistema simples, mas que ao mesmo tempo é super intuitivo que 
                                            ajudar os novos usuários a começar. Também estamos sempre abertos a feedback 
                                            e podemos responder a quaisquer perguntas que um usuário possa ter sobre o 
                                            Sistema.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="parallax-container valign-wrapper">
                        <div className="section no-pad-bot">
                            <div className="container">
                                <div className="row center">
                                    <h4 className="header col s12 light white-text texto-abaixo">Sistema desenvolvido para seleção da codex, portanto imagens não contém direitos autorais</h4>
                                </div>
                            </div>
                        </div>
                        <div className="parallax">
                            <img src="assets/img/background.jpg" style={{ opacity: '1', transform: 'translate3d(-50%, 1000px)', filter: 'grayscale(100%)' }} />
                            </div>
                    </div>
                </main>
                <footer className="page-footer grey darken-2">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Loja do Sebastião</h5>
                                <p className="grey-text text-lighten-4">A loja de eletrônicos mais completa do país.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links Importantes</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Exemplo Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Exemplo Link 2</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2020 Copyright Text
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Principal;
