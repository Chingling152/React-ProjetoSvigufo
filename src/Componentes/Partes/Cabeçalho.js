import React from 'react';
import IconeLogin from '../Pequenos/IconeLogin';

class Cabecalho extends React.Component{
    render(){
        return(
            <div className="App">
                <header className="cabecalhoPrincipal">
                    <div className="container">
                        <IconeLogin/>
                        <nav className="cabecalhoPrincipal-nav">
                            <a href='/'>Home</a>
                            <a href='/eventos'>Eventos</a>
                            <a href='/'>Contato</a>
                            <a className="cabecalhoPrincipal-nav-login" href='/login'>Login</a>
                        </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Cabecalho;