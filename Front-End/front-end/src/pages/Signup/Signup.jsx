import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className='containerSignup'>
      <h1 style={{ color: '#f0572b', marginBottom: '20px', fontWeight: "bold" }}>Crear cuenta</h1>
      <form className='formSignup'onSubmit={handleSubmit}>
        <div className='flexSign'>
            <label className='nombre' >Nombre</label>
            <input className='inputSignup inptNombre' type="text"required />
            <label className='nombre'>Apellido</label>  
            <input className='inputSignup inptNombre' type="text"required />
        </div>
        <div className='flexSignup'>
          <label>Correo Electronico</label>
        <input className='inputSignup inpt' type="text"required />
        </div>
        <div className='flexSignup'>
          <label>Contraseña</label>
        <input className='inputSignup inpt' type="password" pattern=".{6,}" required/>
          </div>  
        <div className='flexSignup'>
          <label>Confirmar contraseña</label>
        <input className='inputSignup inpt'  pattern=".{6,}" required/>
          </div>      
        <div>
          <button className='buttonSignup'>Ingresar</button>
        </div>
      </form>
    </div>
  )
}

export default Signup