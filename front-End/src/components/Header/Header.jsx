import React, { useState } from 'react'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import './Header.css'
import Sesion from '../Sesion/Sesion'
import { useGlobalStates } from '../../context/GlobalContext'

const Header = ({onChange}) => {

  const {data,setData}=useGlobalStates()
  return (
    <div className='header'>
        <header>
            <div className='divContainer'>
                <Link className='flex' to={"/"} style={{textDecoration:"none"}} >
                    <img className='logo' src={logo} alt="logo"/>
                    <p className='headerText'>Sentite como en tu hogar</p>
                </Link>
                {data ? (
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <h1 style={{color:'black',fontSize:'20px'}}>Hola, Matias</h1>
                  <button onClick={()=>setData(false)}>Cerrar Sesión</button>
                  </div>
                ):(<Sesion onChange={onChange}/>)}
                
            </div>
        </header>
    </div>
  )
}

export default Header