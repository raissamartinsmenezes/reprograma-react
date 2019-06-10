import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; (tem que apagar pois o App.js e o App.test.js foram deletados)
import * as serviceWorker from './serviceWorker';

// deletamos o App.js e o App.test.js

let contadorNum = 0;

const nome = {
    primeiroNome: "Jessica",
    sobreNome: "Lopes"
}

function nomeCompleto(nome){
    if(nome) {
        return nome.primeiroNome + ' ' + nome.sobreNome;
    } else {
        return 'desconhecida'
    }
    
}

const template = 
                    <div className="contador">
                        <h1>Count: {contadorNum}</h1>
                        <h2>Oi, {nome.primeiroNome}</h2>
                        <h3>Olá, {nomeCompleto(null)}</h3>
                        <div>
                            <button>+1</button>
                            <button>-1</button>
                            <button>reset</button>
                        </div>
                    </div>

ReactDOM.render(template, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
