import React, { Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { Sidebar } from './components/Sidebar';
import { GlobalStyle } from './styles/GlobalStyles';
import { Album } from './pages/Album';
import { NotFound } from './pages/NotFound';

// Redux
import { useAppSelector } from './app/hooks';
import { selectAuth } from './features/auth/authSlice';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));

export const App = () => {
  const { isAuth } = useAppSelector(selectAuth);

  return (
    <>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <Sidebar />
        <Router>
          <NotFound default />
          {isAuth && <Redirect from="/login" to="/" noThrow />}
          <Login path="/login" />
          {!isAuth && <Redirect from="/album" to="/login" noThrow />}
          {!isAuth && <Redirect from="/" to="/login" noThrow />}
          <Home path="/" />
          <Album path="/album" />
        </Router>
      </Suspense>
    </>
  );
};
