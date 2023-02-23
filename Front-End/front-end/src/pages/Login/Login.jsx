import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../Signup/signup'
import './loginPage.css'

const Login = () => {
  return (
    <div className='containerLogin'>
        <h1 style={{color:'#f0572b',marginBottom:'20px'}}>Iniciar sesión</h1>
        <form className='formLogin'>
            <label className='labelLogin'>Correo electronico</label>
            <input className='inputLogin' type="text" />
            <label>Contraseña</label>
            <input className='inputLogin' type="text" />
            <div className='divLogin'>
                <button>Ingresar</button>
                
            </div>
            
        </form>
        <p style={{color:'#f0572b'}}>Aun no tienes cuenta?<Link style={{textDecoration:'none',color:'#f0572b'}}>Registrate</Link></p>
    </div>
  )
}

export default Login