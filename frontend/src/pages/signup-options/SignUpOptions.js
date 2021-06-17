import { Grid, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import SignUpCard from '../../components/SignupCard/SignUpCard';
import SignUpCardOwner from '../../components/SignupCard/SignupCardOwner';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
});

export default function SignUpOptions() {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <h1>Sign Up as a client or owner</h1>
      <Grid
        container
        spacing={6}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6}>
          <SignUpCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SignUpCardOwner />
        </Grid>
      </Grid>
      <Link to="/">
        <Button size="small">Back</Button>
      </Link>
    </div>
  );
}
