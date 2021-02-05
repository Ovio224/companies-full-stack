import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  makeStyles,
  Snackbar,
  Typography
} from '@material-ui/core';
import ShopIcon from '@material-ui/icons/Shop';
import moment from 'moment';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { API_URL } from '../../../utils/constants';
import { fetchAndSetData } from '../../../utils/utils';
import { setProposals } from '../../../store/reducer/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = ({
  className, proposal, dispatch, ...rest
}) => {
  const classes = useStyles();
  const [showToast, setShowToast] = useState(false);

  const handleChangeProposalStatus = (status) => {
    axios
      .put(`${API_URL}/proposal/${proposal.id}`, {
        ...proposal,
        status
      })
      .then(() => {
        fetchAndSetData(`${API_URL}/proposals`, (resolvedPromise) => setProposals(dispatch, resolvedPromise.data));
        setShowToast(true);
      });
  };

  return (
    <>
      <Card className={clsx(classes.root, className)} {...rest}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={3}>
            <Avatar alt="Product" variant="square">
              <ShopIcon />
            </Avatar>
          </Box>
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {moment(proposal.date).format('Do MMM YYYY')}
          </Typography>
          <Typography align="center" color="textPrimary" variant="body1">
            {proposal.description}
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle1">
            ID:
            {' '}
            {proposal.id}
          </Typography>
          <Typography align="center" color="textPrimary" variant="subtitle1">
            {proposal.status}
          </Typography>
        </CardContent>
        <Box flexGrow={1} />
        <Divider />
        <Box p={2}>
          <Grid container justify="space-between" spacing={2}>
            <Grid className={classes.statsItem} item>
              <Button
                color="primary"
                display="inline"
                variant="outlined"
                onClick={() => handleChangeProposalStatus('accepted')}
              >
                ACCEPT
              </Button>
            </Grid>
            <Grid className={classes.statsItem} item>
              <Button
                color="default"
                display="inline"
                variant="outlined"
                onClick={() => handleChangeProposalStatus('rejected')}
              >
                REJECT
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
      {showToast && (
        <Snackbar
          open={showToast}
          autoHideDuration={6000}
          onClose={() => setShowToast(false)}
        >
          <Alert onClose={() => setShowToast(false)} severity="success">
            The status has been changed
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  proposal: PropTypes.object.isRequired,
  dispatch: PropTypes.any
};

export default ProductCard;
