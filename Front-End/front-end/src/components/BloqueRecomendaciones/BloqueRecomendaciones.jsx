import React from 'react'
import CardBloqueRecomendaciones from '../CardBloqueRecomendaciones/CardBloqueRecomendaciones'
import recomendaciones from '../../recomendaciones.json'
import './BloqueRecomendaciones.css'
const BloqueRecomendaciones = () => {
  return (
    <div>
    <h2 style={{ marginLeft: "30px", }}>Recomendaciones</h2>
    <div className='contenedorRecomendaciones'>
      <div className='divRecomendaciones'>
        {
            recomendaciones?.map(recomendaciones => <CardBloqueRecomendaciones key={recomendaciones.id} recomendaciones={recomendaciones} />)
        }
      </div>
    </div>
    

</div>
  )
}

export default BloqueRecomendaciones