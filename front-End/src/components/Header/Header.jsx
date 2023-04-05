import React, { useState } from 'react'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import './Header.css'
import Sesion from '../Sesion/Sesion'
import { useGlobalStates } from '../../context/GlobalContext'
import { useNavigate } from 'react-router-dom'

const Header = ({onChange}) => {

  const {data,setData}=useGlobalStates()
  const navigate = useNavigate()
  return (
    <div className='header'>
        <header>
            <div className='divContainer'>
                <Link className='flex' to={"/"} style={{textDecoration:"none",cursor:'default'}} >
                    <img className='logo' src={logo} alt="logo"/>
                    <p className='headerText'>Sentite como en tu hogar</p>
                </Link>
                {data.valid ? (
                  <div className='containerHeader'>
                    <p onClick={() => navigate('reservas')} style={{color:'black', padding:"15px"}}>Reservas</p>
                    {data.token ? (<p onClick={() => {navigate('/administration')}} style={{color:'black'}}>Administración</p>) : "" }
                    <div className='verticalLine'>.</div>
                    <svg className='svgHeader' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM18.3775 17.2942C18.7303 17.8695 18.6055 18.63 18.0369 18.9935C17.5199 19.3241 16.9158 19.5265 16.3159 19.6598C15.2322 19.9006 13.8299 20 11.9998 20C10.1698 20 8.76744 19.9006 7.68381 19.6598C7.09516 19.529 6.50205 19.3319 5.99131 19.012C5.41247 18.6495 5.28523 17.8786 5.64674 17.2991C6.06303 16.6318 6.63676 16.1075 7.40882 15.7344C8.58022 15.1684 10.1157 15 11.9996 15C13.8771 15 15.4109 15.1548 16.5807 15.7047C17.3727 16.077 17.9572 16.6089 18.3775 17.2942Z" fill="#323232"></path> </g></svg>
                    <div style={{display:'flex',flexDirection:'column'}}>
                      <div style={{display:'flex'}}>
                        <h4 style={{color:'black'}}>Hola,</h4>
                         <svg onClick={()=>setData(data?.valid)} className='svgHeader2'viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path  d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></g></svg>
                      </div>
                      <div className='h4Header'>
                        <h4 style={{color:'#F0572D'}}>{data?.first_name} {data?.last_name}</h4>
                      </div>
                    </div>
                  </div>
                
                ):(<Sesion onChange={onChange}/>)}
                
            </div>
        </header>
    </div>
  )
}

export default Header