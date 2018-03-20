import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
import { changeColor } from './store.js';
import { connect } from "react-redux";
// import initalState from './counter/actions';

class App extends Component {
  render() {
    return (
      <div>
      <div className="div1" style={{backgroundColor: this.props.color}}></div> 
        <SketchPicker onChange={(color) => this.props.changeColor(color.hex) } />
        <div className="circle"></div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeColor: (color) => dispatch(changeColor(color))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
