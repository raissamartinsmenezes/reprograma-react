import React from 'react';

const Titulo = (props) => {
    return(
        <div>
            <h1 className="previsao__data">{props.data}</h1>
            <p className="previsao__resumo">{props.resumo}</p>
        </div>
    )
}

export default Titulo;