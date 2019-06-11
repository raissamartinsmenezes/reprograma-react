import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; (tem que apagar pois o App.js e o App.test.js foram deletados)
import * as serviceWorker from './serviceWorker';

// deletamos o App.js e o App.test.js

let contadorNum = 0;

const nome = {
    primeiroNome: "Raissa",
    sobreNome: "Martins"
}

function nomeCompleto(nome){
    if(nome) {
        return nome.primeiroNome + ' ' + nome.sobreNome;
    } else {
        return 'desconhecida'
    }   
}

// dar um parâmetro genérico para poder reutilizar essa função
function contadorIniciado(contador){
    if(contador === 0) {
        return <p>Contador não iniciado</p>
    } else {
        return <p>Contador iniciado</p>
    }
}

// const template = 
//                     <div className="contador">
//                         <h1>Count: {contadorNum}</h1>
//                         <h2>Oi, {nome.primeiroNome}</h2>
//                         <h3>Olá, {nomeCompleto(null)}</h3>
//                         <div>
//                             <button>+1</button>
//                             <button>-1</button>
//                             <button>reset</button>
//                         </div>
//                     </div>

// ReactDOM.render(template, document.getElementById('root'));

// repete em um intervalo de tempo 
setInterval(function(){
    console.log(contadorNum)
    // no template sempre só pode existir uma div mãe que abraça quanto filhos forem necessários
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
                        {contadorIniciado(contadorNum)}
                    </div>
contadorNum++                    
ReactDOM.render(template, document.getElementById('root'));
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
