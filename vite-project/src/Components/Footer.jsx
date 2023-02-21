import React from 'react'
import '../Style/Home.css'
import Twitter from '../img/Twitter.png'
import Linkedin from '../img/Linkedin.png'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'


const Footer = () => {
  return (
    <div className='footer'>

        <p style={{color:"white", marginLeft:"80px"}} className='digitalBooking'>©2023 Digital Booking </p>

        <div className='socialFooter'>
            <img src={facebook} alt='facebook-logo' style={{margin:10, width: 25}}/>
            <img src={Linkedin} alt='facebook-logo' style={{margin:10, width: 25}}/>
            <img src={Twitter} alt='facebook-logo' style={{margin:10, width: 25}}/>
            <img src={instagram} alt='facebook-logo' style={{margin:10, width: 25}}/>
        </div>     

    </div>
  )
}

export default Footer
