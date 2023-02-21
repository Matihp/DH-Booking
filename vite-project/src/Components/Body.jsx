import React from 'react'
import categorias from "../categorias.json"
import CardCategoria from './CardCategoria'


const Main = () => {
  return (
    <div className='body' >
      <span>
        <h2 style={{marginLeft:"20px"}}>Buscar tipo de alojamiento</h2>
      </span>
      <div className='divCategorias'>
        {console.log(categorias)}
        {
          categorias?.map(categorias => <CardCategoria key={categorias.id} categorias={categorias} />)
        }
      </div>
      <h2 style={{marginLeft:"20px"}}>Recomendaciones</h2>
    </div>
  )
}

export default Main
