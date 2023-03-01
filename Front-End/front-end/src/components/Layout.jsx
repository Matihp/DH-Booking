import React from 'react'
import BloqueCategorias from './BloqueCategorias/BloqueCategorias'
import BloqueRecomendaciones from './BloqueRecomendaciones/BloqueRecomendaciones'
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <BloqueCategorias/>
      <BloqueRecomendaciones/>
    </>
    
  )
}

export default Layout