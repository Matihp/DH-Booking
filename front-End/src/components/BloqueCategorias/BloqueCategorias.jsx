import React from 'react'
import CardBloqueCategorias from '../CardBloqueCategorias/CardBloqueCategorias'
import categorias from '../../categorias.json'
import './BloqueCategorias.css'
import axios from 'axios'
import { useEffect,useState } from 'react'


const BloqueCategorias = () => {

    const [categoria, setCategoria] = useState([])

    useEffect(() =>  {
        loadCategorias()
    }, [])

    const loadCategorias = async () => {
        const data = await axios.get("http://localhost:8080/categorias")
        setCategoria(data.data)
    }

    // const loadCantidad = async () => {
    //     categoria.forEach(cat => {
    //         const data = (axios.get("http://localhost:8080/categorias/"`${cat.id}`))
    //         setCantidad(data.data)
    //         console.log(cantidad);
    //     });
    // }
    
    return (
        <div className='hola'>
            <span>
                <h2 style={{ marginLeft: "20px",padding:'10px' }}>Buscar por tipo de alojamiento</h2>
            </span>
            <div className='containerCategorias'>
                <div className='divCategorias'>
                {
                    categoria?.map(categoria => <CardBloqueCategorias key={categoria.id} categoria={categoria} />)
                }
                 </div>
            </div>
            

        </div>
    )
}

export default BloqueCategorias