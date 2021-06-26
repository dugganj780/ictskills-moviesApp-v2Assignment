import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch';

/*
To complete Exercise 1 I edited my Upcoming Movies page to match the Home Page.
I also updated the API call for getUpcomingMovies.
This also completed Exercise 3. I am adding this comment so that I can save the changes and push to git.
*/

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies)


  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;

  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  

  
  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
  );
};
export default UpcomingMoviesPage;