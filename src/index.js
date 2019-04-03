import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from './Paginas/PaginaInicial';
import TiposEventos from './Paginas/TiposEventos';
import Login from './Paginas/Login';
import Eventos from './Paginas/Eventos';

const Rotas = (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tiposeventos" component={TiposEventos} />
          <Route path="/login" component={Login} />
          <Route path="/eventos" component={Eventos} />
        </Switch>
    </BrowserRouter>
  );

ReactDOM.render(<Rotas />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
