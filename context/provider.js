import React, { useEffect, useState } from 'react';
import { ApolloProvider } from "@apollo/client";

import { client } from "../lib/apolloClient";


export const myContext = React.createContext()

const Provider = ( props ) => {

  const [isDark, setIsDark] = useState(false)

 
  const changeTheme = () => {          
    setIsDark(!isDark);
    localStorage.setItem('darkTheme', JSON.stringify(!isDark));
  } 
  

  useEffect(() => {    
    const isDarkLocal = JSON.parse(localStorage.getItem('darkTheme')); 
    setIsDark(isDarkLocal)      
  }, [])
  


  return (
    <myContext.Provider value={{
      isDark,
      changeTheme,
    }}>
    {props.children}
    </myContext.Provider>
    
  )
}

export default ({ element }) => (
  <ApolloProvider client={ client }>    
      <Provider>
        {element}
      </Provider>   
  </ApolloProvider>
)