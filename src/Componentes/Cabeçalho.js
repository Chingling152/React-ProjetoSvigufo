import React from 'react';
import login_ico from '../Recursos/Imagens/icon-login.png';

class Cabecalho extends React.Component{
    render(){
        return(
            <div className="App">
                <header className="cabecalhoPrincipal">
                    <div className="container">
                        <img src={login_ico} alt="icone de login"/>

                        <nav className="cabecalhoPrincipal-nav">
                            <a href='/'>Home</a>
                            <a href='/'>Eventos</a>
                            <a href='/eventos'>Contato</a>
                            <a className="cabecalhoPrincipal-nav-login" href='/login'>Login</a>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Cabecalho;