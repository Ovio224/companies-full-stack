import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  makeStyles, Snackbar,
  TextField
} from '@material-ui/core';
import axios from 'axios';
import { Alert } from '@material-ui/lab';
import { API_URL } from '../../../utils/constants';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [showToast, setShowToast] = useState(false);
  const [values, setValues] = useState({
    id: '',
    name: '',
    logo_image_uri: ''
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/company/1`)
      .then((resolvedPromise) => setValues(resolvedPromise.data))
      .catch(console.error);
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveCompanyData = () => {
    axios
      .put(`${API_URL}/company/${values.id}`, { ...values })
      .then(() => setShowToast(true))
      .catch(console.error);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Company profile"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the name of the company"
                label="Company name"
                name="name"
                onChange={handleChange}
                required
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Company Picture URL"
                name="logo_image_uri"
                onChange={handleChange}
                required
                value={values.logo_image_uri}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button
            onClick={handleSaveCompanyData}
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
      {showToast
        && (
        <Snackbar open={showToast} autoHideDuration={6000} onClose={() => setShowToast(false)}>
          <Alert onClose={() => setShowToast(false)} severity="success">
            The company data has been saved!
          </Alert>
        </Snackbar>
        )}
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
