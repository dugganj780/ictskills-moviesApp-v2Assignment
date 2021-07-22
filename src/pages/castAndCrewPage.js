import React from "react";
import { withRouter } from "react-router-dom";
import CastList from "../components/castList";
import PageTemplate from "../components/templateMoviePage";
//import useMovie from "../hooks/useMovie";
//import { getMovie } from '../api/tmdb-api';
import { getCast } from '../api/tmdb-api';
import { getMovie } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const CastAndCrewPage = (props) => {
  const { id } = props.match.params
  //const {movie, castMembers} = props.location.state

  const { data: castMembers, errorCast, isLoadingCast, isErrorCast } = useQuery(
    ["castMembers", { id: id }],
    getCast
    
  );
  console.log(castMembers);

 const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isLoadingCast) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isErrorCast) {
    return <h1>{errorCast.message}</h1>;
  }



  /*if (isLoadingCast) {
    return <Spinner />;
  }

  if (isErrorCast) {
    return <h1>{error.message}</h1>;
  }*/

  return (
    <>
      {castMembers ? (
        <>
          <PageTemplate movie={movie}>
            <CastList castMembers={castMembers.cast} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(CastAndCrewPage);