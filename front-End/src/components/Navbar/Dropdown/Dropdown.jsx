import React, { useState } from 'react'
import './dropdown.css'

const Dropdown = ({ciudad}) => {
    const [option,setOption]=useState(null)
    const [open,setOpen]=useState(false)

    function handleClick(e){
        setOpen(!open)
      }
      let cities = option
      ? `${option.nombre_ciudad}`
      : '¿A dónde vamos?';
  return (
    <div className='dropdown'>
        <div className='dropdown-btn'onClick={handleClick}>
            <div style={{display:'flex',alignItems:'center'}}>
                <svg fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12,2a8,8,0,0,0-7.992,8A12.816,12.816,0,0,0,12,22v0H12v0a12.816,12.816,0,0,0,7.988-12A8,8,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path></g></svg>
                {cities}
            </div>
            <svg style={{paddingLeft:'10px'}} width="34px" height="34px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 10.5L12.5 15L8 10.5" stroke="#121923" stroke-width="1.2"></path> </g></svg>
        </div>
        {open && (
            <div className='dropdown-content'>
            {/* options*/}
            {ciudad?.map((data) => (
                <div
                className='dropdown-item'
                onClick={()=>{
                  setOption(data)
                  setOpen(false)  
                }}
                key={data.id}
                >
                    {data.nombre_ciudad}
                </div>
            ))}
            </div>
        )}    
    </div>
    
  )
}

export default Dropdown