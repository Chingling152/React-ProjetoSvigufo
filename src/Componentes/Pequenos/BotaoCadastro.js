import React from 'react';

class BotaoCadastro extends React.Component{
    render(){
        return(
            <button className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">{"Cadastrar "+ this.props.titulo}</button>
        );
    }
}

export default BotaoCadastro;