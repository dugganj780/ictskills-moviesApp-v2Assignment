import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import img from '../../images/film-poster-placeholder.png';
import { MoviesContext } from "../../contexts/moviesContext";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
    /*mustWatchAvatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },*/
  });

const CastItem = ({castMember}) => {
  const classes = useStyles();

  return (
    <>
<Link to={`/actor/${castMember.id}`}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={castMember.name} src={ castMember.profile_path
            ? `https://image.tmdb.org/t/p/w500/${castMember.profile_path}`: img }  />
        </ListItemAvatar>
        <ListItemText
          primary={castMember.name}
          secondary={castMember.character}
        />
      </ListItem>
      </ Link>

    </>
  );
};
export default CastItem;
