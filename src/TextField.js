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
        email:"simon@gmail.com",
        phone: "22"
     }, {
        id: 2,
        name: "Thomas Burleson",
        email:"thomas@gmail.com",
        phone: "32"
   }, {
     id: 3,
     name: "Will Button",
     email:"wil@gmail.com",
     phone: "28"
   }, {
     id: 4,
     name: "Ben Clinkinbeard",
     email:"ben@gmail.com",
     phone: "25"
   }, {
     id: 5,
     name: "Kent Dodds",
     email:"kent@gmail.com",
     phone: "22"
   }, {
     id: 6,
     name: "Trevor Ewen",
     email:"trevor@gmail.com",
     phone: "29"
   }, {
     id: 7,
     name: "Aaron Frost",
     email:"aron@gmail.com",
     phone: "21"
   }, {
     id: 8,
     name: "Joel Hooks",
     email:"joel@gmail.com",
     phone: "25"
   }, {
     id: 9,
     name: "Jafar Husain",
     email:"jafar@gmail.com",
     phone: "20"
   }, {
     id: 10,
     name: "Tim Kindberg",
     email:"tim@gmail.com",
     phone: "27"
   }, {
     id: 11,
     name: "John Lindquist",
     email:"john@gmail.com",
     phone: "25"
   }, {
     id: 12,
     name: "Joe Maddalone",
     email:"joe@gmail.com",
     phone: "26"
   }, {
     id: 13,
     name: "Tyler McGinnis",
     email:"tyler@gmail.com",
     phone: "29"
   }, {
     id: 14,
     name: "Scott Moss",
     email:"scott@gmail.com",
     phone: "28"
   }, {
     id: 15,
     name: "Robert Penner",
     email:"robert@gmail.com",
     phone: "22"
   }, {
     id: 16,
     name: "Keith Peters",
     email:"keith@gmail.com",
     phone: "28"
   }, {
     id: 17,
     name: "Lukas Ruebbelke",
     email:"lukas@gmail.com",
     phone: "23"
   }, {
     id: 18,
     name: "Brett Shollenberger",
     email:"brett@gmail.com",
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
      <div id="companyName"><img className="logo" ></img><span>Nord Software</span></div>
      </div>

        <div id="mylabel"> <h2 id="label"> List of participants</h2></div>
      <App data={this.state.data} />

        <table className="MainTable">
    <thead>
      <tr>
           <th>Name</th>
           <th>E-mail address</th>
           <th>Phone Number</th>
           <th></th><th></th>
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
