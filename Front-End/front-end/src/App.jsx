import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BloqueCategorias from './components/BloqueCategorias/BloqueCategorias';
import BloqueRecomendaciones from './components/BloqueRecomendaciones/BloqueRecomendaciones';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/login';
import Signup from './pages/Signup/signup';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
