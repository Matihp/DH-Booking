import React from 'react'
import CardBloqueRecomendaciones from '../CardBloqueRecomendaciones/CardBloqueRecomendaciones'
import './BloqueRecomendaciones.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useGlobalStates } from '../../context/GlobalContext'


const BloqueRecomendaciones = () => {

  const [recomendacion, setRecomendacion] = useState([])
  const {pressCategory,category,cities,pressBtn}=useGlobalStates()
  const [filterRecomend,setFilterRecomend]=useState([])
  const [filterRecomendation,setFilterRecomendation]=useState([])
  const [valid,setValid]=useState(true)

  useEffect(() =>  {
    loadRecomendaciones()
  }, [])

  useEffect(()=>{
    setFilterRecomend(recomendacion.filter((rec)=>rec.categoria.titulo==category))
  },[pressCategory])

  useEffect(()=>{
    setFilterRecomendation(recomendacion.filter((rec)=>rec.ciudad.nombre_ciudad==cities.nombre_ciudad))
    setValid(!valid)
  },[pressBtn])

  const loadRecomendaciones = async () => {
      const data = await axios.get("http://localhost:8080/productos/random")
      setRecomendacion(data.data)
  }

  return (
  <div>
    <h2 style={{ marginLeft: "30px",marginTop:'20px' }}>Recomendaciones</h2>
    <div className='contenedorRecomendaciones'>
      <div className='divRecomendaciones'>
        {valid ? (

          filterRecomendation?.map(recomendacion => <CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)

        ):(

          category == '' ? (
            
              recomendacion?.map(recomendacion => <CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
          
          ) :(
            
              filterRecomend?.map(recomendacion=><CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
            
          )

        )}
        
      </div>
    </div>
</div>
  )
}

export default BloqueRecomendaciones