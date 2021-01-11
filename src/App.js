import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader/Loader';
const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /* webpackChunkName: "Home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /* webpackChunkName: "Movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "Movie-details-page" */
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
