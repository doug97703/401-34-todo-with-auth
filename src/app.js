import React from 'react';

import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import LoginContext from './components/auth/context.js';

// State Only
import ToDo from './components/todo/todo-hooks';
import SettingsContext from './components/context/settings'
import Toolbar from './components/settings/toolbar'
import './components/todo/todo.scss';

const EditLink = props => {
  return (
    <Auth capability="update">
      <span>Edit</span>
    </Auth>
  );
};

const DeleteLink = props => {
  return (
    <Auth capability="delete">
      <span>Delete</span>
    </Auth>
  );
};

// API Connected (Live Data)

export default class App extends React.Component {
  render() {
    return (
      <>
        <LoginContext>
          <Login />
          <hr />
          <SettingsContext>
            <Toolbar />
            <ToDo />
          </SettingsContext>
        </LoginContext>
      </>
    );
  }
}
