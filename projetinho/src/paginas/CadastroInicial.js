import React from 'react';
import Astronauta from '../imagens/astronaut.png'
import Globo from '../imagens/globe.png'

export default function CadastroInicial(props) {
    return(
        <div className="pagina">
            <h1>Escolha qual o tipo de cadastro:</h1>
            <div className="pagina__botao">
                <button className="botao-icone">
                    <img className="botao-imagem" src={Astronauta} alt="Ícone de astronauta"></img>
                    <span>Pessoa Física</span>
                </button>
                <button className="botao-icone">
                    <img className="botao-imagem" src={Globo} alt="Ícone do globo"></img>
                    <span>Pessoa Física</span>
                </button>
            </div>
        </div>
    )
}