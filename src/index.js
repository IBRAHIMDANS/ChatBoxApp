import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Connexion from './components/Connexion';
import Error404 from './components/404'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Connexion} />
            <Route  path='/pseudo/:pseudo' component={App} />
            <Route   component={Error404} />
        </Switch>
    </BrowserRouter>
)
ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
