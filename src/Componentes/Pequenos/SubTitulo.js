import React from 'react';

class SubTitulo extends React.Component{
    render(){
        return(
            <h2 className="conteudoPrincipal-cadastro-titulo">
              {this.props.titulo}
            </h2>
        );
    }
}

export default SubTitulo;