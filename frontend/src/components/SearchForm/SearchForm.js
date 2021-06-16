import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const types = [
  {
    value: 'any',
    label: 'Any',
  },
  {
    value: 'food',
    label: 'Food',
  },
  {
    value: 'drinks',
    label: 'Drinks',
  },
  {
    value: 'food&drinks',
    label: 'Food & Drinks',
  },
];

const specialties = [
  {
    value: 'any',
    label: 'Any',
  },
  {
    value: 'bagels',
    label: 'Bagels',
  },
  {
    value: 'sandwiches',
    label: 'Sandwiches',
  },
  {
    value: 'burritos',
    label: 'Burritos',
  },
  {
    value: 'crepes',
    label: 'Crepes',
  },
  {
    value: 'hamburgers',
    label: 'Hamburgers',
  },
  {
    value: 'pizza',
    label: 'Pizza',
  },
  {
    value: 'sushi',
    label: 'Sushi',
  },
  {
    value: 'smoothies',
    label: 'Smoothies',
  },
  {
    value: 'tea',
    label: 'Tea',
  },
  {
    value: 'coffee',
    label: 'Coffee',
  },
  {
    value: 'beer',
    label: 'Beer',
  },
  {
    value: 'cocktails',
    label: 'Cocktails',
  },
  {
    value: 'icecream',
    label: 'Ice Cream',
  },
  {
    value: 'dessert',
    label: 'Dessert',
  },
  {
    value: 'cakes',
    label: 'Cakes',
  },
];

const prices = [
  {
    value: 'any',
    label: 'any',
  },
  {
    value: '0-150',
    label: '0 - 150€',
  },
  {
    value: '150-300',
    label: '150 - 300€',
  },
  {
    value: '300-450',
    label: '300 - 450€',
  },
  {
    value: '450-600',
    label: '450 - 600€',
  },
  {
    value: '+600',
    label: '+600€',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  const [data, setData] = React.useState({
    type: '',
    specialty: '',
    price: '',
    // date: '',
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(data.type, data.specialty);
  };

  return (
    <form
      className={classes.root}
      onSubmit={sendData}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-select-type"
          select
          label="Type"
          name="type"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select type of food truck"
        >
          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-specialty"
          select
          label="Specialty"
          name="specialty"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select specialty"
        >
          {specialties.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="standard-select-price"
          select
          label="Price"
          name="price"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select price"
        >
          {prices.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          helperText="Please select date"
        />
        <Button type="submit" variant="contained" color="secondary">
          Search
        </Button>
      </div>
    </form>
  );
}
