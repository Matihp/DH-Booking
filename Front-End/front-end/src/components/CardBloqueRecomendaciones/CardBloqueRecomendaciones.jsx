import React from 'react'
import './CardBloqueRecomendaciones.css'
import iconNatacion from '../../img/iconNatacion.png'
import iconWifi from '../../img/iconWifi.png'

const CardBloqueRecomendaciones = ({ recomendaciones }) => {
    return (
        <div className='bloqueRecomendaciones'>
            <div >
                <img className='imagenRecomendaciones' src={recomendaciones.url} alt="imagen" />
            </div>
            <div className='div'>
                <div>
                    <p className='categoriaSpan'>{recomendaciones.categoria.toUpperCase()}</p>
                    <h1 className='tituloSpan'>{recomendaciones.titulo}</h1>
                    <p className='ubicacionP'>{recomendaciones.ubicacion}</p>
                    <div>
                        <span><img src={iconNatacion}></img> <img src={iconWifi}></img></span>
                        
                    </div>
                </div>

                
                <p className='ubicacionP'>{recomendaciones.descripcion}</p>
                <button className='buttonNav'>Ver más</button>
            </div>

        </div>
    )
}

export default CardBloqueRecomendaciones


