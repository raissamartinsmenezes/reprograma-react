import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class EscondeAparece extends React.Component {
    constructor(props){ 
        super(props); 
        this.state = {  
            toggle: true
        }
    }

    change = () => { 

        // if(this.state.toggle === true) {
        //     this.setState(() => {
        //         return {
        //             toggle: false
        //         }
        //     })
        // } else {
        //     this.setState(() => {
        //         return {
        //             toggle: true
        //         }
        //     })
        // }

        this.setState((previousState) => {
            return {
                toggle: !previousState.toggle
            }
        }) 
    }

    render() { // nem todo componente de classe precisa do constructor, mas é obrigatório ter o render()
        return (
            <div>
                <h1>Esconde-Aparece</h1>
                <div>
                    <button onClick={this.change}>{this.state.toggle ? 'Mostrar detalhes' : 'Esconder detalhes'}</button>
                    <p>{this.state.toggle !== true ? 'Maravilhosas!':''}</p>
                </div>
            </div>
        )
    }
}

ReactDOM.render(< EscondeAparece />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
