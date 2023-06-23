import React from 'react'
import NavClau from '../../../components/navClau/NavClau'

export const PublicLayouts = ({children}) => {
  return (
    <div>
        <NavClau/>
        {children}
    </div>
  )
}

export default PublicLayouts