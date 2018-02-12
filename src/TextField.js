import React from 'react';
import ReactDOM from 'react-dom';

export class TextField extends React.Component{


  render() {

    var data= [{
      id: 1,
      name: "Simon Bailey",
      email:"arifa@gmail.com",
      phone: "22"
    }, {
      id: 2,
      name: "Thomas Burleson",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 3,
      name: "Will Button",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 4,
      name: "Ben Clinkinbeard",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 5,
      name: "Kent Dodds",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 6,
      name: "Trevor Ewen",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 7,
      name: "Aaron Frost",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 8,
      name: "Joel Hooks",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 9,
      name: "Jafar Husain",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 10,
      name: "Tim Kindberg",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 11,
      name: "John Lindquist",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 12,
      name: "Joe Maddalone",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 13,
      name: "Tyler McGinnis",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 14,
      name: "Scott Moss",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 15,
      name: "Robert Penner",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 16,
      name: "Keith Peters",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 17,
      name: "Lukas Ruebbelke",
      email:"xxx@gmail.com",
      phone: "32"
    }, {
      id: 18,
      name: "Brett Shollenberger",
      email:"xxx@gmail.com",
      phone: "32"
    }];
    let rows = data.map(person => {
          return <PersonRow id = {person.id}
                            name = {person.name}
                            email={person.email}
                            phone =   {person.phone}
                            />
        });

    return (
    <table >
      < tbody >
      <tr>
           <th>Name</th>
           <th>E-mail address</th>
           <th>Phone Number</th>

      </tr>
       {rows}
        < /tbody> < /table>
      );
  }

}
const PersonRow = (props) => {
  return (
    <tr>

      <td> { props.name }</td>
      <td><p> {props.email}</p></td>
      <td><p> {props.phone} </p></td>
      <td><button >X</button></td>
    </tr>
  );
}
