import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import gato01 from './assets/gatos01.jpg';
import gato02 from './assets/gatos02.jpg';
import * as serviceWorker from './serviceWorker';

class CardGatinho extends React.Component {
    render(){
        return (
            <div className="comentario">
                <img className="comentario__perfil" src={this.props.imagem}/>
                <div>
                    <h1 className="comentario__nome">{this.props.nome}</h1>
                    <h2 className="comentario__subtitulo">{this.props.descricao}</h2>
                    <hr/>
                    <p>{this.props.comentario}</p>
                </div>
            </div>
        ) 
    }
}

// function CardGatinho(props) {
//     return (
//         <div className="comentario">
//             <img className="comentario__perfil" src={props.imagem}/>
//             <div>
//                 <h1 className="comentario__nome">{props.nome}</h1>
//                 <h2 className="comentario__subtitulo">{props.descricao}</h2>
//                 <hr/>
//                 <p>{props.comentario}</p>
//             </div>
//         </div>
//     )
// }


class BoxGatinho extends React.Component {
    render(){
        return (
            <div>
            < CardGatinho
            nome="Mellina"
            descricao="GATINHA UM POUCO CHATA"
            comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  
            imagem={gato01}
            />    
            < CardGatinho
            nome="Nina"
            descricao="MUITO FOFÍNEA ESSA GATÍNEA"
            comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            imagem={gato02} 
            />  
            </div>
        )
    } 
}


// function BoxGatinho() {
//     return (
//         <div>
//         < CardGatinho
//         nome="Mellina"
//         descricao="GATINHA UM POUCO CHATA"
//         comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  
//         imagem={gato01}
//         />    
//         < CardGatinho
//         nome="Nina"
//         descricao="MUITO FOFÍNEA ESSA GATÍNEA"
//         comentario="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
//         imagem={gato02} 
//         />  
//         </div>
//     )
// }


ReactDOM.render(< BoxGatinho />, document.getElementById('root'));
// ReactDOM.render(< BoxGatinho />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
