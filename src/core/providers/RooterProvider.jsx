import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import FavoritesProvider from '../../providers/FavoritesProvider'
import UserProvider from '../auth/providers/UserProvider'
import { dark_Theme } from '../themes/themes_nextui'
import AuthProvider from "../../auth/context/AuthProvider";
// RooterProvider - lleva todas las librerias de estilos, contextos y redux
// el UserProvider lleva la autorizacion de logueado

export const RooterProvider = ({children}) => {
  return (
    <NextUIProvider theme={dark_Theme}>
      <UserProvider>
      <AuthProvider>
        <FavoritesProvider>
          <div>{children}</div>
        </FavoritesProvider>
        </AuthProvider>
      </UserProvider>
    </NextUIProvider>
  )
}

export default RooterProvider