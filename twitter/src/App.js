import React, { Component, Fragment } from 'react';
import Cabecalho from './components/Cabecalho'
import NavMenu from './components/NavMenu'
import Dashboard from './components/Dashboard'
import Widget from './components/Widget'
import TrendsArea from './components/TrendsArea'
import Tweet from './components/Tweet'

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
        const novoTweet = this.state.novoTweet
        const anteriores = this.state.tweets
        this.setState({
            tweets: [novoTweet, ...anteriores],
            novoTweet: ''
        })
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
                                {this.state.tweets.map((elemento,index) => (
                                    <Tweet texto={elemento} key={index}/>
                                ))}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default App;
