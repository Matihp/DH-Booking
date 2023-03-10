import React, { useState } from "react";
import Input from "../../components/Actions/useInput";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { useGlobalStates } from "../../context/GlobalContext";

const Login = () => {

  const [email, setEmail] = useState({ value: "", valid: null });
  const [password, setPassword] = useState({ value: "", valid: null });

  const [isFormValid, setIsFormValid] = useState(null);
  const [msgError, setMsgError] = useState("");

  const regularExpressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{7,30}$/,
  }
  const navigate=useNavigate();

  const {setData}=useGlobalStates()

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormValid(true);

    if (email.valid === 'true' && password.valid === 'true') {
      setData(true)
      navigate('/')
    }
      
  }

  return (
    <>
    <Header onChange={'login'}/>
    <div className='containerFormLogin'>
      <form className='formSignup'  onSubmit={handleSubmit}>
        <h1 style={{ color: '#f0572b', marginBottom: '30px', fontWeight:"bold" }}>Iniciar Sesión</h1>
        <div>
          <Input
            state={email}
            changeState={setEmail}
            label="Correo electrónico"
            type="email"
            id="email"
            name="email"
            error="Ingrese un correo electronico valido"
            regex={regularExpressions.email}
          />
          <Input
            state={password}
            changeState={setPassword}
            label="Contraseña"
            type="password"
            id="password"
            name="password"
            error="La contraseña debe tener entre 7 y 30 caracteres"
            regex={regularExpressions.password}
          />
          {isFormValid === false && (
            <p className='msgErrorForm'>
              {msgError
                ? msgError
                : "Por favor vuelva a intentarlo, sus credenciales son inválidas."}
            </p>
          )}
          <div className='containerBtnSignup'>
            
              <button type="submit" >
                Ingresar
              </button> 
            <p className='linkContainer' style={{color:'black'}}>
              ¿Aún no tenés cuenta?{" "}
              <Link to="/signup"className='linkAction'>
                Registrate
              </Link>
            </p>
          </div>
          
        </div>
      </form>
    </div>
    </>
  )
}

export default Login;
