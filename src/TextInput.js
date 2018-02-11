import React from 'react';
import ReactDOM from 'react-dom';


export class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.handleInput= this.handleInput.bind(this);
  }
  handleInput() {
    var input = ReactDOM.findDOMNode(this.refs.userInput);
    this.props.saveInput(input.value);
    input.value = '';
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
        <button onClick={ this.handleInput }>Save</button>
      </div>
    )
  }
}
