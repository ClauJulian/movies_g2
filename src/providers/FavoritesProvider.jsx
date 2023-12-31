import React, {useReducer, useEffect} from 'react';
import { FavoritesContext } from "../context/FavoritesContext";
import {
    FAVORITES_UPDATE,
    favoritesInitialState,
    favoritesKey,
    favoritesReducer,
  } from "../reducers/favoritesReducer";
  import { useAuth } from '../core/auth/hooks/useAuth';



const FavoritesProvider = ({children}) => {
    
    const { state: authState } = useAuth;
    const [state, dispatch] = useReducer(favoritesReducer, favoritesInitialState);

    useEffect(() => {
        const initialize = async () => {

          localStorage.removeItem(favoritesKey);
    
          const userId = authState?.user?.uid;
    
          if (!userId) return;
    
          const favorites = [];
    
          if (!favorites) return;
    
          dispatch({ type: FAVORITES_UPDATE, payload: favorites });
        };
    
        initialize();
      }, 
      [authState]
      );


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


