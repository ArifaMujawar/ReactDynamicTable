import React from 'react';
import ReactDOM from 'react-dom';

export class TextField extends React.Component{
  render() {
    var label = this.props.label || 'Label'
    var text = this.props.text || 'Nothing yet'
    var email = this.props.email || 'Not specified'
    var age= this.props.age || 'Not born'
    var gender = this.props.gender || 'Not specified'
    return (
      <div>
        <h3>{ label }</h3>
        <table>

        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td><p>{ text }</p></td>
          <td><p> {email}</p></td>
          <td><p> {age} </p></td>
          <td><p> {gender} </p></td>
        </tr>
        </table>
      </div>
    )
  }
}
