/* eslint-disable no-useless-constructor */
import React from "react";
import login_ico from '../../Recursos/Imagens/icon-login.png';

class IconeLogin extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <img src={login_ico} alt="icone de login"/>
        );
    }
}

export default IconeLogin;