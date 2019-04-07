import React from 'react';

class Evento extends React.Component {
    render() {
        return (
            <li key={this.props.id} className="conteudoPrincipal-dados-link eventos">
                <h2>{this.props.titulo}</h2>
                <p>{this.props.descricao}</p>
                <button>conectar</button>
            </li>
        );
    }
}

export default Evento;