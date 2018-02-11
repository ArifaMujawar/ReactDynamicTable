import React from 'react';
import ReactDOM from 'react-dom';


export class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.handleInput= this.handleInput.bind(this);
  }
  handleInput() {
    var input = ReactDOM.findDOMNode(this.refs.userInput);
    var email = ReactDOM.findDOMNode(this.refs.userEmail);
    var age =  ReactDOM.findDOMNode(this.refs.age);
    var gender = ReactDOM.findDOMNode(this.refs.gender);
    this.props.saveInput(input.value,email.value,age.value,gender.value);
    input.value = '';
    email.value= '';
    age.value= '';
    gender.value = '';
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
          ref="userInput"
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
            ref="age"
           />
           <input
             type="text"
             className="form-control"
             id="input-{ label }"
             ref="gender"
            />
        <button onClick={ this.handleInput }>Save</button>
      </div>
    )
  }
}
