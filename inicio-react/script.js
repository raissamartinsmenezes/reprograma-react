const app = document.getElementById('app')

// const a = 'segunda-feira'
// const template = <h1>React na Reprograma, na {a}</h1>
// JSX - Javascript XML > pesquisar sobre (o navegador não entende)
// var template = React.createElement("h1", null, "React na Reprograma, na ", a);
const template = <h1>React na Reprograma, funcionou?</h1>
// precisamos compilar o react, com BABEL, para que o browser consiga ler os códigos novos através da compilação  

// primeiro método react DOM 

ReactDOM.render(template, app)
// ReactDOM.render(elemento, container)
// dois parâmetros, o que eu quero renderizar e aonde eu quero fazer isso 