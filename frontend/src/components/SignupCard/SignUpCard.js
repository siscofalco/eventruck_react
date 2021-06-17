import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 600,
    margin: 120,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SignUpCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sign up as client
        </Typography>
        <Typography variant="body2" component="p">
          <DoneOutlineIcon />
          Get foodtrucks for your events
        </Typography>
        <Typography variant="body2" component="p">
          <DoneOutlineIcon />
          Booking request
        </Typography>
        <Typography variant="body2" component="p">
          <DoneOutlineIcon />
          Exclusive offers
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/signup-client">
          <Button size="small">Sign up</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
