import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from 'src/components/Logo';
import { useAuth0 } from '@auth0/auth0-react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60
  }
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const { logout, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box flexGrow={1} />
        <Hidden mdDown>
          {!isAuthenticated ? (
            <Button
              onClick={() => loginWithRedirect({
                redirectUri: 'http://localhost:3000/app/dashboard'
              })}
              startIcon={<VpnKeyIcon />}
              variant="contained"
              color="secondary"
            >
              Login
            </Button>
          ) : (
            <Button
              onClick={() => logout({ returnTo: 'http://localhost:3000/app/dashboard' })}
              variant="contained"
              color="secondary"
              startIcon={<VpnKeyIcon />}
            >
              Logout
            </Button>
          )}
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
