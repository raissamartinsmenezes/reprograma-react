import React from 'react';
import './App.css';
import Home from './paginas/Home';
import Nav from './componentes/nav/Nav';
import Cadastro from './paginas/Cadastro';
import Chat from './paginas/Chat';
import {Switch, Route} from 'react-router-dom';

// o swicth tem que ficar em volta das rotas para realizar as trocas das mesmas 
function App() {
  return (
      <div className="App">
          <Switch>
              <div>
                <Nav/>
                <Route path="/" exact component={Home}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/chat" component={Chat}/>      
              </div>
          </Switch>
      </div>
  );
}

export default App;