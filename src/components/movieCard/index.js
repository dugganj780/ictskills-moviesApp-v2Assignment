import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from "../../contexts/authContext";


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



export default function MovieCard({ movie,action }) {
  const classes = useStyles();
  const { favorites } = useContext(MoviesContext);
  const { mustWatch } = useContext(MoviesContext);
  const auth = useContext(AuthContext);

  if (favorites.find((id) => id === movie.id)) {
    movie.favorite = true;
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  }

  function AvatarSwitcher(){
    let avatar = null;


    if(movie.favorite === true && auth.isAuthenticated){
      avatar = <Avatar className={classes.avatar}>
      <FavoriteIcon />
    </Avatar>
    }
    else if(movie.mustWatch === true && auth.isAuthenticated){
      avatar = <Avatar className={classes.avatar}>
      <PlaylistAddCheckIcon />
    </Avatar>
    }
    else{
      avatar = null;
    }
    return avatar;
  }

  /*
          avatar={
          movie.favorite ? (
            <Avatar className={classes.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        mustWatchAvatar={
          movie.mustWatch ? (
            <Avatar className={classes.avatar}>
              <PlaylistAddCheckIcon />
            </Avatar>
          ) : null
        }
  */

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        avatar = {<AvatarSwitcher />}
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}