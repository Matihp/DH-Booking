import React from 'react'
import './CardBloqueCategorias.css'

const CardBloqueCategorias = ({categoria}) => {
    return (
        <div className='cardCategoria'>
            <img className='imagenCategoria' src={categoria.urlImagen}/>
            <h2 style={{ fontSize: "20px", margin: 0, color: "#31363F" }}>{categoria.titulo}</h2>
            <p style={{ fontSize: "14px", margin: 0, color: "#383B58" }}>3 {categoria.titulo}</p>
        </div>
    )
}

export default CardBloqueCategorias