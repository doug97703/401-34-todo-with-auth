import React from 'react';
import { SettingsContext } from '../context/settings';
import './toolbar.scss'
import Auth from '../auth/auth'

class Toolbar extends React.Component {

  // When just using one context, you use contextType to identify the context provider
  // Then, you have access to this.context to use any state or methods exposed
  static contextType = SettingsContext;

  render() {
    let label = this.context.completed === 'display' ? 'Display' : 'Hide'
    return (
      <Auth capability="update">
        <h2>Design Settings</h2>
        <div id="design-settings">
          <div id="settings-complete">
            <p>Completed Task: {label}</p>
            <button id="btn" onClick={this.context.toggleCompleted}>Toggle</button>
          </div>
          <div id="settings-items-page">
            <p>Items per page: {this.context.perPage}</p>
            <input onChange={this.context.setPerPage} placeholder="set items per page" type="text"></input>
          </div>
        </div>
      </Auth>
    );
  }
}

export default Toolbar;
