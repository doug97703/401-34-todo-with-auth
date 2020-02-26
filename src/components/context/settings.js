import React from 'react';

export const SettingsContext = React.createContext();

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: 'display',
      toggleCompleted: this.toggleCompleted,
      perPage: 3,
      setPerPage: this.setPerPage,
    };
  }

  toggleCompleted = () => this.setState({ completed: this.state.completed === 'display' ? 'hide' : 'display' });

  setPerPage = e => {
    e.preventDefault();
    this.setState({ perPage: e.target.value })
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default Settings;
