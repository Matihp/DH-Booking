import { createContext,useContext,useState } from "react";

export const ContextGlobal = createContext();


export const ContextProvider = ({ children }) => {

  const [data,setData]=useState({id:0, first_name:"", last_name:"", email:"", token:"", valid: false});
  const [pressCategory,setPressCategory]=useState(false);
  const [category,setCategory]=useState(null);
  const [cities,setCities]=useState(null);
  const [pressBtn,setPressBtn]=useState(true);
  const [time,setTime]=useState(null)
  const [validateLogin,setValidateLogin]=useState(false)
  const [validateSvg,setValidateSvg]=useState(false)
  const [cat,setCat]=useState(null)

  return (
    <ContextGlobal.Provider
    value={{data,setData,pressCategory,setPressCategory,category,setCategory,cities,setCities,
      pressBtn,setPressBtn,time,setTime,validateLogin,setValidateLogin,validateSvg,setValidateSvg,cat,setCat}}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () =>{
  return useContext(ContextGlobal)
}