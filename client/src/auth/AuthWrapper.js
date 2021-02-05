import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'src/routes';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useStore } from '../store';
import { API_URL } from '../utils/constants';
import {
  setCompany,
  setJobs,
  setProposals,
  setUser
} from '../store/reducer/actions';
import Loading from '../views/loading/Loading';
import { fetchAndSetData } from '../utils/utils';

const AuthWrapper = () => {
  const routing = useRoutes(routes);
  const {
    isAuthenticated,
    isLoading,
    user,
    getAccessTokenSilently
  } = useAuth0();

  const { state, dispatch } = useStore();

  useEffect(() => {
    const TEST_USER_ID = 1;
    if (isAuthenticated && user) {
      axios
        .get(`${API_URL}/user?email=${user.email}`)
        .then((resolvedPromise) => setUser(dispatch, resolvedPromise.data))
        .catch((exception) => {
          if (exception.response.status === 404) {
            axios
              .put(`${API_URL}/user/${TEST_USER_ID}`, {
                active: user?.email_verified,
                email: user?.email,
                name: user?.name,
                profile_pic: user?.picture,
                phone_number: user?.phone_number,
                address: user?.address,
                zip_code: user?.zip_code,
                city: user?.city,
                updatedAt: user?.updated_at
              })
              .then((resolvedPromise) => setUser(dispatch, resolvedPromise.data))
              .catch(console.error);
          }
        });
    }
  }, [user, isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    if (state.user?.id) {
      fetchAndSetData(
        `${API_URL}/company/user/${state.user.id}`,
        (resolvedPromise) => setCompany(dispatch, resolvedPromise.data)
      );
    }
  }, [state.user.id]);

  useEffect(() => {
    fetchAndSetData(`${API_URL}/jobs`, (resolvedPromise) => setJobs(dispatch, resolvedPromise.data));
    fetchAndSetData(`${API_URL}/proposals`, (resolvedPromise) => setProposals(dispatch, resolvedPromise.data));
  }, [isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }

  return <>{routing}</>;
};

export default AuthWrapper;
