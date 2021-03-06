    
import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            erro: ''
        }
    }   

    fazerLogin = (e) => {
        e.preventDefault()
        const dadosDeLogin = {
            login: this.inputLogin.value,
            senha: this.inputSenha.value
        }
        //  console.log(dadosDeLogin)
        //fetch é uma promisse então ele espera um .then 
        fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify(dadosDeLogin)
        }) // ele vai pegar os dados de login e senha como objeto e vai transformar em JSON para fazer a validação 
        .then(resp => {
            // o objeto vem como response 
            if (!resp.ok) // qualquer outro resultado diferente de ok (200) a gente vai dar o throw para cair no catch 
                throw resp;
                // console.log(resp)
                // queremos apenas a resposta do back e não todos os dados fornecidos 
                // fazer um console.log para ver isso 
            return resp.json() // .json() é uma função e uma promise e precisa de retorno(.then) onde você quer apenas a resposta do back no caso um token (que é uma propriedade)
        })
        .then((respJson) => {
            // peguei o retorno do back e só agora consigo usar como variável 
            // console.log('resp', respJSON) - você vai ver o objeto inteiro, mas queremos pegar apenas a propriedade de token 
            localStorage.setItem('TOKEN', respJson.token)
            localStorage.setItem('USUARIO', this.inputLogin.value)
            // acessa o histórico e da uma push no path configurado na sua rota (propriedade do router-dom)
            this.props.history.push('/')
        })
        .catch((err) => {
            // aqui estou recebendo a resp do throw
            // queremos só o retorno do back 
             err.json()
             // como é promise precisamos do .then para acessarmos ela
             .then(res => {
                 this.setState({
                    erro: res.message
                 })
            })
        })
    }
    // ref para pegar o valor digitado pelo usuário só no final 
    // toda vez que a gente precisar alterar algo precisamos alterar seu estado, por isso, não funciona, na mensagem de erro, utilizar apenas o {this.message}
    render() { 
        return (
            <Fragment>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form className="loginPage__form" action="/" onSubmit={this.fazerLogin}>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input 
                                    ref={(elementoInput) => this.inputLogin = elementoInput}
                                    className="loginPage__input" 
                                    type="text" 
                                    id="login" 
                                    name="login"/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input className="loginPage__input" 
                                    type="password" id="senha" name="senha"
                                    ref={(elemento) => this.inputSenha = elemento}
                                    />
                                </div>
                                {this.state.erro !== '' && <div className="loginPage__errorBox">{this.state.erro}</div>}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage