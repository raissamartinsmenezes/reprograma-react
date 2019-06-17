import React from 'react';
// esse nome da Logo é você que escolhe, como uma variável
import Logo from '../../imagens/RocketChat.png'
import Menu from './menu/Menu'
import './nav.css'

// sempre temos que fechar as tags pois estamos lidando com JSX e não HTML
export default function Nav(props) {
    return(
        <nav className="navbar">
            <div>
                <img className="navbar-logo" src={Logo} alt="Logotipo da RocketChat"></img>
            </div>
            < Menu />
        </nav>
    )
}