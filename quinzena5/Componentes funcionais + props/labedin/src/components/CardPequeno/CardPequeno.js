import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="little-container">
            <img src={ props.imagem }/>
            <strong>{ props.texto }</strong>
            <span>{ props.texto2 }</span>
        </div>
    )
}

export default CardPequeno