import React,{ Component }from 'react';

import Cabecalho from '../Componentes/Partes/Cabeçalho';
import Rodape from '../Componentes/Partes/Rodape';
import Titulo from "../Componentes/Pequenos/Titulo.js";

import "../Recursos/css/flexbox.css";
import "../Recursos/css/reset.css";
import "../Recursos/css/style.css";
import SubTitulo from '../Componentes/Pequenos/SubTitulo';
import BotaoCadastro from '../Componentes/Pequenos/BotaoCadastro';

class Eventos extends Component {
    render() {
        return (
            <div id="App">
            <Cabecalho/>
            <main className="conteudoPrincipal">
                <section className="conteudoPrincipal-cadastro">
                <Titulo titulo="Eventos"/>
                    <div className="container" id="conteudoPrincipal-lista">

                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Evento</th>
                                    <th>Data</th>
                                    <th>Acesso Livre</th>
                                    <th>Tipo do Evento</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo"></tbody>
                        </table>

                    </div>

                    <div className="container" id="conteudoPrincipal-cadastro">
                        <SubTitulo titulo="Cadastrar evento"/>
                        <div className="container">

                            <input type="text" id="evento__titulo" placeholder="título do evento"/>
                                <input type="text" id="evento__data" placeholder="dd/MM/yyyy"/>
                                    <select id="option__acessolivre">
                                        <option value="1">Livre</option>
                                        <option value="0">Restrito</option>
                                    </select>
                                    <select id="option__tipoevento">
                                        <option value="0" disabled>Tipo do Evento</option>
                                    </select>
                                    <textarea rows="3" cols="50" placeholder="descrição do evento" id="evento__descricao"></textarea>
                                </div>
                            <BotaoCadastro titulo="Evento"/>
                    </div>
                </section>
            </main>
            <Rodape/>
        </div>
        
        );
    }
                
}

export default Eventos;