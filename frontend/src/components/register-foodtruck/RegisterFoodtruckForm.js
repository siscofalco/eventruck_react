import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function RegisterFoodtruckForm() {
  const classes = useStyles();

  const [value, setValue] = React.useState('');
  const [data, setData] = React.useState('');

  const handleChangeCheck = (event) => {
    setValue(event.target.value);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Register a Foodtruck</h1>
      <FormControl
        className={classes.root}
        onSubmit={sendData}
        noValidate
        autoComplete="off"
      >
        <div className={classes.flex}>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Foodtruck Name"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-multiline-static"
            label="Required"
            multiline
            rows={4}
            defaultValue="Description"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Image"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Price"
            variant="outlined"
            onChange={handleChange}
          />
        </div>
        <FormLabel component="legend">Type</FormLabel>
        <RadioGroup
          className={classes.flexrow}
          aria-label="type"
          name="type"
          value={value}
          onChange={handleChangeCheck}
        >
          <FormControlLabel value="food" control={<Radio />} label="Food" />
          <FormControlLabel value="drinks" control={<Radio />} label="Drinks" />
          <FormControlLabel
            value="food&drinks"
            control={<Radio />}
            label="Food & Drinks"
          />
        </RadioGroup>
        <FormLabel component="legend">Specialty</FormLabel>
        <RadioGroup
          className={classes.flexrow}
          aria-label="type"
          name="type"
          value={value}
          onChange={handleChangeCheck}
        >
          <FormControlLabel value="bagels" control={<Radio />} label="Bagels" />
          <FormControlLabel
            value="sandwiches"
            control={<Radio />}
            label="Sandwiches"
          />
          <FormControlLabel
            value="burritos"
            control={<Radio />}
            label="Burritos"
          />
          <FormControlLabel value="crepes" control={<Radio />} label="Crepes" />
          <FormControlLabel
            value="hamburgers"
            control={<Radio />}
            label="Hamburgers"
          />
          <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
          <FormControlLabel value="sushi" control={<Radio />} label="Sushi" />
          <FormControlLabel
            value="smoothies"
            control={<Radio />}
            label="Smoothies"
          />
          <FormControlLabel value="tea" control={<Radio />} label="Tea" />
          <FormControlLabel value="coffee" control={<Radio />} label="Coffee" />
          <FormControlLabel value="beer" control={<Radio />} label="Beer" />
          <FormControlLabel
            value="cocktails"
            control={<Radio />}
            label="Cocktails"
          />
          <FormControlLabel
            value="icecream"
            control={<Radio />}
            label="Ice Cream"
          />
          <FormControlLabel value="cakes" control={<Radio />} label="Cakes" />
          <FormControlLabel
            value="dessert"
            control={<Radio />}
            label="Dessert"
          />
        </RadioGroup>
        <Button type="submit" variant="contained" color="secondary">
          Register
        </Button>
      </FormControl>
    </div>
  );
}
