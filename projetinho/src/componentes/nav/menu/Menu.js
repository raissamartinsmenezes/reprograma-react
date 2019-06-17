import React from 'react'
import {Link} from 'react-router-dom'
import './menu.css'

// vamos mudar essa função para classe (componente de classe) pois ele vai mudar o estado para resposivo
export default class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            aberto: false,
        }
    }

    handleAbreOuFecha = e => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto}
        })
    }

    render() {
        // ele inicia com essas opções 
        let classeDasOpcoes = "navbar-menu__opcoes"
        let classeDoBotao = "navbar-menu__botao"
        // vamos modificar elas dentro do render()

        if(this.state.aberto) {
            classeDasOpcoes += ' navbar-menu__opcoes--aberto'
            classeDoBotao += ' navbar-menu__botao--aberto'
        }

        // react router > instalação para construção das rotas de páginas, pois o react não faz isso nativamente, você têm que instalar uma biblioteca externa
        return (
            <div className="navbar-links">
                <a class={classeDoBotao} onClick={this.handleAbreOuFecha}>Menu</a>
                <ul className={classeDasOpcoes}>
                    <li><Link to="/" className="navbar-links__ativo">Home</Link></li>
                    <li><Link to="/cadastro" className="navbar-links__ativo">Cadastro</Link></li>
                    <li><Link to="/chat" className="navbar-links__ativo">Chat</Link></li>
                </ul>
            </div>
        )
    }
    
}