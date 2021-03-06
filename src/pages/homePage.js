import React, { useContext, useEffect, useState } from "react";
import { PageNumberContext } from "../contexts/pageNumberContext";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getMovies } from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { AuthContext } from "../contexts/authContext";

const HomePage = () => {

  const context = useContext(PageNumberContext);
  const auth = useContext(AuthContext);
  console.log(context);
  
  const pageNumber  = context.pageNumber;

  const { data: data, error, isLoading, isError, refetch } = useQuery(
    ["data", { pageNumber: pageNumber }],
    getMovies
  );
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  const movies = data.results;
  //console.log(movies);

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return auth.isAuthenticated ? (<AddToFavoritesIcon movie={movie} />) : (null)
      }}
    />
  );
};

export default HomePage;