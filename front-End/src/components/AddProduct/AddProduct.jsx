import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Dropdown from '../Navbar/Dropdown/Dropdown.jsx';
import imgFlecha from "../../img/flecha-izquierda.png";
import './addProduct.css'
import timesInput from '../../utils/times.json'
import Input from '../Actions/useInput.jsx';
import GetImages from './Images/getImages.jsx';
import GetAttributes from './Attributes/getAttributes.jsx';
import categorias from '../../utils/categorias.json'

const AddProduct = () => {
    const [nameProp,setNameProp]=useState({ value: '', valid: null })
    const [address,setAddress]=useState({ value: '', valid: null })
    const [description,setDescription]=useState('')
    const [terms,setTerms]=useState({})
    const navigate=useNavigate()
    
    const regularExpressions = {
        text: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
        direction:/^[A-Za-z0-9\s]{4,40}$/g,
      }
      function handleSubmit(e){
        e.preventDefault();
        const obj={
            name:nameProp,
            adrs:address,
            descript:description,
            term:terms,
        }
        navigate('/administration/success')
      }
  return (
    <>
    <Header onChange={"home"} />
        <div className="containerProductName containerHeaderAdmin">
          <div style={{ width: "100vw" }}>
            <h1>Administración</h1>
          </div>
          <Link to={"/"}>
            <img className="flechaProduct" src={imgFlecha} alt="" />
          </Link>
        </div>
        <h2 style={{marginBottom:'20px',marginTop:'30px',marginLeft:'40px'}}>Crear propiedad</h2>
        <div className='formAdministrationContainer'>  
            <form onSubmit={handleSubmit} action=""className='formAdministration'>
                <div className='containerAdministration'>
                    <div>
                        <Input
                        state={nameProp}
                        changeState={setNameProp}
                        label="Nombre de la propiedad"
                        type="text"
                        id="name"
                        name="text"
                        error="Sólo se permiten letras y mínimo 4 caracteres"
                        regex={regularExpressions.text}
                          />
                    </div>
                    <div className='dropdownAdministration'>
                        <p style={{color:'black',marginBottom:'6px',fontWeight:'600'}}>Categoria</p>
                        <Dropdown data={categorias} value={'category'} admin={true}/>   
                    </div>
                    <div>
                        <Input
                            state={address}
                            changeState={setAddress}
                            label="Dirección"
                            type="text"
                            id="name"
                            name="text"
                            error="Sólo se permiten letras,números y mínimo 4 caracteres"
                            regex={regularExpressions.direction}
                        />
                    </div>
                    <div className='dropdownAdministration'>
                        <p style={{color:'black',marginBottom:'6px',fontWeight:'bold'}}>Ciudad</p>
                        <Dropdown data={timesInput} value={'city'} admin={true}/>   
                    </div>  
                </div>                
                <div className='administration'>
                    <label style={{fontWeight:'bold'}} htmlFor="">Descripción</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)} className='tAreaAdministration' minLength={5} required name="" id="" cols="30" rows="10" placeholder='Escribir aqui'></textarea>
                </div>
                {/* <GetAttributes/> */}
                <div>
                    <h3 className='h3Admin'>Politicas del producto</h3>
                    <div className='containerAdministrationTerms'>
                        <div className='administrationTerms'>
                            <div>
                                <h4>Normas de la casa</h4>
                                <p style={{color:'black',marginTop:'15px'}}>Descripción</p>
                                <textarea onChange={(e)=>setTerms(e.target.value)} className='tAdministrationTerms' minLength={5} required name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className='marTerms'>
                                <h4>Salud y seguridad</h4>
                                <p style={{color:'black',marginTop:'15px'}}>Descripción</p>
                                <textarea onChange={(e)=>setTerms(e.target.value)} className='tAdministrationTerms'minLength={5} required name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className='marTerms'>
                                <h4>Politica de cancelación</h4>
                                <p style={{color:'black',marginTop:'15px'}}>Descripción</p>
                                <textarea onChange={()=>setTerms(e.target.value)} className='tAdministrationTerms'minLength={5} required name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>    
                </div>
                <GetImages/>
                <div className='containerBtnAdministration'>                  
                    <button className='btnAdministration'>
                        Crear               
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default AddProduct