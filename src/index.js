import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter, Switch ,Redirect} from "react-router-dom";

import "./Recursos/css/flexbox.css";
import "./Recursos/css/reset.css";
import "./Recursos/css/style.css";
import './index.css';

import Home from './Paginas/Home';
import TiposEventos from './Paginas/TiposEventos';
import Login from './Paginas/Login';
import Eventos from './Paginas/Eventos';
import Dashboard from './Paginas/Dashboard';
import NaoEncontrado from './Paginas/NaoEncontrado';

import {usuarioAutenticado} from "./services/auth";
import Usuarios from './Paginas/Usuarios';

const Permissao = ( {component : Component} ) => (
	<Route
	  render = {props => usuarioAutenticado() ? 
		(<Component {...props} /> ) : 
		(<Redirect to={{ pathname : "/login" }} />) 
	  }
	/>
  );

const Rotas = (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Permissao path="/tiposeventos" component={TiposEventos} />
				<Route path="/login" component={Login} />
				<Route path= "/principal" component={Dashboard}/>
				<Permissao path="/eventos" component={Eventos} />
				<Permissao path="/usuarios" component={Usuarios}/>
				<Route component={NaoEncontrado}/>
			</Switch>
		</div>
	</BrowserRouter>
);

ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
