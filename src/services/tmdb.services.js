import { tmdb, tmdb_paths } from "../core/APIS/tmdb.api";

export const getPopularMovies = async () => {
    const { data } = await tmdb.get(tmdb_paths.movies.popular);
    return (data.results);
  };
  export const getTopRated = async () => {
    const { data } = await tmdb.get(tmdb_paths.movies.topRated);
    return (data.results);
  };
  export const getUpcomingMovies = async () => {
    const { data } = await tmdb.get(tmdb_paths.movies.upcoming);
    return (data.results);
  };
  export const nowPlayingMovies = async () => {
    const { data } = await tmdb.get(tmdb_paths.movies.nowPlaying);
    return (data.results);
  };

  export const getMovieDetails = async (id) => {
    const { data } = await tmdb.get(tmdb_paths.movies.details(id));
    // console.log(data);
    return (data);
  };