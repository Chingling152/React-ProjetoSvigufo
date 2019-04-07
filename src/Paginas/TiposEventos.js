import React from 'react';

import Cabecalho from '../Componentes/Partes/Cabeçalho';
import Titulo from '../Componentes/Pequenos/Titulo';
import Rodape from '../Componentes/Partes/Rodape';
import BotaoCadastro from '../Componentes/Pequenos/BotaoCadastro';
import SubTitulo from '../Componentes/Pequenos/SubTitulo';

class TiposEventos extends React.Component {
    render() {
        return (
            <div className="App">
                <Cabecalho/>
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <Titulo titulo="Tipos de Evento"/>
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
                            <SubTitulo titulo="Cadastrar Tipo de Evento"/>
                            <form id="form" method="POST">
                                <div className="container">
                                    <input type="text" id="nome-tipo-evento" placeholder="tipo do evento" />
                                    <BotaoCadastro titulo="Tipo de Evento"/>
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