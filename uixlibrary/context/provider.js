import React, { useContext, useEffect, useState } from 'react';


export const myContext = React.createContext()


export const useChangeTheme = () => { 
  const { isDark, changeTheme } = useContext(myContext)
  return { isDark, changeTheme }
}


const Provider = ( props ) => {

  const [isDark, setIsDark] = useState(true)
  const [component, setComponent] = useState('')

 
  const changeTheme = () => {          
    setIsDark(!isDark);
    localStorage.setItem('UIX-theme', JSON.stringify(!isDark));
  } 
  
  const changeComponent = (component) => {
    setComponent(component)
  }

  useEffect(() => {    
    const isDarkLocal = JSON.parse(localStorage.getItem('UIX-theme'));
    setIsDark(isDarkLocal ?? true)      
  }, [])
  


  return (
    <myContext.Provider value={{
      isDark,
      changeTheme,
      component,
      changeComponent
    }}>
    {props.children}
    </myContext.Provider>
    
  )
}



export default Provider;