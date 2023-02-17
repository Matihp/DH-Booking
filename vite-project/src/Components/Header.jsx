import React from 'react'
import { Link } from 'react-router-dom'
import logoHeader from '../../public/img/logoHeader.png'
import '../Style/Home.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to = {"/"} > <img className='imgHeader' alt="LogoHeader" src={logoHeader}/> </Link>

      <div className='divButton'>
        <button className='buttonHeader'>Crear Cuenta</button>
        <button className='buttonHeader'>Iniciar Sesion</button>
      </div>
    </div>
  )
}

export default Header

// const Header = () => {
//     return (
//       <header className={style.header}>
//         <nav className={style.nav}>
//           <div className={style.containerLeft}>
//             <Link to="/" aria-label="Página de inicio de Digital Booking">
//               <img src={logo} alt="logo" />
//             </Link>
//             <span className={style.motto}>Sentite como en tu hogar</span>
//           </div>
//           <Menu />
//         </nav>
//       </header>
//     );
//   };
  
//   export default Header;
