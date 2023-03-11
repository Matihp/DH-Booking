import React from 'react'
import CardBloqueRecomendaciones from '../CardBloqueRecomendaciones/CardBloqueRecomendaciones'
import recomendaciones from '../../recomendaciones.json'
import './BloqueRecomendaciones.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BloqueRecomendaciones = () => {

  const [recomendacion, setRecomendacion] = useState([])

  useEffect(() =>  {
    loadRecomendaciones()
  }, [])

  const loadRecomendaciones = async () => {
      const data = await axios.get("http://localhost:8080/productos/random")
      setRecomendacion(data.data)
  }

  return (
    <div>
    <h2 style={{ marginLeft: "30px",marginTop:'20px' }}>Recomendaciones</h2>
    <div className='contenedorRecomendaciones'>
      <div className='divRecomendaciones'>
        {
          recomendacion?.map(recomendacion => <CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
        }
      </div>
    </div>
    

</div>
  )
}

export default BloqueRecomendaciones