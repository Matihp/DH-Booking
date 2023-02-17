import React from 'react'
import '../Style/Home.css'
import Vector from '../../public/img/Vector.png'
import Linkedin from '../../public/img/Linkedin.png'
import instagram from '../../public/img/instagram.png'
import facebook from '../../public/img/facebook.png'


const Footer = () => {
  return (
    <div className='footer'>

        <p className='digitalBooking'>©2023 Digital Booking</p>

        <div className='socialFooter'>
            <img src={facebook} alt='facebook-logo' style={{margin:10, width: 25}}/>
            <img src={Linkedin} alt='facebook-logo' style={{margin:10, width: 25}}/>
            <img src={Vector} alt='facebook-logo' style={{margin:15, width: 30}}/>
            <img src={instagram} alt='facebook-logo' style={{margin:10, width: 25}}/>
        </div>     

    </div>
  )
}

export default Footer
