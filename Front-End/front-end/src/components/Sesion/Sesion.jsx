import React from 'react'
import { Link } from 'react-router-dom'
import './Sesion.css'

const Sesion = () => {
  return (
    <div>
      <Link to={'/signup'}><button>Crear cuenta</button></Link>
      <Link to={'/login'}><button>Iniciar sesión</button></Link>
    </div>
  )
}

export default Sesion