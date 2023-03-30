import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import imgFlecha from "../../img/flecha-izquierda.png";
import './administration.css'

const Administration = () => {
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
        <div>
            <h2>Crear propiedad</h2>
            <form action="">
                <div>
                    <label htmlFor="">Nombre de la propiedad</label>
                    <input type="text" />
                </div>
                <div>
                    

                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                </div>
                <div>

                </div>
                <div>

                </div>
            </form>
        </div>
    </>
  )
}

export default Administration