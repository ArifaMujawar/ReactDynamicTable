import React from 'react';
import ReactDOM from 'react-dom';

export class TextField extends React.Component{
  render() {
    var label = this.props.label || 'Label'
    var text = this.props.text || 'Nothing yet'
    return (
      <div>
        <h3>{ label }</h3>
        <p>{ text }</p>
      </div>
    )
  }
}
