import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './views/main';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/newBudget'>New Budget</Link>
        <Main />
      </div>
    );
  }
}

export default App;
