import React from 'react'
import CardBloqueCategorias from '../CardBloqueCategorias/CardBloqueCategorias'
import categorias from '../../categorias.json'
import './BloqueCategorias.css'

const BloqueCategorias = () => {
    return (
        <div className='body'>
            <span>
                <h2 style={{ marginLeft: "30px" }}>Buscar tipo de alojamiento</h2>
            </span>
            <div className='divCategorias'>
                {
                    categorias?.map(categorias => <CardBloqueCategorias key={categorias.id} categorias={categorias} />)
                }
            </div>

        </div>
    )
}

export default BloqueCategorias