import React from 'react';
import ReactDOM from 'react-dom';


export class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.handleInput= this.handleInput.bind(this);
  }
  handleInput() {
    var name = ReactDOM.findDOMNode(this.refs.userName);
    var email = ReactDOM.findDOMNode(this.refs.userEmail);
    var phone =  ReactDOM.findDOMNode(this.refs.userPhone);
    this.props.saveInput(name.value,email.value,phone.value);
    name.value = '';
    email.value= '';
    phone.value= '';
  }
  render() {
    var label = this.props.label
    return (
      <div className="form-group">
        <h3><label for="input-{ label }">{ label }</label></h3>
        <input
          type="text"
          className="form-control"
          id="input-{ label }"
          ref="userName"
         />
         <input
           type="email"
           className="form-control"
           id="input-{ label }"
           ref="userEmail"
          />
          <input
            type="number"
            className="form-control"
            id="input-{ label }"
            ref="userPhone"
           />

        <button onClick={ this.handleInput }>Save</button>
      </div>
    )
  }
}
