import axios from "axios";


export const tmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: process.env.REACT_APP_TMDB_KEY,
      language: "es-ES",
    },
  });

  export const tmdb_paths = {
    movies: {
      popular: "/movie/popular",
      topRated: "/movie/top_rated",
      upcoming: "/movie/upcoming",
      nowPlaying: "/movie/now_playing",
      details: (id) => `/movie/${id}`,
    
    },
    images: {
      url: "https://image.tmdb.org/t/p",
      sizes: {
        small: "/w300",
        medium: "/w500",
        large: "/w1280",
        original: "/original",
      },
      poster: (path, size = "large") => {
        return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
      },
      backdrop: (path, size = "large") => {
        return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
      },
    },
  
  }  


    