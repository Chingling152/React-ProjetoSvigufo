import React from 'react';

import login_ico from '../Recursos/Imagens/icon-login.png';

import "../Recursos/css/login.css"
import "../Recursos/css/flexbox.css";
import "../Recursos/css/reset.css";
import "../Recursos/css/style.css";

class Login extends React.Component {
	render() {
		return (
			<div className="App">
				<section className="container flex">
					<div className="img__login">
						<div className="img__overlay"></div>
					</div>

					<div className="item__login">
						<div className="row">
							<div className="item">
								<img src={login_ico} alt="icone de login" className="icone__login" />
							</div>
							<div className="item" id="item__title">
								<p className="text__login" id="item__description">
									Bem-vindo! Faça login para acessar sua conta.
								</p>
							</div>
							<form>
								<div className="item">
									<input class="input__login" placeholder="username" type="text" name="username" id="login__email" />
								</div>
								<div className="item">
									<input class="input__login" placeholder="password" type="password" name="password"
										id="login__password" />
								</div>
								<div className="item">

									<button className="btn btn__login" id="btn__login">
										Login
									</button>
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Login;
