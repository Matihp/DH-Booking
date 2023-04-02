import React, { useState } from 'react'
import './getImages.css'
import Input from '../../Actions/useInput'

const GetImages = () => {
    const [img,setImg]=useState({ value: '', valid: null })
    const [descrip,setDescrip]=useState({ value: '', valid: null })
    const [images,setImages]=useState([])
    const regularExpressions = {
        url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,130}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
        text: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
      }
    function handleClick(){
        setImages([...images, { ...img, valid: 'true' }]);
        setImg({ value: '', valid: null });
        console.log(images)
    }
  return (
        <div style={{padding:'5px 25px 0px 25px'}}>
            <h3 >Cargar imágenes</h3>
            <div className='containerImgAdministration'>
                <div className='imgAdministration'>
                    <Input
                        state={img}
                        changeState={setImg}
                        type="text"
                        id="name"
                        name="text"
                        error="Sólo se permite url"
                        regex={regularExpressions.url}
                        />
                    <Input
                        state={descrip}
                        changeState={setDescrip}
                        type="text"
                        id="name"
                        name="text"
                        error="Sólo se permiten letras"
                        regex={regularExpressions.text}
                        />  
                </div>
                <svg onClick={handleClick} width="34px" height="54px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#F0572D" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                        {/* <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Add_Minus_Square"> <path id="Vector" d="M8 12H16M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#F0572D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg> */}
            </div>
            {
                images.map((image,i)=>{
                    return(
                        <div key={i}>
                            probando
                        </div>
                    )

                })
            }
        </div>
  )
}

export default GetImages