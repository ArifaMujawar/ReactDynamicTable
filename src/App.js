import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {

    }

    }
    addUser(){
      var user= this.refs.fname.value;
      if(typeof user === 'string' && user.length>0){
        //this.props.
        this.refs.add.reset();
      }
      this.setState({});
    }
  render() {

    return(
      <div>
      <form className="form-inline" ref="add">
      <input type="text" placeholder="Full name"  ref="fname"/>
      <input type="email" placeholder="E-mail address" />
      <input type="number" placeholder="Phone number" />
      <button onClick={this.addUser}>Add New User</button>
      </form>

      </div>
    );
}
}
export default App;
