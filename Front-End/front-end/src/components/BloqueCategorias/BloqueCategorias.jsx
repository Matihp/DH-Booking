import React from 'react'
import CardBloqueCategorias from '../CardBloqueCategorias/CardBloqueCategorias'
import categorias from '../../categorias.json'
import './BloqueCategorias.css'

const BloqueCategorias = () => {
    return (
        <div className='hola'>
            <span>
                <h2 style={{ marginLeft: "20px",padding:'10px' }}>Buscar por tipo de alojamiento</h2>
            </span>
            <div className='containerCategorias'>
                <div className='divCategorias'>
                {
                    categorias?.map(categorias => <CardBloqueCategorias key={categorias.id} categorias={categorias} />)
                }
                 </div>
            </div>
            

        </div>
    )
}

export default BloqueCategorias