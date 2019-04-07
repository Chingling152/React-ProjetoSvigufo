import React from 'react';

import CabecalhoAdmin from '../Componentes/Partes/CabeçalhoAdmin';
import BotaoCadastro from '../Componentes/Pequenos/BotaoCadastro';
import Rodape from '../Componentes/Partes/Rodape';
class Usuarios extends React.Component {
    constructor(){
        super();
        this.state= {
            usuarios:[],
            usuario:[]
        }
    }
   

    render() {
        return (
            <div>
                <CabecalhoAdmin />
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Usuários</h1>
                        <div className="container" id="conteudoPrincipal-lista">

                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Permissão</th>
                                        <th>UF</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo"></tbody>

                            </table>

                            <div className="paginacao">
                                <a href="?">&laquo;</a>
                                <a href="?" class="active">1</a>
                                <a href="?">2</a>
                                <a href="?">3</a>
                                <a href="?">4</a>
                                <a href="?">5</a>
                                <a href="?">6</a>
                                <a href="?">&raquo;</a>
                            </div>

                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">Cadastrar Usuário</h2>
                            <div className="container">

                                <input type="text" placeholder="nome do usuário" />
                                <input type="text" placeholder="e-mail" />
                                <select>
                                    <option value="0" disabled>Permissão</option>
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                    <option value="COMUM">COMUM</option>
                                </select>
                                <input type="text" placeholder="data de nascimento" />
                                <input type="text" placeholder="logradouro" />
                                <input type="text" placeholder="cidade" />
                                <input type="text" placeholder="estado" />

                            </div>
                            <BotaoCadastro titulo="Usuario" />
                        </div>
                    </section>
                </main>
                <Rodape />
            </div>
        );
    }
}
export default Usuarios;