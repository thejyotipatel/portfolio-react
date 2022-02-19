import React, { useContext, useState } from 'react'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)

  const menuState = () => {
    if (menu) {
      return setMenu(false)
    }
    setMenu(true)
  }

  return (
    <AppContext.Provider value={{ menu, menuState }}>
      {children}
    </AppContext.Provider>
  )
}

export const useContextGlobal = () => {
  return useContext(AppContext)
}
