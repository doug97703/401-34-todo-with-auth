import React from 'react';

// State Only
import ToDo from './components/todo/todo-hooks';
import SettingsContext from './components/context/settings'
import Toolbar from './components/settings/toolbar'
import './components/todo/todo.scss';

// API Connected (Live Data)

export default class App extends React.Component {
  render() {
    return (
      <>
        <SettingsContext>
        <Toolbar />
        <ToDo />
        </SettingsContext>
      </>
    );
  }
}
