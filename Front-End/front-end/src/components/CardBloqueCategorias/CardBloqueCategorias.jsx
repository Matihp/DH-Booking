import React from 'react'
import './CardBloqueCategorias.css'

const CardBloqueCategorias = ({categorias}) => {
    return (
        <div className='cardCategoria'>
            <img style={{ width: "400px", height: "210px",borderRadius:'7px' }} src={categorias.url} alt={categorias.titulo} />
            <h2 style={{ fontSize: "20px", margin: 0, color: "#31363F" }}>{categorias.titulo}</h2>
            <p style={{ fontSize: "14px", margin: 0, color: "#383B58" }}>{categorias.cantidad} {" "}{categorias.descripcion}</p>
        </div>
    )
}

export default CardBloqueCategorias