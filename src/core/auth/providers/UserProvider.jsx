import { useState } from "react";
import { UserContext } from "../context/UserContext";

const UserProvider = ({children}) => {

    // Cuando se defina el modelo de Login/Logout hay que cambiar de donde viene el user

    const [user,setUser] = useState(null);

    const handleUserIn=()=>{
        setUser("clau@yahoo.com"); 
        return user;          
    }
    const handleUserOut=()=>{
        setUser(null);        
        return user;        
    }

    return (
      <UserContext.Provider
        value={{
          user,
          handleUserIn,
          handleUserOut,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };
  export default UserProvider;