import React from 'react'
import Nav from '../../../components/nav/Nav'

export const PublicLayouts = ({children}) => {
  return (
    <div>
        <Nav/>
        <div>
          {children}
        </div>
    </div>
  )
}

export default PublicLayouts