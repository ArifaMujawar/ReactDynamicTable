import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TextField} from './TextField';
import './index.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
     Data : props.data
    }

    }
    addUser(evt){
      console.log("Over here");
      evt.preventDefault();
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var user= this.refs.fname.value;
      var email= this.refs.email.value;
      var phone= this.refs.phone.value;
      var entry ={
        id: id,
        name: user,
        email:email,
        phone:phone
      }
      console.log("entry:"+entry);
        console.log("Data:"+this.state.Data);
      if(typeof user === 'string' && user.length>0){
        this.props.data.push(entry);
        this.setState({data:this.props.Data});
      }

    }
  render() {

    return(
      <div>
      <form className="form-inline" ref="add">
      <table>
      <input id ="fname" type="text" placeholder="Full name"  ref="fname"/>
      <input id ="email" type="email" placeholder="E-mail address" ref="email"/>
      <input id ="phone" type="tel" placeholder="Phone number" ref="phone"/>
      <button className="addUser" ref="addBtn" onClick={(event)=>{this.addUser(event)}}>Add New User</button>
      </table>
      </form>

      </div>
    );
}
}
export default App;
