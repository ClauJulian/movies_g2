import { NextUIProvider } from '@nextui-org/react'
import React from 'react'
import FavoritesProvider from '../../providers/FavoritesProvider'
import AuthProvider from '../auth/providers/AuthProvider'
import { dark_Theme } from '../themes/themes_nextui'


export const RooterProvider = ({children}) => {
  return (
    <NextUIProvider theme={dark_Theme}>
        <AuthProvider>     
        <FavoritesProvider>
          <div>{children}</div>
        </FavoritesProvider>
        </AuthProvider>
    </NextUIProvider>
  )
}

export default RooterProvider