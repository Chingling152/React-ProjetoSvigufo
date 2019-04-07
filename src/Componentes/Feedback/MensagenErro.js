/* eslint-disable no-useless-constructor */
import React from 'react';

class MensagemErro extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        return(<p className="text__login" style={{ color : 'red',  textAlign : 'center' }}>{this.props.mensagemErro}</p>);
    };
}

export default MensagemErro;