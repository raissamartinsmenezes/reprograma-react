import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage/index'

// função para ver se o TOKEN está autenticado para liberar a rota de página de tweets
function estaAutenticado (){
    if(localStorage.getItem('TOKEN')){
        return true 
    } else {
        return false
    }
}

// um componente que eu vou criar para substituir o Route lá em baixo, ele vai dar um Wrap 
class PrivateRoute extends React.Component {
    render(){
        // esse Component é o Home
        const Componente = this.props.component
        // console.log(this.props)
        if(estaAutenticado()){ // aqui poderia utilizar apenas o localStorage.getItem('TOKEN')        pois já é true
            // componente de rota do tweet
            // ...props > peguei todas as propriedades daquele componente, aqui no caso será o do componente Home
            return <Route render={() => <Componente {...this.props}></Componente>}></Route>
        } else {
            return <Redirect to="/login"></Redirect>
            // componente de rota do login 
        }
    }
}

const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento