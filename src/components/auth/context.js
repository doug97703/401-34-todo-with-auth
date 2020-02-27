import React from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const API = 'https://lit-anchorage-79085.herokuapp.com';

const testLogins = {
  testAdmin: process.env.REACT_APP_ADMIN_TOKEN || '',
  testEditor: process.env.REACT_APP_EDITOR_TOKEN || '',
  testUser: process.env.REACT_APP_USER_TOKEN || '',
  doug: process.env.REACT_APP_ADMIN_TOKEN || '',
};

export const LoginContext = React.createContext();
let user;

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      user: {},
    };
  }

  login = (username, password) => {
    // This is foul and unsafe ... but when working offline / testmode ess oh kay
    if (testLogins[username]) {
      this.validateToken(testLogins[username]);
    }
    else {
      fetch(`${API}/signin`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        }),
      })
        .then(response => response.text())
        .then(token => this.validateToken(token))
        .catch(console.error);
    }
  }

  validateToken = token => {
    try {
      user = jwt.verify(token, process.env.REACT_APP_SECRET);
      this.setLoginState(true, token, user);
    }
    catch (e) {
      this.setLoginState(true, token, user);
      console.log('Token Validation Error-------------------', e);
    }

  };

  logout = () => {
    this.setLoginState(false, null, {});
  };

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  };

  componentDidMount() {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    this.validateToken(token);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;
