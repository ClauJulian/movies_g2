import React, { useContext,  useState } from 'react';
import { useUser } from '../../core/auth/hooks/useUser';
import { UserContext } from '../../core/auth/context/UserContext';
import {  Text, useTheme, Navbar, Link, Button } from '@nextui-org/react';
// import NavbarContent from '@nextui-org/react/types/navbar/navbar-content';


// armado para probar el Login / Logout  
 

export const Nav = () => {
  // estilos de next-ui
  const { theme } = useTheme();

  



    const {user, handleUserIn, handleUserOut} = useContext(UserContext);

    // console.log(user);
    const s = {
      link: {
        marginTop: "8px",
      },
    };

    const routes = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Popular",
        path: "/popular",
      },
      {
        name: "Now Playing",
        path: "/now_playing",
      },
      {
        name: "Upcoming",
        path: "/upcoming",
      },
      {
        name: "Top Rated",
        path: "/top_rated",
      },
    ];

  return (
    
    <Navbar 
      isBordered 
      variant="sticky"
      disableBlur
      css={{
        backdropFilter: "blur(20px)",
        height: "80px",
        width:"100%",
        marginBottom: "10px",
      }}
    >
      <Navbar.Brand>
        <h1> MOVIES APP </h1>
      </Navbar.Brand>
      <Navbar.Content variant="underline">
      
      {routes.map((route, i) => (
         <Navbar.Item>
                <Link to={route.path}>
                  <Text css={s.link} h4>
                    {route.name}
                  </Text>
                </Link>
          </Navbar.Item>
      ))}
      <Navbar.Content>
        <Button
        onPress={handleUserIn}
        >Logueado {user}</Button>
        
        <Button
        onPress={handleUserOut}
        >No Logueado {!user}</Button>
        </Navbar.Content>
      </Navbar.Content>
    </Navbar>
  )
}

export default Nav