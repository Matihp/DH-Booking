import React, { useState } from 'react'
import './Navbar.css'
import {DateObject } from "react-multi-date-picker"
import DatePicker from "react-multi-date-picker"

const Navbar = () => {
  const [value, setValue] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ])
  function handleChange(value){
    setValue(value)
  }
  return (
    <div className='navBar'>
    <h1 style={{color:"white",marginBottom:'20px'}}>Busca ofertas en hoteles, casas y mucho más</h1>
    <form>
        <select className='selectNavBar'>
        <option disabled selected>¿A dónde vamos?</option>
            <option value="option 2" >Buenos Aires</option>
            <option value="option 3" >Cordoba</option>
            <option value="option 4" >Santa Fe</option>
            <option value="option 4" >Mendoza</option>
        </select>   
        <DatePicker
           style={{width:'390px',height:'33px'}}
          range
          value={value}
          onChange={handleChange}
        />   
        <button className='buttonNavBar'>Buscar</button>
    </form>
</div>
  )
}

export default Navbar