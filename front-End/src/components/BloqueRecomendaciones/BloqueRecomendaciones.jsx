import React from 'react'
import CardBloqueRecomendaciones from '../CardBloqueRecomendaciones/CardBloqueRecomendaciones'
import './BloqueRecomendaciones.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useGlobalStates } from '../../context/GlobalContext'


const BloqueRecomendaciones = () => {

  const [recomendacion, setRecomendacion] = useState([])
  const {pressCategory,category}=useGlobalStates()
  const [filterRecomend,setFilterRecomend]=useState([])

  useEffect(() =>  {
    loadRecomendaciones()
  }, [])
  useEffect(()=>{
    setFilterRecomend(recomendacion.filter((rec)=>rec.categoria.titulo==category))
  },[pressCategory])

  const loadRecomendaciones = async () => {
      const data = await axios.get("http://localhost:8080/productos/random")
      setRecomendacion(data.data)
  }

  return (
    <div>
    <h2 style={{ marginLeft: "30px",marginTop:'20px' }}>Recomendaciones</h2>
    <div className='contenedorRecomendaciones'>
      <div className='divRecomendaciones'>
        {category == '' ? (
          
            recomendacion?.map(recomendacion => <CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
         
        ) :(
          
            filterRecomend?.map(recomendacion=><CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
          
        )}
        
      </div>
    </div>
    

</div>
  )
}

export default BloqueRecomendaciones