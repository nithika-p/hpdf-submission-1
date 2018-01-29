import React, { Component } from 'react';
import './App.css';
import robot from './robot.jpg';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  create(e) {
      e.preventDefault();
      let name = this.refs.myTextField.input.value;
      alert(name);
    }

 constructor(){
      super();
      this.create = this.create.bind(this);
    }
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <div className='text'>
          Say Something to Student helper bot
          Response format is {"[<entity_name>,<entity_value>]"}
        </div>
        <div className='main'>
          <form method="POST" action="/">
          <TextField  ref='myTextField' floatingLabelText="Enter some text" floatingLabelStyle={{fontSize:20}} />
          <button type="submit" name="button" value="client_msged" className='button' onClick={this.create}>Find intent</button>
          </form>
        </div>
        <div className='response'>
          //give response in this div
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
