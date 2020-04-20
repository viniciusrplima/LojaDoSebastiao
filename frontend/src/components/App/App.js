import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './style.css';

class App extends Component {
    render() {
        return (
            <>
                <nav className="hide-on-large-only grey darken-2">
                    <div className="nav-wrapper">
                        <a href="#" class="brand-logo">
                            <h5 className="white-text texto-logo">Loja do Sebastião</h5>
                            </a>
                        <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav sidenav-fixed grey darken-2">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img style={{ filter: 'grayscale(40%)' }} src="/assets/img/sidenavimg.jpg" />
                            </div>
                            <h3 className="white-text texto-logo ">Loja do Sebastião</h3>
                        </div>
                    </li>
    
                    <li><a className="subheader">Categorias</a></li>
                    <li><a href="/app/tv" className="white-text"><i className="material-icons white-text">tv</i>TV's</a></li>
                    <li><a href="/app/eletronicos" className="white-text"><i className="material-icons white-text">radio</i>Eletrodoméstico</a></li>
                    <li><a href="/app/games" className="white-text"><i className="material-icons white-text">games</i>Videogame</a></li>
                    <li><a href="/app/celulares" className="white-text"><i className="material-icons white-text">smartphone</i>Celulares</a></li>
                    <li><div className="divider"></div></li>
                    <li><a className="subheader">Ações</a></li>
    
                    <div className="row">
                        <div className="col s12 m12 botão">
                            <a class="waves-effect waves-light btn  grey darken-1"><i class="material-icons left">add_box</i>Adicionar Produto</a>
                        </div>
                        <div className="container col s12 m12 botão">
                            <a class="waves-effect waves-light btn  grey darken-1"><i class="material-icons left">exit_to_app</i>Log Out</a>
                        </div>
                    </div>
                </ul>
    
                <aside style={{ minHeight: '500px' }}>

                    <Switch>
                        <Route path="/app/tv" component={() => <h1 style={{marginLeft:'400px'}}>TV</h1>}></Route>
                        <Route path="/app/eletronicos" component={() => <h1 style={{marginLeft:'400px'}}>ELETRO</h1>}></Route>
                        <Route path="/app/games" component={() => <h1 style={{marginLeft:'400px'}}>GAME</h1>}></Route>
                        <Route path="/app/celulares" component={() => <h1 style={{marginLeft:'400px'}}>FONE</h1>}></Route>
                    </Switch>               
    
                </aside>    
            </>
        );
    }
} 

export default App;