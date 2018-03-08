import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import './App.css';
// import initalState from './counter/actions';

class App extends Component {
  render() {
    return (
      <div className="div1" style={{backgroundColor: this.props.color}}></div> 
        <SketchPicker onChange={(color) => this.props.changeColor(color.hex)} />;
        <div className="circle"></div>
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
