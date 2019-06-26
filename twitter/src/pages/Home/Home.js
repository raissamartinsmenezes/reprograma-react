import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            novoTweet: '',
            tweets: []
        }
    }

    // ... spread dentro de um array 
    adicionaTweet = (e) => {
        e.preventDefault()
        // const novoTweet = this.state.novoTweet
        // const anteriores = this.state.tweets
        this.setState(stateAnterior => ({
            tweets: [stateAnterior.novoTweet, ...stateAnterior.tweets],
            novoTweet: ''
        }))
    }

    // target.value método para pegar valor do input 
    render() {
        console.log(this.state.tweets)
        return (
            <Fragment>
                <Cabecalho>
                    <NavMenu usuario="@raimartins" />
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
                                this.state.tweets.map((item,index) => (<Tweet texto={item} key={index} usuario="@raimartins"/>)) : <p>Compartilhe um tweet!</p>
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
