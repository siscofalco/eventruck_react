import { throwStatement } from '@babel/types';
import axios from 'axios';

import React, { Component } from 'react';

export default class FoodtrucksService extends Component {
  constructor() {
    super();
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/foodtruck`,
      withCredentials: true,
    });
  }

  register = () => this.instance.post('/register');
  getFiltered = (data) => this.instance.post('/results', data);
  getOne = (id) => this.instance.get(`/${id}`);
  book = (id, date) => this.instance.post(`/${id}/book`, {date})
  editFoodtruck = (id) => this.instance.put(`/${id}/edit`)
  deleteFoodtruck= (id) => this.instance.delete(`/${id}/delete`);
}
 