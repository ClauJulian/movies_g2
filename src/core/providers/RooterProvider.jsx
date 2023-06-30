import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import UserProvider from '../auth/providers/UserProvider'
import { dark_Theme } from '../themes/themes_nextui'
// RooterProvider - lleva todas las librerias de estilos, contextos y redux

export const RooterProvider = ({children}) => {
  return (
    <NextUIProvider theme={dark_Theme}>
      <UserProvider>
        <div>{children}</div>
      </UserProvider>
    </NextUIProvider>
  )
}

export default RooterProvider