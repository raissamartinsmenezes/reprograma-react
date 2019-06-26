    
import React, { Component, Fragment } from 'react'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'

import './loginPage.css'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            aparecer: false
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
            if (!resp.ok)
                throw resp;
                //console.log(resp)
            return resp.json() // .json() é uma função e uma promise e precisa de retorno(.then) onde você quer apenas a resposta do back no caso um token (que é uma propriedade)
        })
        .then((respJson) => {
            //console.log('resp', respJSON)
            localStorage.setItem('TOKEN', respJson.token)
            // acessa o histórico e da uma push no path configurado na sua rota (propriedade do router-dom)
            this.props.history.push('/')
        })
        .catch((err) => {
             err.json()
             .then(res => {
                 this.setState({
                     aparecer: true
                 })
                 alert(res.message)}
            )
        })
    }

    render() { 
        console.log(this.state.aparecer)
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
                                {this.state.aparecer ? <div className="loginPage__errorBox">Mensagem de erro!</div> : false}
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