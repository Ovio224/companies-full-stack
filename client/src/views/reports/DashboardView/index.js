import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Jobs from './Jobs';
import TotalProposals from './TotalProposals';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={5}>
          <Grid item lg={6} sm={12} xl={12} xs={12}>
            <Jobs />
          </Grid>
          <Grid item lg={6} sm={12} xl={12} xs={12}>
            <TotalProposals />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
