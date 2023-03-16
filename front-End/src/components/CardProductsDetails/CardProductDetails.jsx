import React, { useState,useEffect } from "react";
import "./CardProductDetails.css";
import imgFlecha from "../../img/flecha-izquierda.png";
import logoGps from "../../img/logo-gps.png";
import ProductSlider from "../ProductSlider/ProductSlider";
import { Calendar } from "react-multi-date-picker";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const CardProductDetails = () => {
  const [slider, setSlider] = useState(false);
  const [value, setValue] = useState([])
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  function handleChange(value){
    setValue(value)
  }
  const handleClick = () => {
    setSlider(!slider);
  };

  const {id} = useParams()

  const [prod, setProd] = useState()

  useEffect(() => {
    // loadProduct()
    axios.get(`http://localhost:8080/productos/${id}`)
    .then(res=> setProd(res.data))
  }, [])

  return (
    <div className='containerProductDetails'>
      <div className="containerProductName" style={{opacity: slider ? '0.3' : ''}}>
        <div style={{ width: "100vw" }}>
          <p>{prod?.categoria.titulo}</p>
          <h1>{prod?.titulo}</h1> 
        </div>
        <Link to={"/"}>
          <img className="flechaProduct" src={imgFlecha} alt="" />
        </Link>
      </div>
      <div className="divProductDetails" style={{opacity: slider ? '0.3' : ''}}>
        <div className="divProductDetails_City">
          <div>
            <img
              style={{ width: "15px", marginTop: "2px" }}
              src={logoGps}
              alt=""
            />
          </div>
          <div>
            <p style={{ color: "black" }}>
              {prod?.ciudad.nombre_ciudad}, {prod?.ciudad.nombre_pais}
            </p>
            <p style={{ color: "black" }}>A 940 m del centro</p>
          </div>
        </div>
        <div className="divProductDetails_Star">
          <div>
            <p style={{ color: "black" }}>{prod?.review}</p>
            <div>
              <svg
                className="stars"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                className="stars"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                className="stars" 
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                className="stars"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <svg
                className="stars"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#000000"
              >
                <path
                  d="M8.587 8.236l2.598-5.232a.911.911 0 011.63 0l2.598 5.232 5.808.844a.902.902 0 01.503 1.542l-4.202 4.07.992 5.75c.127.738-.653 1.3-1.32.952L12 18.678l-5.195 2.716c-.666.349-1.446-.214-1.319-.953l.992-5.75-4.202-4.07a.902.902 0 01.503-1.54l5.808-.845z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <span className="spanDetails">{prod?.puntuacion}</span>
        </div>
      </div>
      <div className="svgDetailProduct" style={{opacity: slider ? '0.3' : ''}}>
        <svg
          className="svgDetails"
          style={{ marginRight: "15px"}}
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M18 22a3 3 0 100-6 3 3 0 000 6zM18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M15.5 6.5l-7 4M8.5 13.5l7 4"
            stroke="#000000"
            stroke-width="1.5"
          ></path>
        </svg>

        <svg
          className="svgDetails"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <div className="divImagesDetails" style={{opacity: slider ? '0.15' : ''}}>
        <img
          className="imgPrincipalDetails"
          src={prod?.listImagen[0].url}
          alt="img"
        />
        <div className="imgColumnas">
          <img
            className="imgSecundariaDetails"
            src={prod?.listImagen[1].url}
            alt=""
          />
          <img
            className="imgSecundariaDetails"
            src={prod?.listImagen[2].url}
            alt=""
          />
          <img
            className="imgSecundariaDetails"
            src={prod?.listImagen[3].url}
            alt=""
          />
          <img
            className="imgSecundariaDetails"
            src={prod?.listImagen[4].url}
            alt=""
          />
        </div>
        <button onClick={handleClick} className="linkDetailCarousel">
          Ver más ...
        </button>
      </div>
      <div className="responsiveProductImages">
       <ProductSlider/>
      </div>
      <div style={{ marginLeft: "20px",opacity: slider ? '0.3' : '' }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bolder",marginBottom:'30px',marginTop:'30px'}}>
          {prod?.tituloDescripcion}
        </h2>
        <div className="productDescription">
          <p style={{color:'black'}}> {prod?.descripcion}</p>
          <p style={{color:'black'}}>Nuestros clientes dicen que esta parte de Buenos Aires es su favorita, según los comentarios independientes.
          </p>
          <p style={{color:'black'}}>El hotel es un hotel sofisticado de 4 estrellas que goza de una ubicacion tranquila,a poca distancia de prestigiosas Galerias
            de arte,teatros,museos y zonas comerciales.Además, hay Wifi gratuita.
          </p>
        </div>
        
      </div>
      <div style={{opacity: slider ? '0.3' : '' }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bolder",margin:'30px 0px 10px 20px'}}>
          ¿Que ofrece este lugar?
        </h2>
        <hr />
        <div className="productServices">
          <p style={{color:'black'}}>
            <span><img style={{height:"30px",width:"30px"}} src={prod?.caracteristicas[0].icono}></img></span>
            Wifi
            </p>
          <p style={{color:'black'}}>
          <span><img style={{height:"30px",width:"30px"}} src={prod?.caracteristicas[1].icono}></img></span>
            Pileata Climatizada</p>
          <p style={{color:'black'}}>
          <span><img style={{height:"25px",width:"40px"}} src={prod?.caracteristicas[2].icono}></img></span>
            Estacionamieto </p>
          <p style={{color:'black'}}>
          <span><img style={{height:"25px",width:"40px"}} src={prod?.caracteristicas[3].icono}></img></span>
            Apto Mascotas</p>
          <p style={{color:'black'}}>
          <span><img style={{height:"25px",width:"40px"}} src={prod?.caracteristicas[4].icono}></img></span>
            Aire acondicionado</p>
          <p style={{color:'black'}}>
          <span><img style={{height:"25px",width:"40px"}} src={prod?.caracteristicas[5].icono}></img></span>
            Television HD</p>
          <p style={{color:'black'}}>
          <span><img style={{height:"25px",width:"40px"}} src={prod?.caracteristicas[6].icono}></img></span>
            </p>
        </div>
      </div>
      <div style={{opacity: slider ? '0.3' : '' }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bolder",margin:'30px 0px 10px 20px'}}>
          Que tenes que saber
        </h2>
        <hr />
        <div >
          <div className="containerProductTerms">
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Normas de la casa</h3>
              <p style={{color:'black',}}>{prod?.politicaLugar}</p>
            </div>
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Salud y seguridad</h3>
              <p style={{color:'black',}}>{prod?.politicaSaludSeguridad}</p>
            </div>
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Politica de cancelacion</h3>
              <p style={{color:'black',}}>{prod?.politicaCancelacion}</p>
            </div>
          </div>
        </div>
        <div className="containerProductCalendar">
          <h2 className="h2Calendar">
            Fechas disponibles
          </h2>
          <div className="productCalendar">
            <Calendar
            value={value}
            onChange={handleChange}
            weekDays={weekDays}
            months={months}
            numberOfMonths={2}
            range
            disableMonthPicker
            disableYearPicker
            minDate={new Date()}
          />
          <div className="productReserve">
            <p style={{color:'black',fontWeight:'600'}}>Agrega tus fechas de viaje para obtener precios exactos</p>
            <button className="btnProduct">Iniciar reserva</button>
          </div> 
          </div>
          <div className="productCalendarMobile">
            <Calendar
            value={value}
            onChange={handleChange}
            weekDays={weekDays}
            months={months}
            numberOfMonths={1}
            range
            disableMonthPicker
            disableYearPicker
            minDate={new Date()}
          />
          <div className="moveProductReserve">
            <div className="productReserve">
                 <p style={{color:'black',fontWeight:'600'}}>Agrega tus fechas de viaje para obtener precios exactos</p>
                  <button className="btnProduct">Iniciar reserva</button>
            </div> 
          </div>
          
          </div>  
        </div>
        
      </div>
      
      {slider && (
        <div className="slider">
          <ProductSlider />
          <svg className="svgCloseSlider" onClick={handleClick} width="2vw" height="28px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" 
          color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000"
           stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
      )}
    </div>
  );
};

export default CardProductDetails;
