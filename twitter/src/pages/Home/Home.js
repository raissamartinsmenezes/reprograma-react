import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import { postTweets } from '../../services/tweets'
// abre as chaves pois o export está sem default no arquivo de origem 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novoTweet: '',
            tweets: [],
        }
    }

    // ... spread dentro de um array 
    adicionaTweet = (e) => {
        e.preventDefault();

        const postarNovoTweet = {
            conteudo: this.state.novoTweet,
            // login: 'raimartins' > vamos tirar pois não vamos precisar 
        }
        postTweets(postarNovoTweet, localStorage.getItem('TOKEN'))
        .then(resposta => {
            console.log(resposta.data)
            this.setState(stateAnterior => ({
                // pega a resposta e coloca no .data, é uma propriedade do axios (sempre)
                // resposta da api com todas as informações do usuário + o tweet 
                // agora eu consigo pegar todas as informações do usuário através das propriedades
                tweets: [resposta.data, ...stateAnterior.tweets],
                novoTweet: ''
            }))
        })

        // fetch('http://localhost:3001', {
        //     method: '',
        //     // aqui em baixo temos que passar o nosso objeto que queremos enviar 
        //     body: JSON.stringify(postTweet)
        // })
        // .then(response => response.json())
        // .then(responseJson => {
        //     console.log(responseJson)
        // })

        // const novoTweet = this.state.novoTweet
        // const anteriores = this.state.tweets
        
    }

    // logout = () => {
    //     localStorage.clear()
    // }

    removeTweet = (idRecebido) => {
        const testeFilter = this.state.tweets.filter(item => item._id !== idRecebido)
        this.setState({
            tweets: testeFilter
        })
        // console.log('teste ok', idRecebido)
    }

    // target.value método para pegar valor do input 
    // como atualizar o usuario de forma dinâmica > através de Redux! 
    render() {
        console.log(this.state.tweets)
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario={localStorage.getItem('USUARIO')}/>
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <form className="novoTweet" onSubmit={this.adicionaTweet}>
                                <div className="novoTweet__editorArea">
                                    <span className={this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : 'novoTweet__status'}>{this.state.novoTweet.length}/140
                                    </span>
                                    <textarea className="novoTweet__editor"
                                    value={this.state.novoTweet} 
                                    placeholder="O que está acontecendo?" 
                                    onChange={(event) => this.setState({novoTweet: event.target.value})}>
                                    </textarea>
                                </div>
                                <button type="submit" className="novoTweet__envia" disabled={this.state.novoTweet.length > 140}>Tweetar</button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {this.state.tweets.length > 0 ?
                                this.state.tweets.map((item,index) => (<Tweet {...item} key={item._id} remove={this.removeTweet}/>)) : <p>Compartilhe um tweet!</p>
                                }
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

// cada filho do map precisa de uma chave key para ele não se perder! 

export default App;
