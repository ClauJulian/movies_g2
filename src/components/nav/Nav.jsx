import React, { useContext,  useState } from 'react';
import {  Text, useTheme, Navbar, Link, Button } from '@nextui-org/react';
import { useAuth } from '../../core/auth/hooks/useAuth';
import { signOut } from '../../services/firebase.services';
import { AUTH_LOGOUT } from '../../core/auth/reducers/authReducer';


export const Nav = () => {

  const { theme } = useTheme();

  const { state, dispatch } = useAuth();

  const handleLogout = async () => {
    await signOut();

    localStorage.clear();

    dispatch({
      type: AUTH_LOGOUT,
    });
  };


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
      
        { state.user && routes.map((route, i) => (
          <Navbar.Item>
                  <Link to={route.path}>
                    <Text css={s.link} h4>
                      {route.name}
                    </Text>
                  </Link>
            </Navbar.Item>
        ))}

        <Navbar.Content> 
          
            {state.user
              ? state.user.displayName || state.user.email
              : ""}
             
            {state.user
              ? (<Navbar.Item>
                <Button onPress={handleLogout} color="gradient" auto>
                Sign Out
                </Button>
                </Navbar.Item>)
              : ""}

        
        </Navbar.Content>
        

      </Navbar.Content>

    </Navbar>
  )
}

export default Nav