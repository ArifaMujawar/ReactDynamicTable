import React from 'react';
import {PersonRow} from './DisplayRows';
import {App} from './App';
import './index.css';

export class TextField extends React.Component{
  constructor(props){
    super(props);
    this.handleRowDel=this.handleRowDel.bind(this);

    this.state = {
      data : [{
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
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 4,
     name: "Ben Clinkinbeard",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 5,
     name: "Kent Dodds",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 6,
     name: "Trevor Ewen",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 7,
     name: "Aaron Frost",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 8,
     name: "Joel Hooks",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 9,
     name: "Jafar Husain",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 10,
     name: "Tim Kindberg",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 11,
     name: "John Lindquist",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 12,
     name: "Joe Maddalone",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 13,
     name: "Tyler McGinnis",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 14,
     name: "Scott Moss",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 15,
     name: "Robert Penner",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 16,
     name: "Keith Peters",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 17,
     name: "Lukas Ruebbelke",
     email:"arifa@gmail.com",
     phone: "22"
   }, {
     id: 18,
     name: "Brett Shollenberger",
     email:"arifa@gmail.com",
     phone: "22"
   }]
    }
  }
  handleRowDel(index){
    let data= this.state.data.indexOf(index);
    this.state.data.splice(index,1);
    this.setState(this.state.data);
  }
  render() {

    let rows = this.state.data.map((person,index) => {
          return  (          <PersonRow
                            name = {person.name}
                            email={person.email}
                            phone = {person.phone}
                            index ={index}
                            onDelEvent={this.handleRowDel}
                            />
                          );

          });
    return (

        <div >
        <div className="header" id="myHeader">
      <div id="companyName"><h2><img  className="logo" ></img>Nord Software</h2></div>
      </div>

        <div id="mylabel"> <h2 id="label"> List of participants</h2></div>
      <App data={this.state.data} />

        <table className="MainTable">
    <thead>
      <tr>
           <th>Name</th>
           <th>E-mail address</th>
           <th>Phone Number</th>
      </tr>
    </thead>
    <tbody>
          {rows}

      </tbody>
      < /table>

</div>


      );
  }

}
