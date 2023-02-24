import React from 'react'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import './Header.css'
import Sesion from '../Sesion/Sesion'

const Header = () => {
  return (
    <div className='header'>
        <header>
            <div className='divContainer'>
                <Link className='flex' to={"/"} style={{textDecoration:"none"}} >
                    <img className='logo' src={logo} alt="logo"/>
                    <p className='headerText'>Sentite como en tu hogar</p>
                </Link>
                <Sesion/>
            </div>
        </header>
    </div>
  )
}

export default Header