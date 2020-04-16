import React from 'react';
import { BrowserRouter, Route, Redirect, Link, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>

                <header>
                    <Link to="/">HOME |</Link>
                    <Link to="/page"> Page</Link>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" component={() => <h1>Hello World</h1>} />
                        <Route path="/page" component={() => <h1>Page 2</h1>} />
                    </Switch>
                </main>

                <footer>

                </footer>
            </BrowserRouter>

        </>
    );
}

export default App;