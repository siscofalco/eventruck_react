import axios from 'axios';

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true,
    });
  }

  login(data) {
    return (this.instance.post('/login', data));
  }

  logout() {
    return (this.instance.post('/logout'));
  }
}

export default AuthService;
