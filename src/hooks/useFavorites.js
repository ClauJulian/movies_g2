import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext';
import { favoritesKey } from '../reducers/favoritesReducer';

export const useFavorites = () => {

    const {state, dispatch}= useContext(FavoritesContext);

    const addFavorite = async (favorite) =>{
        
        dispatch({
        type: "UPDATE_FAVORITES",
        payload: [...state.favorites, favorite],
        });
        localStorage.setItem(
            favoritesKey,
            JSON.stringify([...state.favorites, favorite]));
    };

    const removeFavorite = async(favorite) =>{
        const newFavorites = state.favorites.filter((f) => f !== favorite);

        dispatch({
        type: "UPDATE_FAVORITES",
        payload: newFavorites,
        });
        localStorage.setItem(
            favoritesKey, JSON.stringify(newFavorites)
        );

    };

    const clearFavorites = () => {
        localStorage.removeItem(favoritesKey);
      };

    const isFavorite = (favorite) => state.favorites.includes(favorite);

  return {
    
    favorites: state.favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
    isFavorite,
  }
}

export default useFavorites