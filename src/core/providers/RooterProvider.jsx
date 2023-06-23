import React from 'react'
import UserProvider from '../auth/providers/UserProvider'
// RooterProvider - lleva todas las librerias de estilos, contextos y redux

export const RooterProvider = ({children}) => {
  return (
    <UserProvider>
      <div>{children}</div>
    </UserProvider>
  )
}

export default RooterProvider