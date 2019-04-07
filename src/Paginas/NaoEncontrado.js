import React from "react";
import "../Recursos/css/nao-encontrado.css";

class NaoEncontrado extends React.Component {
    render() {
        return (
        <div className="main comic" id="background">
            <h1>Pagina não encontrada</h1>
            <div>
                <p> A pagina que você tentou acessar não existe</p>
            </div>
        </div>
        );
    }
}

export default NaoEncontrado;