import { createContext, useEffect, useState } from "react";

export const MyContext = createContext({});

import React from 'react'

const ContextProvider = ({children}) => {
    const url = '/pizzas.json'
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [pizzas, setPizzas] = useState([])

    const getData = async () => {
      const res = await fetch(url);
      const data = await res. json();
      setPizzas([...data]);
    }

    useEffect(()=> {
      getData();
    },
      []
    )    
    
    console.log(pizzas)

  return (
    <MyContext.Provider value={{ amount, setAmount, quantity, setQuantity, pizzas, setPizzas }}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextProvider;