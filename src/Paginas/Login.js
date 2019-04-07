import React from 'react';
import Axios from 'axios';

import login_ico from '../Recursos/Imagens/icon-login.png';

import "../Recursos/css/login.css"

import MensagemErro from '../Componentes/Feedback/MensagenErro';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email : '',
            senha : '',
			erroMensagem : '',
        }
        
    }

    atualizaEstadoEmail(event){
        this.setState({ email : event.target.value});
    }

    atualizaEstadoSenha(event){
        this.setState({ senha : event.target.value});
    }

    efetuaLogin(event){
        event.preventDefault();
        
        // alert(this.state.email + " - " + this.state.senha);

        Axios.post("http://localhost:5000/api/usuario/login", {
           email : this.state.email,
           senha: this.state.senha
        })
        .then(data => {
            if(data.status === 200){
                console.log(data);
                localStorage.setItem("usuario-svigufo", data.data.token);
                this.props.history.push("/principal");
            } 
        })
        .catch(erro => {
            this.setState({ erroMensagem : erro});
        })
    }

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
							<form onSubmit={this.efetuaLogin.bind(this)}>
								<div className="item">
									<input class="input__login" placeholder="username" type="text" name="username" id="login__email"/>
								</div>
								<div className="item">
									<input class="input__login" placeholder="password" type="password" name="password" id="login__password" />
									<MensagemErro MensagemErro={this.state.erroMensagem}/>
								</div>
								<div className="item">
									<input type = "submit" className="btn btn__login" id="btn__login" value="Login"/>
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
