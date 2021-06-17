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

export default function SignUpCardOwner() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Sign up as owner
        </Typography>
        <Typography variant="body2" component="p">
          <DoneOutlineIcon />
          Make your foodtrucks known
        </Typography>
        <Typography variant="body2" component="p">
          <DoneOutlineIcon />
          receive booking requests
        </Typography>
        <Typography variant="body2" component="p">
          <DoneOutlineIcon />
          Manage your bookings
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
