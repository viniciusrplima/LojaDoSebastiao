import React, { Component } from 'react';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={() => <h1>PAGINA PRINCIPAL</h1>} />
                    <PrivateRoute path= "/app" component={() => <h1>APLICAÇÃO</h1>} />
                    <Route component={() => <h1>PAGINA NOT FOUND</h1>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Routes;
