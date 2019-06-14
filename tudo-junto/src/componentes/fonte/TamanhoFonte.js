import React from 'react';

class TamanhoFonte extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tamanho: 16
      }
    }
  
    aumentarFonte = () => {
      this.setState((estadoAnterior) => {
        return {
          tamanho: estadoAnterior.tamanho + 2
        }
      })
    }
  
    diminuirFonte = () => {
      this.setState((estadoAnterior) => {
        return {
          tamanho: estadoAnterior.tamanho - 2
        }
      })
    }
  
    render() {
      // estilo como atributo, você consegue mudar pois o css é imutável e se colocarmos in line, não conseguimos sobrescrevê-lo
      document.querySelector('body').style.fontSize = `${this.state.tamanho}px`;
  
      return (
        <div className="btnGroup" >
          <button className="btnComentario btnFontSize" onClick={this.aumentarFonte}>Aumentar Fonte</button>
          <button className="btnComentario btnFontSize" onClick={this.diminuirFonte}>Diminuir Fonte</button>
        </div>
      )
    }
  }

export default TamanhoFonte;
  