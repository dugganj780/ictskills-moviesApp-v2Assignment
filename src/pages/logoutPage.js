import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import LoginForm from "../components/loginForm";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getMovies } from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const LogoutPage = () => {
    const context = useContext(AuthContext);
    context.signout();


  return (
    <h3>
        You have successfully logged out
        </h3>
  );
};

export default LogoutPage;