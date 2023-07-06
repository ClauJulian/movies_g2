import React, {useReducer, useEffect} from 'react';
import { FavoritesContext } from "../context/FavoritesContext";
import {
    FAVORITES_UPDATE,
    favoritesInitialState,
    favoritesKey,
    favoritesReducer,
  } from "../reducers/favoritesReducer";
import { useUser } from '../core/auth/hooks/useUser';



const FavoritesProvider = ({children}) => {
    
    const { state: user } = useUser();
    const [state, dispatch] = useReducer(favoritesReducer, favoritesInitialState);

    useEffect(() => {
        const initialize = async () => {
          localStorage.removeItem(favoritesKey);
    
          const userId = user;
    
          if (!userId) return;
    
        //   const favorites = await getFavorites(userId);
        const favorites = [];
    
          if (!favorites) return;
    
          dispatch({ type: FAVORITES_UPDATE, payload: favorites });
        };
    
        initialize();
      }, [user]);


    return (
        <FavoritesContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          {children}
        </FavoritesContext.Provider>
      );
}

export default FavoritesProvider