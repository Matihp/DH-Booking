import React from 'react'
import { Link } from 'react-router-dom'
import './Sesion.css'

const Sesion = () => {
  return (
    <>
    <div className='divSesion' >
      <Link to={'/signup'}><button>Crear cuenta</button></Link>
      <Link to={'/login'}><button>Iniciar sesión</button></Link>
    </div>
    <div className='logoSesion'>
      <svg  width="50px" height="34px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
    </>
  )
}

export default Sesion