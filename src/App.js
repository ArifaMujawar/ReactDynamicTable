import React, { Component } from 'react';
//import {Data} from './DataFile.js'
export class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      data: [{
        id: 1,
        name: "Simon Bailey"
      }, {
        id: 2,
        name: "Thomas Burleson"
      }, {
        id: 3,
        name: "Will Button"
      }, {
        id: 4,
        name: "Ben Clinkinbeard"
      }, {
        id: 5,
        name: "Kent Dodds"
      }, {
        id: 6,
        name: "Trevor Ewen"
      }, {
        id: 7,
        name: "Aaron Frost"
      }, {
        id: 8,
        name: "Joel Hooks"
      }, {
        id: 9,
        name: "Jafar Husain"
      }, {
        id: 10,
        name: "Tim Kindberg"
      }, {
        id: 11,
        name: "John Lindquist"
      }, {
        id: 12,
        name: "Joe Maddalone"
      }, {
        id: 13,
        name: "Tyler McGinnis"
      }, {
        id: 14,
        name: "Scott Moss"
      }, {
        id: 15,
        name: "Robert Penner"
      }, {
        id: 16,
        name: "Keith Peters"
      }, {
        id: 17,
        name: "Lukas Ruebbelke"
      }, {
        id: 18,
        name: "Brett Shollenberger"
      }]
    }

    }

  render() {
    let rows = this.state.data.map(person => {
       <PersonRow key ={
        person.id
      }
      data = {
        person
      }
      />
    })
    return <table>
    <tbody>
    {rows}
    </tbody>
    </table>
}
}

const PersonRow = (props) => {
  return(
    <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name} </td>
    </tr>
  );
}
//     return (<form className="my_form" method="get" action="/">
//     <table>
//
//     <tr>
//       <th>Name</th>
//       <th>Email</th>
//       <th>Age</th>
//       <th>Gender</th>
//     </tr>
//
//       <tr>
//         <td><input type="text" name="title" value="Ms." onClick={this.handleChange}/></td>
//         <td><input type="text" name="email" value="abc@gmail.com" /></td>
//         <td><input type="text" name="age" value="21" /></td>
//         <td><input type="text" name="gender" value="Female" /></td>
//         <td><button type="submit" onClick={this.handleInput}>Save</button></td>
//         <td><input type="edit" value="Edit" /></td>
//       </tr>
//
//       <tr>
//
//         <td><input type="text" name="title" value="Ms." /></td>
//         <td><input type="text" name="email" value="zbc@gmail.com" /></td>
//         <td><input type="text" name="age" value="18" /></td>
//         <td><input type="text" name="gender" value="male" /></td>
//         <td><input type="submit" value="Submit" /></td>
//         <td><input type="edit" value="Edit" /></td>
//       </tr>
//
//       <tr>
//       <td><input type="text" name="title" value="Ms." /></td>
//       <td><input type="text" name="email" value="zee@gmail.com" /></td>
//       <td><input type="text" name="age" value="23" /></td>
//       <td><input type="text" name="gender" value="male" /></td>
//       <td><input type="submit" value="Submit" /></td>
//       <td><input type="edit" value="Edit" /></td>
//       </tr>
//
//     </table>
//     </form>
//     );
//   }
// }

export default App;
