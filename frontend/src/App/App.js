import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Games from '../Views/Games';
import Eletronicos from '../Views/Eletronicos';
import Celulares from '../Views/Celulares';
import Tv from '../Views/Tv';
import Newproduct from '../Views/Newproduct';
import Edit from '../Views/Edit';



import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="grey darken-2 hide-on-large-only">
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

                    <li>
                        <a className="waves-effect waves-light btn grey darken-1 white-text">
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
                        <Route path="/app/edit">
                            <Edit></Edit>
                        </Route>
                    </Switch>

                    <div className="fixed-action-btn">
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