import React from 'react'
// RooterProvider - lleva todas las librerias de estilos, contextos y redux

export const RooterProvider = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default RooterProvider