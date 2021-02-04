import React, { useEffect, useState } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';
import Results from './Results';
import { API_URL } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/jobs`)
      .then((resolvedPromise) => setJobs(resolvedPromise?.data))
      .catch(console.error);
  }, []);

  return (
    <Page className={classes.root} title="Jobs">
      <Container maxWidth={false}>
        <Box mt={3}>
          <Results jobs={jobs} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
