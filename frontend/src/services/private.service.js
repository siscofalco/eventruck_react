import axios from 'axios';

import React, { Component } from 'react'

export default class PrivateService extends Component {
    constructor() {
        super();
      this.instance = axios.create({
        baseURL: `${process.env.REACT_APP_API_URL}/private`,
        withCredentials: true,
      });
    }

    getClient = () => this.instance.get(`/profile`);
    getOwner = () => this.instance.get(`/profile-owner/`);
    editClient = (data) => this.instance.put(`/profile/edit`, data);
    editOwner = (data) => this.instance.put(`/profile-woner/edit`, data);
    deleteClient = () => this.instance.delete('/profile/delete');
    deleteOwner = () => this.instance.delete('/profile-owner/delete');
}
