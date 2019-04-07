import React from 'react';

import Cabecalho from '../Componentes/Partes/Cabeçalho.js';
import Eventos from '../Componentes/Objetos/Eventos.js';
import Rodape from '../Componentes/Partes/Rodape.js';

class Home extends React.Component {

    render() {
        return (
            <div className="App">
                <Cabecalho/>

                <section className="conteudoImagem">
                    <div>
                        <h1>Svigufo</h1>
                        <h2>Área de eventos da Escola SENAI de Informática.</h2>
                    </div>
                </section>

                <main className="conteudoPrincipal">
                    <section id="conteudoPrincipal-eventos">
                        <h1 id="conteudoPrincipal-eventos-titulo">Próximos Eventos</h1>
                        <div className="container">
                            <nav>
                                <Eventos quantEventos={4}/>
                            </nav>
                        </div>
                    </section>

                    <section id="conteudoPrincipal-visao">
                        <h1 id="conteudoPrincipal-visao-titulo">Por Quê Participar?</h1>
                        <div className="container">
                            <p className="visao-texto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Nullam auctor suscipit eros sed blandit. <br />
                                Fusce euismod neque sed dapibus sollicitudin. <br />Duis vel lacus
                                vestibulum, molestie dui eu, bibendum nunc.
					        </p>
                        </div>
                    </section>

                    <section id="conteudoPrincipal-contato">
                        <h1 id="conteudoPrincipal-contato-titulo">Contato</h1>
                        <div className="container conteudo-contato-titulo">
                            <div className="contato-mapa conteudo-contato-mapa"></div>
                            <div className="contato-endereco conteudo-contato-endereco">
                                Alameda Barão de Limeira, 539 <br />
                                São Paulo - SP
					        </div>
                        </div>
                    </section>
                </main>
                
                <Rodape/>
            </div>
        );
    }
}

export default Home;