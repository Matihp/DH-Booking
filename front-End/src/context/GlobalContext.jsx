import { createContext,useContext,useState } from "react";

export const ContextGlobal = createContext();


export const ContextProvider = ({ children }) => {

  const [data,setData]=useState(false);
  const [pressCategory,setPressCategory]=useState(false);
  const [category,setCategory]=useState(null);
  const [cities,setCities]=useState(null);
  const [pressBtn,setPressBtn]=useState(true);
  const [time,setTime]=useState(null)

  return (
    <ContextGlobal.Provider
    value={{data,setData,pressCategory,setPressCategory,category,setCategory,cities,setCities,pressBtn,setPressBtn,time,setTime}}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () =>{
  return useContext(ContextGlobal)
}