import React from 'react';
import AuthService from '../services/auth.service';
import PrivateService from '../services/private.service';

const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    state = {
      isLoggedIn: false,
      isLoading: true,
      user: null,
    };
  };

  authService = new AuthService();

  privateService = new PrivateService();

  async componentDidMount() {
    try {
      const result = await this.authService.isLoggedIn();
      if (result) {
        console.log(result);
        this.setState({
          isLoggedIn: true,
          isLoading: false,
          user: result.data,
        });
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, isLoading: false, user: null });
    }
  }

  signupOwner = (data) => {
    this.authService
      .signupOwner(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch((err) => this.setState({ isLoggedIn: false, user: null }));
  };

  signupClient = (data) => {
    this.authService
      .signupClient(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch((err) => this.setState({ isLoggedIn: false, user: null }));
  };

  login = (data) => {
    this.authService
      .login(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch(() => this.setState({ isLoggedIn: false, user: null }));
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  editOwner = (data) => {
    this.privateService
      .editOwner(data)
      .then((response) => this.setState({ ...this.state, user: response.data }))
      .catch((error) => console.error(error));
  };

  editClient = (data) => {
    console.log(data);
    this.privateService
      .editClient(data)
      .then((response) => this.setState({ ...this.state, user: response.data }))
      .catch((error) => console.error(error));
  };

  deleteOwner = () => {
    this.privateService
      .deleteOwner()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  deleteClient = () => {
    this.privateService
      .deleteClient()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  render() {
    const { isLoggedIn, isLoading, user } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <Provider
        value={{
          isLoading,
          isLoggedIn,
          user,
          signupClient: this.signupClient,
          signupOwner: this.signupOwner,
          login: this.login,
          logout: this.logout,
          editClient: this.editClient,
          editOwner: this.editOwner,
          deleteClient: this.editClient,
          deleteOwner: this.deleteOwner,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const withAuth = (WrappedComponent) => {
  return function (props) {
    return (
      <Consumer>
        {(value) => {
          const {
            isLoading,
            isLoggedIn,
            user,
            signupOwner,
            signupClient,
            login,
            logout,
            editOwner,
            editClient,
            deleteOwner,
            deleteClient,
          } = value;

          return (
            <WrappedComponent
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              user={user}
              signupOwner={signupOwner}
              signupClient={signupClient}
              login={login}
              logout={logout}
              editOwner={editOwner}
              editClient={editClient}
              deleteOwner={deleteOwner}
              deleteClient={deleteClient}
              {...props}
            />
          );
        }}
      </Consumer>
    );
  };
};

export { AuthProvider, withAuth };
