// se eu não preciso mudar o estado dessa página, eu posso criar uma função senão eu criaria uma classe

import React from 'react';
import './home.css'

export default function Home(props) {
    return(
        <section className="home-header">
            <h1>A era da comunicação intergalática</h1>
        </section>     
    )
}

