import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  colors,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import { get } from 'axios';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { API_URL } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Jobs = ({ className, ...rest }) => {
  const classes = useStyles();
  const [totalJobs, setTotalJobs] = useState(undefined);

  useEffect(() => {
    get(`${API_URL}/jobs/count`)
      .then((resolvedPromise) => setTotalJobs(resolvedPromise?.data?.count));
  }, []);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              TOTAL JOBS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {totalJobs}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AttachMoneyIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Jobs.propTypes = {
  className: PropTypes.string
};

export default Jobs;
