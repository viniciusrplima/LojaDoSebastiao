import React, { Component } from 'react';
import PrivateRoute from './PrivateRoute';
import Principal from '../Views/Principal';
import App from '../App/App';
import AccessDenied from '../components/AccessDenied.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Principal></Principal>
                    </Route>
		    <Route path="/accessdenied" component={ AccessDenied } />
                    <PrivateRoute path="/app" component={() => <App></App>} />
                    <Route component={() => <h1>PAGINA NOT FOUND</h1>} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default Routes;
