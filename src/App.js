import React, { Component } from 'react';
import {Data} from './DataFile.js'
export class App extends Component {
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
      const name = e.target.value;
      this.props.onClick(name);
    }

  render() {

    return (<form className="my_form" method="get" action="/">
    <table>
      
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>

      <tr>
        <td><input type="text" name="title" value="Ms." onClick={this.handleChange}/></td>
        <td><input type="text" name="email" value="abc@gmail.com" /></td>
        <td><input type="text" name="age" value="21" /></td>
        <td><input type="text" name="gender" value="Female" /></td>
        <td><button type="submit" onClick={this.handleInput}>Save</button></td>
        <td><input type="edit" value="Edit" /></td>
      </tr>

      <tr>

        <td><input type="text" name="title" value="Ms." /></td>
        <td><input type="text" name="email" value="zbc@gmail.com" /></td>
        <td><input type="text" name="age" value="18" /></td>
        <td><input type="text" name="gender" value="male" /></td>
        <td><input type="submit" value="Submit" /></td>
        <td><input type="edit" value="Edit" /></td>
      </tr>

      <tr>
      <td><input type="text" name="title" value="Ms." /></td>
      <td><input type="text" name="email" value="zee@gmail.com" /></td>
      <td><input type="text" name="age" value="23" /></td>
      <td><input type="text" name="gender" value="male" /></td>
      <td><input type="submit" value="Submit" /></td>
      <td><input type="edit" value="Edit" /></td>
      </tr>

    </table>
    </form>
    );
  }
}

export default App;
