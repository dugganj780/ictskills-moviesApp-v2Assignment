import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import CastAndCrewPage from './pages/castAndCrewPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import PageNumberContextProvider from "./contexts/pageNumberContext";
import AuthContextProvider from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import ActorProfilePage from './pages/actorProfilePage';
import LoginPage from "./pages/loginPage";
import LogoutPage from "./pages/logoutPage";
import PrivateRoute from "./components/privateRoute";


//comment
//Test

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <PageNumberContextProvider>
            
          {" "}
          <Switch>
            <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route path="/actor/:id" component={ActorProfilePage} />
            <Route path="/movies/:id/castandcrew" component={CastAndCrewPage} />
            <PrivateRoute path="/movies/favorites" component={FavoriteMoviesPage} />
            <PrivateRoute exact path="/movies/mustwatch" component={MustWatchMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/logout" component={LogoutPage}/>            
            <Route exact path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
          
          </PageNumberContextProvider>
        </MoviesContextProvider>
        
      </BrowserRouter>
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));