import React, { Component, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Games from '../Views/Games';
import Eletronicos from '../Views/Eletronicos';
import Celulares from '../Views/Celulares';
import Tv from '../Views/Tv';
import Newproduct from '../Views/Newproduct';
import Edit from '../Views/Edit';
import googleLogin from '../services/googleLogin';

import './App.css';


class App extends Component {

    logOut() {
        googleLogin.logout()
	.then(() => {
	   window.location.reload();  
	})
    }

    render() {
        return (
            <>
                <header>
                    <nav className="grey darken-2 hide-on-large-only center">
                        <div className="nav-wrapper">
                            <a href="/app/" className="nav-logo">Loja do Sebastião</a>
                            <a data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                    </nav>
                </header>

                <ul id="slide-out" className="sidenav sidenav-fixed grey darken-2">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img style={{ filter: 'grayscale(40%)' }} src="/assets/img/sidenavimg.jpg" />
                            </div>
                            <h3 className="white-text texto-logo">Loja do Sebastião</h3>
                        </div>
                    </li>

                    <li><a className="subheader">Categorias</a></li>
                    <li><a href="/app/tv" className="white-text"><i className="material-icons white-text">tv</i>TV's</a></li>
                    <li><a href="/app/eletronicos" className="white-text"><i className="material-icons white-text">radio</i>Eletrodoméstico</a></li>
                    <li><a href="/app/games" className="white-text"><i className="material-icons white-text">games</i>Videogame</a></li>
                    <li><a href="/app/celulares" className="white-text"><i className="material-icons white-text">smartphone</i>Celulares</a></li>
                    <li><div className="divider"></div></li>
                    <li className="hide-on-med-and-down">
                        <a className="waves-effect waves-light btn grey darken-1 white-text" href="/app/newproduct">
                            <i className="material-icons white-text left">add_boxs</i>
                            Adicionar Produto
                        </a>
                    </li>
                    <li>
                        <a className="waves-effect waves-light btn grey darken-1 white-text" onClick={ this.logOut }>
                            <i className="material-icons white-text left">exit_to_app</i>
                            Log Out
                        </a>
                    </li>

                </ul>

                <main>

                    <Switch>
                        <Route path="/app/tv">
                            <Tv></Tv>
                        </Route>
                        <Route path="/app/eletronicos">
                            <Eletronicos></Eletronicos>
                        </Route>
                        <Route path="/app/games">
                            <Games></Games>
                        </Route>
                        <Route path="/app/celulares">
                            <Celulares></Celulares>
                        </Route>
                        <Route path="/app/newproduct">
                            <Newproduct></Newproduct>
                        </Route>
                        <Route path="/app/edit/:id" component={Edit} />
                    </Switch>

                    <div className="fixed-action-btn hide-on-large-only">
                        <a className="btn-floating tooltipped btn-large grey darken-4" data-position="left" data-tooltip="Adicione um novo produto" href="/app/newproduct">
                            <i className="large material-icons">add_circle</i>
                        </a>
                    </div>

                </main>

            </>
        );
    }
}

export default App;
