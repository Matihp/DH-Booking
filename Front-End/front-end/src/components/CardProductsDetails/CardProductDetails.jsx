import React, { useState } from "react";
import "./CardProductDetails.css";
import imgFlecha from "../../img/flecha-izquierda.png";
import logoGps from "../../img/logo-gps.png";
import { Link } from "react-router-dom";
import ProductSlider from "../ProductSlider/ProductSlider";
import { Calendar } from "react-multi-date-picker";
const CardProductDetails = () => {
  const [slider, setSlider] = useState(false);
  const [value, setValue] = useState([])
  function handleChange(value){
    setValue(value)
  }
  const handleClick = () => {
    setSlider(!slider);
  }; 
  return (
    <div className='containerProductDetails'>
      <div className="containerProductName" style={{opacity: slider ? '0.3' : ''}}>
        <div style={{ width: "100vw" }}>
          <p>HOTEL</p>
          <h1>Hermitage Hotel</h1>
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
              Buenos Aires, Ciudad Autonoma de Buenos Aires, Argentina
            </p>
            <p style={{ color: "black" }}>A 940 m del centro</p>
          </div>
        </div>
        <div className="divProductDetails_Star">
          <div>
            <p style={{ color: "black" }}>Muy bueno</p>
            <div>
              <svg
                width="1vw"
                height="24px"
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
                width="1vw"
                height="24px"
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
                width="1vw"
                height="24px"
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
                width="1vw"
                height="24px"
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
                width="1vw"
                height="24px"
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
          <span className="spanDetails">8</span>
        </div>
      </div>
      <div className="svgDetailProduct" style={{opacity: slider ? '0.3' : ''}}>
        <svg
          style={{ marginRight: "15px", height: "4vh" }}
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
          style={{ height: "4vh" }}
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
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/habitacion-hotel-revolve2-1546271048.jpeg"
          alt=""
        />
        <div className="imgColumnas">
          <img
            className="imgSecundariaDetails"
            src="https://media.ambito.com/p/d5069798a379128c4d48dc586dede974/adjuntos/239/imagenes/036/681/0036681204/2jpg.jpg"
            alt=""
          />
          <img
            className="imgSecundariaDetails"
            src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/61/37/613753900.jpeg"
            alt=""
          />
          <img
            className="imgSecundariaDetails"
            src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/33/18/331828796.jpeg"
            alt=""
          />
          <img
            className="imgSecundariaDetails"
            src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/73/21/732178900.jpeg"
            alt=""
          />
        </div>
        <button onClick={handleClick} className="linkDetailCarousel">
          Ver más ...
        </button>
      </div>
      <div style={{ marginLeft: "20px",opacity: slider ? '0.3' : '' }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bolder",marginBottom:'30px',marginTop:'30px'}}>
          Alojate en el corazón de Buenos Aires
        </h2>
        <div style={{display:'flex',flexDirection:'column',height:'18vh',justifyContent:'space-between',fontWeight:'600'}}>
          <p style={{color:'black'}}>Esta situado a solo unas calles de la avenida Alvear, de la avenida Quintana, del parque San Martin y del distrito de Recoleta.
          En las inmediaciones también hay varios lugares de interés,como la calle Florida, el centro comercial Galerias Pacifico, la zona de
          Puerto Madero,la plaza de Mayo y el palacio Municipal. 
        </p>
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
          <p style={{color:'black'}}>Cocina</p>
          <p style={{color:'black'}}>Estacionamiento gratuito</p>
          <p style={{color:'black'}}>Televisor</p>
          <p style={{color:'black'}}>Wifi</p>
          <p style={{color:'black'}}>Pileta</p>
          <p style={{color:'black'}}>Aire acondicionado</p>
          <p style={{color:'black'}}>Apto mascotas</p>
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
              <p style={{color:'black',marginBottom:'10px'}}>Check-out 10:00</p>
            </div>
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Salud y seguridad</h3>
              <p style={{color:'black',marginBottom:'10px'}}>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
            </div>
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Politica de cancelacion</h3>
              <p style={{color:'black',marginBottom:'10px'}}>Agrega las fechas de tu viaje para obtener los detalles de cancelacion de esta estadia</p>
            </div>
          </div>
        </div>
        <div className="containerProductCalendar">
          <h2 style={{ fontSize: "2rem", fontWeight: "bolder",margin:'30px 0px 30px 20px',paddingTop:'15px'}}>
            Fechas disponibles
          </h2>
          <div className="productCalendar">
            <Calendar
            value={value}
            onChange={handleChange}
            numberOfMonths={2}
            range
            disableMonthPicker
            disableYearPicker
          />
          <div className="productReserve">
            <p style={{color:'black',fontWeight:'600'}}>Agrega tus fechas de viaje para obtener precios exactos</p>
            <button className="btnProduct">Iniciar reserva</button>
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
