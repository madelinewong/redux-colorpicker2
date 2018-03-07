import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
// import initalState from './counter/actions';

class App extends Component {
  render() {
    return (
      <div className="div1">
        <SketchPicker />;
        <div className="circle"></div>
      </div>
    );
  }
}

export default App;
