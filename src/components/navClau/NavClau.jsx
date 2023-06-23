import React, { useContext,  useState } from 'react';
import { useUser } from '../../core/auth/hooks/useUser';
import { UserContext } from '../../core/auth/context/UserContext';


// armado para probar el Login / Logout  
 

export const NavClau = () => {

    const {user, handleUserIn, handleUserOut} = useContext(UserContext);

    console.log(user);


  return (
    
    <div>
        <h1>Hola {user}</h1>
       <button
       onClick={handleUserIn}
       >Logueado {user}</button>
       
       <button
       onClick={handleUserOut}
       >No Logueado {!user}</button>
       <br></br>
       <br></br>
       <br></br>
    </div>
  )
}

export default NavClau