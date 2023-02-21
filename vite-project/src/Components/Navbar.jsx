import React from 'react'

const Navbar = () => {
    return (
        <div className='navBar'>
            <h1 style={{color:"white"}}>Busca ofertas en hoteles, casas y mucho más</h1>
            <form>
                <select className='selectNavBar'>
                    <option value="option 1" >¿A dónde vamos?</option>
                </select>
                <select className='selectNavBar'>
                    <option value="option 1" >Check in - Check out</option>
                </select>
                <button className='buttonNavBar'>Buscar</button>
            </form>
        </div>
    )
}

export default Navbar