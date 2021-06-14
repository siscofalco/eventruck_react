import axios from 'axios';

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true,
    });
  }

  signupOwner(data) {
    return (this.instance.post('/owner', data));
  }

  signupClient(data) {
    return (this.instance.post('/client', data));
  }

  login(data) {
    return (this.instance.post('/login', data));
  }

  logout() {
    return (this.instance.post('/logout'));
  }

  isLoggedIn() {
    return (this.instance.get('/loggedin'));
  }
}

export default AuthService;
