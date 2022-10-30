import React, { Component } from 'react';
class App extends React.Component {
constructor() {
super();
this.state = { displayBio: false,
description: 'React is the most used js library'
};
//this.props.title="teste"; forbidden 
console.log('Component this', this);
this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
}
toggleDisplayBio(){
this.setState({displayBio: !this.state.displayBio});
console.log(this.state.displayBio);
}
render() {
  return (
  <div>
  <h1>Welcome to React!!</h1>
  {
  this.state.displayBio ? (
  <div>
  <h4>{this.props.title}</h4>
  <h5>
    {this.state.description}
  </h5>
  <button onClick={this.toggleDisplayBio}> Show Less </button>
  </div>
  ) : (
  <div>
  <button onClick={this.toggleDisplayBio}> Read More </button>
  </div>
  )
  }
  </div>
  ) } }
  export default App;