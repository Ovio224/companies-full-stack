import React from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Results from './Results';
import { useStore } from '../../../store';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const JobListView = () => {
  const classes = useStyles();
  const { state } = useStore();
  const { jobs } = state;

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

export default withAuthenticationRequired(JobListView);
