import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../Signup/signup'
import './loginPage.css'

const Login = () => {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className='containerLogin'>
      <h1 style={{ color: '#f0572b', marginBottom: '20px', fontWeight:"bold" }}>Iniciar sesión</h1>
      <form className='formLogin'onSubmit={handleSubmit}>
      
        <label className='labelLogin'>Correo electronico</label>
        <input className='inputLogin' type="text" required/>
       
        <label>Contraseña</label>
        <input className='inputLogin' type="text" required/>
        <div className='divLogin'>
          <button>Ingresar</button>
        </div>
      </form>
      <p style={{ color: '#31363F', fontSize:"16px" }}>Aun no tienes cuenta? <Link to={'/signup'} style={{ textDecoration: 'none', color: '#f0572b', fontSize:"16px" }}> Registrate</Link></p>
    </div>
  )
}

export default Login