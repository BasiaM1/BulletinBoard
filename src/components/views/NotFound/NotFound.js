import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
  >
    <div className={clsx(className, styles.root)}>
      <h2>Page not found :( </h2>
      <Button variant="contained" color="primary" component={Link} to={'/'}>Homepage</Button>
    </div>
  </Grid>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
