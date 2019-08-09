import React from 'react';

import FormikForm from './components/Form';
import Data from './components/Data';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <FormikForm />
        <Data />
      </div>
    );
  }
}

export default App;
