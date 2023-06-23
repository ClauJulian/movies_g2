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
    //   videos: (id) => `/movie/${id}/videos`,
    //   recommendations: (id) => `/movie/${id}/recommendations`,
    }}  


    // const tmdb_api_key= "7e7762d08933bf498bffaf370494b5f6";
// const tmdb_api_token= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTc3NjJkMDg5MzNiZjQ5OGJmZmFmMzcwNDk0YjVmNiIsInN1YiI6IjY0OTMyNGNmYzI4MjNhMDBlMmU5ODM0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_Io2RdrrcuWVYrF3jmz6dmmIqan_mFod7660jaFRf4"