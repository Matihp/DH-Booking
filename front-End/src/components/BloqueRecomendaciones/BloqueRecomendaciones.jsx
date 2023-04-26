import React from 'react'
import CardBloqueRecomendaciones from '../CardBloqueRecomendaciones/CardBloqueRecomendaciones'
import './BloqueRecomendaciones.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useGlobalStates } from '../../context/GlobalContext'
import endpoint from '../../utils/endpoint.json'

const BloqueRecomendaciones = () => {

  const [recomendacion, setRecomendacion] = useState([])
  const {pressCategory,category,cities,pressBtn,fechaInicio, fechaFinal}=useGlobalStates()
  const [filterRecomend,setFilterRecomend]=useState([])
  const [filterRecomendation,setFilterRecomendation]=useState([])
  const [valid,setValid]=useState(false);
  const [isReady,setIsReady]=useState(false)
  const [loading,setLoading]=useState(true)

  useEffect(() =>  {
    loadRecomendaciones()
  }, [])

  useEffect(()=>{
    setFilterRecomend(recomendacion.filter((rec)=>rec.categoria.titulo==category))
  },[pressCategory])

  useEffect(()=>{
    if(cities !== null ){
      if(fechaInicio && fechaFinal){
        const data = axios.get(`${endpoint.url}/productos/dateCiudad?fechaInicio=${fechaInicio}&fechaFinal=${fechaFinal}&ciudadId=${cities.id}`)
        .then(data => setFilterRecomendation(data.data))
      } 
      setFilterRecomendation(recomendacion.filter((rec)=>rec.ciudad.nombre_ciudad==cities.nombre_ciudad))
    }
    setValid(true)
  },[pressBtn])

  useEffect(()=>{
    setValid(false)
  },[pressCategory])

  const loadRecomendaciones = async () => {
    try {
      const data = await axios.get(`${endpoint.url}/productos/random`)
      setLoading(false)
      setIsReady(true)
      setRecomendacion(data.data)
     } catch (err) {
         return setLoading(true)
     }
    
  }

  return (
  <div>
    <h2 style={{ marginLeft: "30px",marginTop:'20px' }}>{category == null && !valid != '' ? 'Recomendaciones' : 'Resultados de busqueda'}</h2>
    <div className='contenedorRecomendaciones'>
      {isReady && (
        <div className='divRecomendaciones'>
        {valid && cities !== null && (

          filterRecomendation?.map(recomendacion => <CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
        )}
        { category == null && !valid &&(
            
              recomendacion?.map(recomendacion => <CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
          
          )}
        {
          !valid && category != '' &&(
            filterRecomend?.map(recomendacion=><CardBloqueRecomendaciones key={recomendacion.id} recomendacion={recomendacion}/>)
          )
        }
      </div>
      )}
      {
        loading && (
          <div className='containerLoader'>
          <span className='loader loader-circles'></span>
          Cargando...
        </div>
        )
      }
      
    </div>
</div>
  )
}

export default BloqueRecomendaciones