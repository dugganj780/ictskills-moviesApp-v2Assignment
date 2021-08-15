import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { AuthContext } from "../../contexts/authContext";


const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const auth = useContext(AuthContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    if(auth.isAuthenticated){
    context.addToFavorites(movie);
    }
  };
  return (
    <>
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
    </>
  );
};

export default AddToFavoritesIcon;