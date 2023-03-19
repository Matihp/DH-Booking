import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./booking.css";
import imgFlecha from "../../img/flecha-izquierda.png";
import { Link } from "react-router-dom";
import Input from "../../components/Actions/useInput";
import { Calendar } from "react-multi-date-picker";
import Dropdown from "../../components/Navbar/Dropdown/Dropdown";
import Stars from "../../components/CardProductsDetails/Stars/Stars";

const Booking = () => {
  const [value, setValue] = useState([]);
  const weekDays = ["D", "L", "M", "M", "J", "V", "S"];
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",];
  function handleChange(value) {
    setValue(value);
  }
  const time = [
    {
      id: 1,
      nombre_ciudad: "10:00PM",
    },
    {
      id: 2,
      nombre_ciudad: "11:00PM",
    },
    {
      id: 3,
      nombre_ciudad: "12:00PM",
    },
  ];
  return (
    <>
      <Header onChange={"home"} />
      <div className="containerBooking">
        <div className="containerProductName">
          <div style={{ width: "100vw" }}>
            <p>HOTEL</p>
            <h1>Hermitage Hotel</h1>
          </div>
          <Link to={"/"}>
            <img className="flechaProduct" src={imgFlecha} alt="" />
          </Link>
        </div>
        <div className="containerBookingFormDetails">
          <div>
            <div className="containerBookingForm">
              <h2 style={{ marginBottom: "14px" }}>Completá tus datos</h2>
              <form action="" className="bookingForm">
                <div className="containerBookingInput">
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    Nombre
                  </label>
                  <input className="bookingInput" type="text" disabled/>
                </div>
                <div className="containerBookingInput">
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    Apellido
                  </label>
                  <input className="bookingInput" type="text" disabled/>
                </div>
                <div className="containerBookingInput">
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    Email
                  </label>
                  <input className="bookingInput" type="text" disabled/>
                </div>
                <div className="containerBookingInput">
                  <label style={{ fontWeight: "bold" }} htmlFor="">
                    Ciudad
                  </label>
                  <input className="bookingInput" type="text" />
                </div>
              </form>
            </div>
            <div className="containerBookingCalendar">
              <h2 style={{ marginBottom: "14px" }}>
                Seleccioná tu fecha de reserva
              </h2>
              <div className="bookingCalendar">
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
              </div>
            </div>
            <div className="containerBookingTime">
              <h2 style={{ marginBottom: "14px" }}>Tu horario de llegada</h2>
              <div className="bookingTime">
                <h4
                  style={{
                    marginBottom: "14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg fill="#F0572D"version="1.1"id="Uploaded to svgrepo.com"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="2vw"height="3vh"viewBox="0 0 32 32"xml:space="preserve" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"stroke-linecap="round"
                    stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">{" "}<style type="text/css"> </style>{" "}<path class="bentblocks_een"
                    d="M16,4C9.373,4,4,9.373,4,16c0,6.627,5.373,12,12,12s12-5.373,12-12C28,9.373,22.627,4,16,4z M16,26 c-5.514,0-10-4.486-10-10c0-5.514,4.486-10,10-10s10,4.486,10,10C26,21.514,21.514,26,16,26z M23.429,12.172l-9.777,9.777 l-5.08-5.08l1.414-1.414l3.666,3.666l8.363-8.363L23.429,12.172z" ></path>{" "}</g>
                  </svg>
                  Tu habitacion va a estar lista para el check-in entre las
                  10:00 AM y 11:00 PM
                </h4>
                <p style={{ color: "black", marginBottom: "10px",fontWeight:'bold'}}>
                  Indica tu horario estimado de llegada
                </p>
                <Dropdown ciudad={time} />
              </div>
            </div>
            <div className="containerBookingTerms">
                <div className="backgBookingTerms">
                    <div style={{paddingTop:'40px'}}>
                      <h2 style={{marginLeft:'30px',marginBottom:'14px'}}>Que tenes que saber</h2>
                      <hr style={{marginBottom:'48px'}}/>
                      <div className="bookingTerms">
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
                    </div>
                </div>
            </div>
          <div className="containerBookingDetails">
            <h2 style={{textAlign:'center',margin:'20px'}}>Detalle de la reserva</h2>
            <img className="imgBookingDetails" src="https://media.revistagq.com/photos/5ca5f072501e5472ac7c591d/master/w_1600,c_limit/hotel_lujo_2934.jpg" alt="" />
            <div className="bookingDetails">
              <p style={{color:'gray',fontSize:'14px',fontWeight:'bold',marginLeft:'0.6px'}}>HOTEL</p>
              <h2 style={{marginTop:'-6px'}}>Hermitage Hotel</h2>
              <Stars/>
              <p style={{color:'black',display:'flex',marginTop:'20px',fontWeight:'bold',fontSize:'14px'}}>
                <svg fill="#000000" width="21px" height="19px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2a8,8,0,0,0-7.992,8A12.816,12.816,0,0,0,12,22v0H12v0a12.816,12.816,0,0,0,7.988-12A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path></g></svg>
                Av. Colón 1643, Buenos Aires, Ciudad Autónoma de Buenos Aires, Argentina
              </p>
              <hr style={{marginTop:'40px'}}/>
              <div className="bookingDetailsCheck">
                <p style={{color:'black'}}>Check in</p>
                <p style={{color:'black'}}>20/05/2022</p>
              </div>
              <hr style={{marginTop:'40px'}}/>
              <div className="bookingDetailsCheck">
                <p style={{color:'black'}}>Check out</p>
                <p style={{color:'black'}}>27/05/2022</p>
              </div>
              <hr style={{marginTop:'40px',marginBottom:'40px'}}/>
              <button className="btnBooking">Confirmar reserva</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
