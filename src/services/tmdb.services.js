import { tmdb, tmdb_paths } from "../core/APIS/tmdb.api";

export const getPopularMovies = async () => {
    const { data } = await tmdb.get(tmdb_paths.movies.popular);
    return (data.results);
  };

  export const getMovieDetails = async (id) => {
    const { data } = await tmdb.get(tmdb_paths.movies.details(id));
    // console.log(data);
    return (data);
  };