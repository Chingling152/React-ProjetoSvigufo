import React from 'react';

import Cabecalho from '../Componentes/Cabeçalho';
import Rodape from '../Componentes/Rodape';

import "../Recursos/css/flexbox.css";
import "../Recursos/css/reset.css";
import "../Recursos/css/style.css";

class TiposEventos extends React.Component {
    render() {
        return (
            <div className="App">
                <Cabecalho/>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Tipos de Eventos</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Título</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo"></tbody>
                            </table>
                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Tipo de Evento
                            </h2>
                            <form id="form" method="POST">
                                <div className="container">
                                    <input type="text" id="nome-tipo-evento" placeholder="tipo do evento" />
                                    <button class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                        Cadastrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
                <Rodape/>
            </div>
        );
    }
}

export default TiposEventos;