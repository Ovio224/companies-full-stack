import React, { useEffect, useState } from 'react';
import {
  Box, Container, Grid, makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';
import ProductCard from './ProductCard';
import { API_URL } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProposalList = () => {
  const classes = useStyles();
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/proposals`)
      .then((resolvedPromise) => setProposals(resolvedPromise?.data))
      .catch(console.error);
  }, []);

  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {proposals.map((proposal) => (
              <Grid
                item
                key={proposal.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  proposal={proposal}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        />
      </Container>
    </Page>
  );
};

export default ProposalList;
