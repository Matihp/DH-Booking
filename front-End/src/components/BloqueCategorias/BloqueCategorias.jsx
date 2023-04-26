import React from 'react'
import CardBloqueCategorias from '../CardBloqueCategorias/CardBloqueCategorias'
import './BloqueCategorias.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import endpoint from '../../utils/endpoint.json'
import { useGlobalStates } from '../../context/GlobalContext'
import LoadingCat from '../Loading/LoadingCat'

const BloqueCategorias = () => {

    const [categoria, setCategoria] = useState([])
    const {categorias, setCategorias} = useGlobalStates()
    const [isReady,setIsReady]=useState(false)
    const [loading,setLoading]=useState(true)

    useEffect(() =>  {
        loadCategorias()
    }, [])

    const loadCategorias = async () => {
        try {
           const data = await axios.get(`${endpoint.url}/categorias`)
           setLoading(false)
           setIsReady(true)
           setCategoria(data.data)
           setCategorias(data.data)
          } catch (err) {
            return setLoading(true)
          }
        
    }
    
    return (
        <div className='hola'>
            <span>
                <h2 style={{ marginLeft: "20px",padding:'10px' }}>Buscar por tipo de alojamiento</h2>
            </span>
            <div className='containerCategorias'>
                <div className='divCategorias'>
                    {
                        isReady && (

                         categoria?.map(categoria => <CardBloqueCategorias key={categoria.id} categoria={categoria} />)   

                        )
                    }
                    {
                        loading && (    
                           <LoadingCat/> 
                        )
                    }
                 </div>
            </div>
            

        </div>
    )
}

export default BloqueCategorias