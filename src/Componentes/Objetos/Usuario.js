import React from 'react';

class Usuario extends React.Component {
    render() {
        return (
            <tr key={this.props.id}>
                <th>{this.props.id}</th>
                <th>{this.props.nome}</th>
                <th>{this.props.email}</th>
                <th>{this.props.tipoUsuario}</th>
                <th>{this.props.UF}</th>
                <th><a href={"./alterar?" + this.props.id}>Alterar</a></th>
            </tr>
        );
    }
}

export default Usuario;