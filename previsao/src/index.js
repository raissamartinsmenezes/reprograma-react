import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import Titulo from './Titulo.js';

const previsao01 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
        max: '31°C',
        min: '20°C',
    }
}

const previsao02 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
        max: '25°C',
        min: '18°C',
    }
}


// se é componente funcional não precisa do this.props > apenas para elementos de classe 
// const Titulo = (props) => {
//     return(
//         <div>
//             <h1 className="previsao__data">{props.data}</h1>
//             <p className="previsao__resumo">{props.resumo}</p>
//         </div>
//     )
// }

const Imagem = (props) => {
    return(
        <img className="previsao__img" src={props.imagem}></img>
    )
}

const Temperatura = (props) => {
    return(
        <div>
            <table className="previsao-temperatura">
                <tr className="previsao-temperatura__linha">
                    <th>Máxima</th>
                    <td>{props.temperatura.max}</td>
                </tr>
                <tr className="previsao-temperatura__linha">
                    <th>Mínima</th>
                    <td>{props.temperatura.min}</td>
                </tr>
            </table>
        </div>
    )
}

// quando eu quero mudar alguma coisa do meu objeto, ou ele têm um ação eu utilizo uma componente de classe, mutável 

// um componente funcional só renderiza um JSX, estático

class Previsao extends React.Component {
    render(){
        return(
                <div className="previsao">
                    < Titulo // componente funcional (dentro de uma função)
                        data={this.props.data}
                        resumo={this.props.resumo}
                    />
                    < Imagem 
                        imagem={this.props.imagem}
                    />
                    < Temperatura 
                        temperatura={this.props.temperatura}
                    />
                </div>
        )
    }
}

// class Previsao extends React.Component {
//     render(){
//         return(
//                 <div className="previsao">
//                     < Titulo // componente funcional (dentro de uma função)
//                         data={this.props.data}
//                         resumo={this.props.resumo}
//                     />
//                     <img className="previsao__img" src={this.props.imagem}></img>
//                     <table className="previsao-temperatura">
//                         <tr className="previsao-temperatura__linha">
//                             <th>Máxima</th>
//                             <td>{this.props.temperatura.max}</td>
//                         </tr>
//                         <tr className="previsao-temperatura__linha">
//                             <th>Mínima</th>
//                             <td>{this.props.temperatura.min}</td>
//                         </tr>
//                     </table>
//                 </div>
//         )
//     }
// }


class Container extends React.Component {
    render(){
        return(
            <div className="previsao-container">
                < Previsao 
                    data={previsao01.data} // enviado para o props para o componente previsão
                    resumo={previsao01.resumo}
                    imagem={previsao01.imagem}
                    temperatura={previsao01.temperatura}
                />
                < Previsao 
                    data={previsao02.data}
                    resumo={previsao02.resumo}
                    imagem={previsao02.imagem}
                    temperatura={previsao02.temperatura}
                />
            </div>
        )
    }
}

ReactDOM.render(< Container />, document.getElementById('root'));

// PRIMEIRA RESOLUÇÃO

// const previsao01 = {
//     data: '31/05/2019',
//     resumo: 'Ensolarado',
//     imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
//     temperatura: {
//         max: '31°C',
//         min: '20°C',
//     }
// }

// const previsao02 = {
//     data: '01/06/2019',
//     resumo: 'Nublado',
//     imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
//     temperatura: {
//         max: '25°C',
//         min: '18°C',
//     }
// }

// class CardPrevisao extends React.Component {
//     render() {
//         return (
//             <div className="previsao-container">
//                 <div className="previsao">
//                     <h1 className="previsao__data">{previsao01.data}</h1>
//                     <p className="previsao__resumo">{previsao01.resumo}</p>
//                     <img className="previsao__img" src={previsao01.imagem}></img>
//                     <table className="previsao-temperatura">
//                         <tr className="previsao-temperatura__linha">
//                             <th>Máxima</th>
//                             <td>{previsao01.temperatura.max}</td>
//                         </tr>
//                         <tr className="previsao-temperatura__linha">
//                             <th>Mínima</th>
//                             <td>{previsao01.temperatura.min}</td>
//                         </tr>
//                     </table>
//                 </div>
//                 <div className="previsao">
//                     <h1 className="previsao__data">{previsao02.data}</h1>
//                     <p className="previsao__resumo">{previsao02.resumo}</p>
//                     <img className="previsao__img" src={previsao02.imagem}></img>
//                     <table className="previsao-temperatura">
//                         <tr className="previsao-temperatura__linha">
//                             <th>Máxima</th>
//                             <td>{previsao02.temperatura.max}</td>
//                         </tr>
//                         <tr className="previsao-temperatura__linha">
//                             <th>Mínima</th>
//                             <td>{previsao02.temperatura.min}</td>
//                         </tr>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(< CardPrevisao />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
