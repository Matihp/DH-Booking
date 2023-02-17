import { useState } from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Body from './Components/Body'


function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
    
    <Header/>
    <Body/>
    <Footer/>

    </div>
  )
}

export default App
