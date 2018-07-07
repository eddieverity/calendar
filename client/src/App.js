import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Calendar from './components/Calendar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <Calendar />
      </div>
    );
  }
}

export default App;
