import React from "react";

class Dashboard extends React.Component {
    render() {
        return (
            <nav>
                <ul class="conteudoPrincipal-dados">
                    <li class="conteudoPrincipal-dados-link">
                        <h2 class="conteudoPrincipal-dados-titulo titulo-azul">
                            Usuários
                        </h2>
                        <i class="fa fa-2x fa-user-o conteudoPrincipal-icone-azul" aria-hidden="true"></i>
                        <span class="conteudoPrincipal-icone-span" id="qtdUsuarios">10</span>
                    </li>
                    <li class="conteudoPrincipal-dados-link">
                        <h2 class="conteudoPrincipal-dados-titulo titulo-verde">
                            Eventos Públicos
                        </h2>
                        <i class="fa fa-2x fa-user-o conteudoPrincipal-icone-verde" aria-hidden="true"></i>
                        <span class="conteudoPrincipal-icone-span" id="qtdEventosPublicos">5</span>
                    </li>
                    <li class="conteudoPrincipal-dados-link">
                        <h2 class="conteudoPrincipal-dados-titulo titulo-roxo">
                            Eventos Privados
                        </h2>
                        <i class="fa fa-2x fa-user-o conteudoPrincipal-icone-roxo" aria-hidden="true"></i>
                        <span class="conteudoPrincipal-icone-span" id="qtdEventosPrivados">20</span>
                    </li>
                    <li class="conteudoPrincipal-dados-link">
                        <h2 class="conteudoPrincipal-dados-titulo titulo-vermelho">
                            Tipos de Eventos
                        </h2>
                        <i class="fa fa-2x fa-user-o conteudoPrincipal-icone-vermelho" aria-hidden="true"></i>
                        <span class="conteudoPrincipal-icone-span" id="qtdTiposEventos">10</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Dashboard;