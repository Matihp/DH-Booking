import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Dropdown from '../../components/Navbar/Dropdown/Dropdown';
import imgFlecha from "../../img/flecha-izquierda.png";
import './administration.css'
import timesInput from '../../utils/times.json'
import Input from '../../components/Actions/useInput';

const Administration = () => {
    const [nameProp,setNameProp]=useState({ value: '', valid: null })
    const [address,setAddress]=useState({ value: '', valid: null })
    const regularExpressions = {
        nameAndLastName: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, 
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^.{7,30}$/, // 
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
                        regex={regularExpressions.nameAndLastName}
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
                            regex={regularExpressions.nameAndLastName}
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
                <div style={{padding:'5px 25px 0px 25px'}}>
                    <h3 >Cargar imágenes</h3>
                    <div className='containerImgAdministration'>
                        <div className='imgAdministration'>
                          <Input
                            state={nameProp}
                            changeState={setNameProp}
                            label=""
                            type="text"
                            id="name"
                            name="text"
                            error="Sólo se permiten letras"
                            regex={regularExpressions.nameAndLastName}
                            />
                        <Input
                            state={nameProp}
                            changeState={setNameProp}
                            label=""
                            type="text"
                            id="name"
                            name="text"
                            error="Sólo se permiten letras"
                            regex={regularExpressions.nameAndLastName}
                          />  
                        </div>
                        <svg width="34px" height="54px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#F0572D" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                        {/* <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Minus_Square"> <path id="Vector" d="M8 12H16M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#F0572D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg> */}
                    </div>
                </div>
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

export default Administration