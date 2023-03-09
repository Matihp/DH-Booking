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
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
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
          <span className="spanDetails">8</span>
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
      <div className="responsiveProductImages">
       <ProductSlider/>
      </div>
      <div style={{ marginLeft: "20px",opacity: slider ? '0.3' : '' }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bolder",marginBottom:'30px',marginTop:'30px'}}>
          Alojate en el corazón de Buenos Aires
        </h2>
        <div className="productDescription">
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
          <p style={{color:'black'}}>
          <svg className="svgProductServices" fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 2C9.45 2 9 2.45 9 3L9 6.4902344L2.4199219 11.189453C2.1599219 11.369453 2 11.68 2 12L2 16C2 16.55 2.45 17 3 17L25 17C25.55 17 26 16.55 26 16L26 12C26 11.68 25.840078 11.369453 25.580078 11.189453L19 6.4902344L19 3C19 2.45 18.55 2 18 2L10 2 z M 6.9882812 22C6.4392812 22 5.9902344 22.45 5.9902344 23L5.9902344 24L1.9980469 24C1.4490469 24 1 24.45 1 25L1 47C1 47.55 1.4490469 48 1.9980469 48L25.808594 48C26.437594 48 26.945312 47.489375 26.945312 46.859375L26.945312 25.082031C26.945312 24.484031 26.462234 24 25.865234 24L21.955078 24L21.955078 23.134766C21.955078 22.507766 21.448266 22 20.822266 22L6.9882812 22 z M 30.085938 24C30.018937 23.998 29.591391 23.994938 29.275391 24.335938C29.030391 24.599938 29.005 24.91 29 25L29 32L49 32L49 25C49 24.45 48.550953 24 48.001953 24L45.90625 24L36.925781 24L30.085938 24 z M 5.9902344 28L21.957031 28C22.506031 28 22.955078 28.45 22.955078 29L22.955078 43C22.955078 43.55 22.506031 44 21.957031 44L5.9902344 44C5.4412344 44 4.9921875 43.55 4.9921875 43L4.9921875 29C4.9921875 28.45 5.4412344 28 5.9902344 28 z M 32.933594 28L44.908203 28C45.457203 28 45.90625 28.45 45.90625 29C45.90625 29.55 45.457203 30 44.908203 30L32.933594 30C32.384594 30 31.935547 29.55 31.935547 29C31.935547 28.45 32.384594 28 32.933594 28 z M 6.9882812 30L6.9882812 42L20.958984 42L20.958984 30L6.9882812 30 z M 29 34L29 47C29.002 47.083 29.018578 47.402828 29.267578 47.673828C29.575578 48.007828 29.992641 48.002 30.056641 48L48.001953 48C48.550953 48 49 47.55 49 47L49 34L29 34 z M 32.933594 37C33.482594 37 33.931641 37.45 33.931641 38L33.931641 43C33.931641 43.55 33.482594 44 32.933594 44C32.384594 44 31.935547 43.55 31.935547 43L31.935547 38C31.935547 37.45 32.384594 37 32.933594 37 z"></path></g></svg>
            Cocina</p>
          <p style={{color:'black'}}>
          <svg className="svgProductServices" version="1.2"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-351 153 256 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-223.4,158.8l-120.5,60.7v183.1h9.6V225.3l110.9-55.6l111,55.8v177.1h9.4V219.5L-223.4,158.8z M-149.7,303.5l-14.8-38.2 c-2.7-7.2-8.8-13.5-20.3-13.5h-20.9h-35.7h-21.1c-11.3,0-17.3,6.2-20.3,13.5l-14.8,38.2c-5.8,0.8-16.2,7.6-16.2,20.6v48.6h14.4v15.6 c0,19.1,27.1,19,27.1,0v-15.6h48.8h48.8v15.6c0,19,27.1,19.1,27.1,0v-15.6h14.4v-48.6C-133.5,311.1-143.8,304.1-149.7,303.5z M-285.5,343.4c-6.8,0-12.5-5.8-12.5-12.9c0-7,5.6-12.9,12.5-12.9c6.8,0,12.5,5.8,12.5,12.9C-273,337.6-278.5,343.4-285.5,343.4z M-223.7,303.1h-58.5l11.1-30.1c1.3-4.3,3.5-7.2,8.4-7.4h39h39c4.9,0,7,3.1,8.4,7.4l11.1,30.1H-223.7z M-161.7,343.4 c-6.8,0-12.5-5.8-12.5-12.9c0-7,5.6-12.9,12.5-12.9s12.5,5.8,12.5,12.9C-149.2,337.6-154.9,343.4-161.7,343.4z"></path> </g></svg>
            Estacionamiento gratuito</p>
          <p style={{color:'black'}}>
            <svg className="svgProductServices" version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .puchipuchi_een </style> <path class="puchipuchi_een" d="M29,7H18.414l2.293-2.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L16,6.586 l-3.293-3.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L13.586,7H3C1.9,7,1,7.9,1,9v18c0,1.1,0.9,2,2,2h26 c1.1,0,2-0.9,2-2V9C31,7.9,30.1,7,29,7z M23,26c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1V10c0-0.55,0.45-1,1-1h18c0.55,0,1,0.45,1,1 V26z M27,19c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C29,18.105,28.105,19,27,19z M27,13c-1.105,0-2-0.895-2-2 c0-1.105,0.895-2,2-2s2,0.895,2,2C29,12.105,28.105,13,27,13z M28,11c0,0.552-0.448,1-1,1s-1-0.448-1-1c0-0.552,0.448-1,1-1 S28,10.448,28,11z M28,17c0,0.552-0.448,1-1,1s-1-0.448-1-1c0-0.552,0.448-1,1-1S28,16.448,28,17z"></path> </g></svg>
            Televisor</p>
          <p style={{color:'black'}}>
          <svg className="svgProductServices" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.364,3a1,1,0,0,1-1,1A15.381,15.381,0,0,0,4,19.363a1,1,0,0,1-2,0A17.384,17.384,0,0,1,19.364,2,1,1,0,0,1,20.364,3ZM7.909,20.363a1,1,0,0,0,1-1A10.467,10.467,0,0,1,19.364,8.909a1,1,0,1,0,0-2A12.469,12.469,0,0,0,6.909,19.363,1,1,0,0,0,7.909,20.363Zm5.909-1a5.552,5.552,0,0,1,5.546-5.545,1,1,0,0,0,0-2,7.554,7.554,0,0,0-7.546,7.545,1,1,0,0,0,2,0Zm7.182,0A1.637,1.637,0,1,0,19.364,21,1.637,1.637,0,0,0,21,19.364Z"></path></g></svg>
            Wifi</p>
          <p style={{color:'black'}}>
            <svg className="svgProductServices" viewBox="0 0 15 15" version="1.1" id="swimming" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="path16388" d="M10.1113,2C9.9989,2,9.6758,2.1465,9.6758,2.1465L6.3535,3.8262
            C5.9111,4.0024,5.7358,4.7081,6.002,5.0605l0.9707,1.4082L3.002,8.498L5,9.998l2.502-1.5l2.5,1.5l1.002-1.002l-3-4l2.5566-1.5293
            c0.5286-0.2662,0.4434-0.7045,0.4434-0.9707C10.9999,2.2861,10.6437,2,10.1113,2z M12.252,5C11.2847,5,10.5,5.7827,10.5,6.75
            s0.7847,1.752,1.752,1.752s1.75-0.7847,1.75-1.752S13.2192,5,12.252,5z M2.5,10L0,11.5V13l2.5-1.5L5,13l2.502-1.5l2.5,1.5L12,11.5
            l3,1.5v-1.5L12,10l-1.998,1.5l-2.5-1.5L5,11.5L2.5,10z"></path> </g></svg>
            Pileta</p>
          <p style={{color:'black'}}>
            <svg className="svgProductServices" fill="#000000" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Snowflake"> <polygon points="230.639 241.344 230.639 270.656 256 285.309 281.361 270.656 281.361 241.344 256 226.691 230.639 241.344"></polygon> <path d="M452.5593,318.2155,409.824,329.6213l-28.5187-16.496L422.55,302.0666a13.1319,13.1319,0,1,0-6.8426-25.3567L349.016,294.5213l-1.8424-1.05V218.5327l1.8424-1.054L415.7069,235.29a11.5536,11.5536,0,0,0,3.4191.527,13.2788,13.2788,0,0,0,12.7255-9.8291,13.1119,13.1119,0,0,0-9.302-16.0589l-41.2442-11.0544,28.5187-16.496,42.7353,11.4058a11.4575,11.4575,0,0,0,3.4234.437,13.1174,13.1174,0,0,0,3.3335-25.7937L424.1305,158.95l9.3877-35.2756a13.1228,13.1228,0,1,0-25.3609-6.757l-11.4958,42.6453-28.5187,16.496,11.0587-41.24a13.1644,13.1644,0,1,0-25.4467-6.7569l-17.9013,66.6008-1.8424,1.0541-64.8485-37.3838v-2.1937l48.79-48.7895a13.1536,13.1536,0,0,0-18.6041-18.6l-30.1855,30.1855V85.9394l31.24-31.24a13.1536,13.1536,0,1,0-18.6041-18.6L256,61.8981,230.2022,36.1a13.1536,13.1536,0,0,0-18.6041,18.6l31.24,31.24v32.9962L212.6522,88.75a13.1536,13.1536,0,1,0-18.6041,18.6l48.79,48.7895v2.1937l-64.8484,37.3838-1.8424-1.0541L158.2454,128.062a13.1643,13.1643,0,1,0-25.4466,6.7569l11.0544,41.24-6.23-3.5948-22.2888-12.9012-11.4058-42.6453a13.1643,13.1643,0,0,0-25.4466,6.757L87.87,158.95l-35.1857,9.3877a13.1667,13.1667,0,0,0,3.3335,25.8837,11.475,11.475,0,0,0,3.4234-.437l42.731-11.4058,22.2888,12.8968,6.23,3.5992-41.24,11.0544a13.1086,13.1086,0,0,0-9.302,16.0589,13.2787,13.2787,0,0,0,12.7255,9.8291,11.5536,11.5536,0,0,0,3.4191-.527l66.6909-17.8114,1.8424,1.054v74.9389l-1.8424,1.05L96.2934,276.62a13.2924,13.2924,0,0,0-16.1446,9.392,13.1041,13.1041,0,0,0,9.302,16.0546l41.24,11.0587-28.5187,16.496L59.441,318.2155a13.1228,13.1228,0,0,0-6.7569,25.361L87.87,353.05l-9.3877,35.19a13.0879,13.0879,0,0,0,9.302,16.1447,11.43,11.43,0,0,0,3.4191.437,13.092,13.092,0,0,0,12.64-9.739l11.4915-42.6453,28.5187-16.496-11.0544,41.24a13.1067,13.1067,0,0,0,9.302,16.059,11.5608,11.5608,0,0,0,3.4235.527,13.2774,13.2774,0,0,0,12.7211-9.8291l17.9014-66.6008,1.8424-1.0541,64.8484,37.3838v2.1937l-48.79,48.79a13.1536,13.1536,0,1,0,18.6041,18.6l30.1854-30.1855v32.9962L211.5981,457.3a13.1536,13.1536,0,1,0,18.6041,18.6L256,450.1019l25.798,25.798a13.1371,13.1371,0,0,0,18.6041,0,13.081,13.081,0,0,0,0-18.6l-31.24-31.2395V393.0644L299.3481,423.25a13.1371,13.1371,0,0,0,18.6041,0,13.081,13.081,0,0,0,0-18.6l-48.79-48.79v-2.1937l64.8485-37.3838,1.8424,1.0541,17.9013,66.6008a13.27,13.27,0,0,0,12.7212,9.8291A15.36,15.36,0,0,0,369.9,393.33a13.2453,13.2453,0,0,0,9.302-16.1489l-11.0587-41.24,28.5187,16.496,11.4958,42.6453a13.0132,13.0132,0,0,0,12.6355,9.739,11.44,11.44,0,0,0,3.4234-.437,13.04,13.04,0,0,0,9.302-16.059L424.1305,353.05l35.1857-9.4734a13.1228,13.1228,0,0,0-6.7569-25.361ZM307.6861,278.2867a12.9077,12.9077,0,0,1-6.5813,11.32l-38.5234,22.2888a13.2063,13.2063,0,0,1-13.1625,0l-38.5235-22.2888a12.9078,12.9078,0,0,1-6.5812-11.32V233.709a13.1567,13.1567,0,0,1,6.5812-11.4058l38.5235-22.1988a13.0748,13.0748,0,0,1,13.1625,0l38.5234,22.1988a13.1566,13.1566,0,0,1,6.5813,11.4058Z"></path> </g> </g></svg>
            Aire acondicionado</p>
          <p style={{color:'black'}}>
          <svg className="svgProductServices" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0  </style> <g> <path class="st0" d="M124.755,221.208l4.234,5.813l131.516-101.828c-38.656-49.891-68.422-88.453-68.422-88.453 c-7.359-10.016-17.484-8.922-22.578,2.391l-5.969,13.313c-5.063,11.313-19.109,18.344-31.188,15.594L18.552,42.317 C6.474,39.583-1.729,47.333,0.317,59.567l8.609,51.094c2.031,12.219,13.625,24.359,25.75,27l63.672,13.75 c12.125,2.625,11.875,4.453-0.5,4.109l-35.531-1.094c-12.391-0.344-18.141,8.234-12.766,19.094 c5.375,10.891,19.75,21.594,31.922,23.875l7.891,1.453C101.552,201.114,117.474,211.161,124.755,221.208z"></path> <path class="st0" d="M508.317,245.27c-4.313-18.094-12.516-9.297-15.938-3.094c-2.781,5.047-28.703,58.297-69.813,90.344 c-25.094-31.031-86.219-109.531-139.219-177.859L150.802,257.286l17.188,24.531c-20,53.641-59.109,164.437-59.109,164.437 c-4.953,13.953,2.406,29.297,16.484,34.297c14.016,5.031,27.109-2.469,33.156-16.656l56.328-115.14l18.453,26.313 c-7,7.703-11.516,17.75-11.719,28.938l-0.25,12.078c-1.063,0-2.156,0-3.156,0c-58.469,0-61.719,64.953-3.25,64.953 c16.25,0,94.203,0,94.203,0s26,0,87.703,0c60.813,0,79.938-47.406,60.828-96.015C481.427,360.598,524.896,305.833,508.317,245.27z"></path> </g> </g></svg>
            Apto mascotas</p>
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
              <p style={{color:'black',}}>Check-out 10:00</p>
            </div>
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Salud y seguridad</h3>
              <p style={{color:'black',}}>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
            </div>
            <div className="productTerms">
              <h3 style={{marginBottom:'15px'}}>Politica de cancelacion</h3>
              <p style={{color:'black',}}>Agrega las fechas de tu viaje para obtener los detalles de cancelacion de esta estadia</p>
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
