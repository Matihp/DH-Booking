import './Navbar.css'
import {DateObject } from "react-multi-date-picker"
import DatePicker from "react-multi-date-picker"
import { useState,useEffect } from 'react'
import axios from 'axios'

const Navbar = () => {

  const [ciudad, setCiudad] = useState([])

  useEffect(() =>  {
      loadCategorias()
  }, [])

  const loadCategorias = async () => {
      const data = await axios.get("http://localhost:8080/ciudades")
      console.log(data.data);
      setCiudad(data.data)
  }

  const [value, setValue] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days")
  ])
  function handleChange(value){
    setValue(value)
  }
  return (
  <div className='navBar'>
    <h1 className='h1Navbar' style={{color:"white",marginBottom:'20px'}}>Busca ofertas en hoteles, casas y mucho más</h1>
    <form className='formNavbar'>
        <select className='selectNavBar'>
          <option disabled selected>¿A dónde vamos?</option>
          {ciudad?.map(cat => <option value={cat.id} style={{color:"black"}}>{cat.nombre_ciudad}</option>)}
        </select>
        <DatePicker
          style={{height:'33px',marginBottom:'8px'}}
          range
          value={value}
          onChange={handleChange}
          class='testClass'
        />      
        
        <button className='buttonNavBar'>Buscar</button>
    </form>
</div>
  )
}

export default Navbar