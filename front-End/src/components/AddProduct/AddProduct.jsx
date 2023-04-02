import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Dropdown from '../Navbar/Dropdown/Dropdown.jsx';
import imgFlecha from "../../img/flecha-izquierda.png";
import './addProduct.css'
import timesInput from '../../utils/times.json'
import Input from '../Actions/useInput.jsx';
import GetImages from './Images/getImages.jsx';

const AddProduct = () => {
    const [nameProp,setNameProp]=useState({ value: '', valid: null })
    const [address,setAddress]=useState({ value: '', valid: null })
    const regularExpressions = {
        text: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
      }
  return (
    <>
    <Header onChange={"home"} />
        <div className="containerProductName">
          <div style={{ width: "100vw" }}>
            <h1>Administración</h1>
          </div>
          <Link to={"/"}>
            <img className="flechaProduct" src={imgFlecha} alt="" />
          </Link>
        </div>
        <h2 style={{marginBottom:'20px',marginTop:'30px',marginLeft:'40px'}}>Crear propiedad</h2>
        <div className='formAdministrationContainer'>  
            <form action=""className='formAdministration'>
                <div className='containerAdministration'>
                    <div>
                        <Input
                        state={nameProp}
                        changeState={setNameProp}
                        label="Nombre de la propiedad"
                        type="text"
                        id="name"
                        name="text"
                        error="Sólo se permiten letras"
                        regex={regularExpressions.text}
                          />
                    </div>
                    <div>
                    <label htmlFor="">Categoria</label>
                    <Dropdown data={timesInput} value={'city'}/>   
                    </div>
                    <div>
                        <Input
                            state={address}
                            changeState={setAddress}
                            label="Dirección"
                            type="text"
                            id="name"
                            name="text"
                            error="Sólo se permiten letras"
                            regex={regularExpressions.text}
                        />
                    </div>
                    <div>
                    <label htmlFor="">Ciudad</label>
                    <Dropdown data={timesInput} value={'city'}/>   
                    </div>  
                </div>                
                <div className='administration'>
                    <label htmlFor="">Descripción</label>
                    <textarea className='tAreaAdministration' name="" id="" cols="30" rows="10" placeholder='Escribir aqui'></textarea>
                </div>
                <div>
                    <h3 style={{paddingLeft:'25px',paddingTop:'5px',paddingBottom:'10px'}}>Politicas del producto</h3>
                    <div className='containerAdministrationTerms'>
                        <div className='administrationTerms'>
                            <div>
                                <h4>Normas de la casa</h4>
                                <p style={{color:'black',marginTop:'15px'}}>Descripción</p>
                                <textarea className='tAdministrationTerms' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <h4>Salud y seguridad</h4>
                                <p style={{color:'black',marginTop:'15px'}}>Descripción</p>
                                <textarea className='tAdministrationTerms' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <h4>Politica de cancelación</h4>
                                <p style={{color:'black',marginTop:'15px'}}>Descripción</p>
                                <textarea className='tAdministrationTerms' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                    </div>    
                </div>
                <GetImages/>
                <div className='containerBtnAdministration'>
                    <Link to={'/administration/success'}>
                    <button className='btnAdministration'>Crear</button>
                    </Link>  
                </div>
            </form>
        </div>
    </>
  )
}

export default AddProduct