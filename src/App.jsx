import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppBar from './Components/AppBar/AppBar';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import Container from './Components/Container/Container';
const SignIn = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const SignUp = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1 style={{ textAlign: 'center' }}>Loading...</h1>
      ) : (
        <>
          <AppBar />
          <ToastContainer />
          <Suspense fallback={null}>
            <Switch>
              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <SignIn />
              </PublicRoute>
              <PublicRoute path="/register" redirectTo="/contacts" restricted>
                <SignUp />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
              <PublicRoute>
                <Redirect to="/register" />
              </PublicRoute>
            </Switch>
          </Suspense>
        </>
      )}
    </Container>
  );
}
