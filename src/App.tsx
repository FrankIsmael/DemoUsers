import React, { Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { Sidebar } from './components/Sidebar';
//import { Home } from './pages/Home';
import { GlobalStyle } from './styles/GlobalStyles';
import { Album } from './pages/Album';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() =>import('./pages/Login'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div />}>
        <GlobalStyle />
        <Sidebar />
        <Router>
          <Home path="/" />
          <Album path="/album/" />
          {/* <UserAlbum path='/detail/:detailId' /> */}
          <Login path="/login" />
        </Router>
      </Suspense>
    </>
  );
};
