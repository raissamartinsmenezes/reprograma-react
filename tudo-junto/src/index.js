import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Previsao from './componentes/previsao/Previsao.js'
import TamanhoFonte from './componentes/fonte/TamanhoFonte.js'
import Comentario from './componentes/comentarios/Comentario.js'
import * as serviceWorker from './serviceWorker';
import previsoes from './dados/pevisoes'
import comentarios from './dados/comentarios'

class Container extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comentariosVisibilidade: false
    }
  }

  toggleComentarios = () => {
    this.setState((estadoAnterior) => {
        return {
          comentariosVisibilidade: !estadoAnterior.comentariosVisibilidade 
        }
    })
  }

  render() {
    return (
      <div>
        <div className="previsao-container">
          {previsoes.map((item) => (
            < Previsao
              data={item.data}
              resumo={item.resumo}
              imagem={item.imagem}
              temperatura={item.temperatura}
            />
          ))}
        </div>
        < TamanhoFonte />
        <button className="btnComentario" onClick={this.toggleComentarios}>Ver Comentários</button>
        {this.state.comentariosVisibilidade && comentarios.map((item) => {
          return (
            < Comentario
            imagem={item.autora.imagem}
            nome={item.autora.nome}
            subtitulo={item.subtitulo}
            comentario={item.texto}
          />
          )
        })}
      </div>
    )
  }
}

ReactDOM.render(< Container />, document.getElementById('root'));
serviceWorker.unregister();