import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import { Auth0Provider } from '@auth0/auth0-react';
import { AUTH_DOMAIN, CLIENT_ID } from './utils/constants';
import GlobalStore from './store';
import store from './store/reducer/store';
import AuthWrapper from './auth/AuthWrapper';

const App = () => {
  return (
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <GlobalStore store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <AuthWrapper />
        </ThemeProvider>
      </GlobalStore>
    </Auth0Provider>
  );
};

export default App;
