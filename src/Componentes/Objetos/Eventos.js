import React from 'react';

import Evento from './Evento.js';

class Eventos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            eventos: []
        }

        this.buscarEventos(this);
    }

    buscarEventos(event){
        for (let i = 0; i < this.props.quantEventos; i++) {
            this.state.eventos.push(
                {
                    id: i,
                    titulo:"Evento",
                    descricao:"Breve descrição sobre o evento. Lorem ipsum lorem ipsum lorem ipsum."
                }
            );     
        }
        /*
        fetch("http://localhost:3000/api/eventos")
        .then(resp => resp.json())
        .then(data => this.setState({eventos:data}))
        .catch(erro => console.log(erro));*/
    }
    render() {
        return (
            <ul className="conteudoPrincipal-dados">
                {
                    this.state.eventos.map(i=>{
                        return(
                            <Evento id={i.id} titulo={i.titulo} descricao={i.descricao}/>
                        )
                    })
                }

            </ul>
        );
    }
}

export default Eventos;