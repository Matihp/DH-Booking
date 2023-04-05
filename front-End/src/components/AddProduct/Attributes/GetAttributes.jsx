import React from 'react'
import './getAttributes.css'

const GetAttributes = () => {
  return (
    <>
    <h3 style={{paddingTop:'30px',paddingBottom:'10px',paddingLeft:'30px'}}>Agregar atributo</h3>
    <div className='containerAttributes'>
        
        <div className='attributes'>
            <input type="checkbox" name="wifi" id="1" />              
            <input type="checkbox" name="wifi" id="2" />              
            <input type="checkbox" name="wifi" id="3" />              
            <input type="checkbox" name="wifi" id="4" />              
        </div>
    </div>
    </>
    
  )
}

export default GetAttributes