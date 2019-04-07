import React from 'react';
import IconeLogin from '../Pequenos/IconeLogin';
class CabecalhoAdmin extends React.Component {
    render() {
        return (
            <header className="cabecalhoPrincipal">
                <div className="container">
                   <IconeLogin/>
                    <nav className="cabecalhoPrincipal-nav">Administrador</nav>
                </div>
            </header>);
    }
}
export default CabecalhoAdmin;