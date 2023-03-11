import React from 'react'
import './CardBloqueRecomendaciones.css'
import iconNatacion from '../../img/iconNatacion.png'
import iconWifi from '../../img/iconWifi.png'
import { Link, useParams } from 'react-router-dom';


const CardBloqueRecomendaciones = ({ recomendacion }) => {

    return (
        <div className='bloqueRecomendaciones'>
            <div >
                <img className='imagenRecomendaciones' src={recomendacion.listImagen[0].url} alt="imagen" />
            </div>
            <div className='divCardRecomendaciones'>
                <div>
                    <p className='categoriaSpan'>{recomendacion.categoria.titulo.toUpperCase()}</p>
                    <h1 className='tituloSpan'>{recomendacion.titulo}</h1>
                    <p className='ubicacionP'>{recomendacion.ciudad.nombre_ciudad}</p>
                    <div>
                        <span><img style={{height:"30px",width:"30px"}} src={recomendacion.caracteristicas[0].icono}></img> 
                        <img style={{height:"30px",width:"30px"}} src={recomendacion.caracteristicas[1].icono}></img></span> 
                    </div>
                </div>
                <p className='ubicacionP'>{recomendacion.tituloDescripcion}</p>
                <button  className='buttonNav'>
                <Link className='buttonNav' style={{textDecoration:"none"}} to={`/details/${recomendacion.id}`}>Ver más</Link>
                </button>
            </div>
        </div>
    )
}

export default CardBloqueRecomendaciones


