import React from 'react';
import {App} from './App';
import './index.css';

export class TextField extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      userIsEditing: false,
      data : [{
        id: 1,
        name: "Simon Bailey",
        email:"simon@gmail.com",
        phone: "262576782"
     }, {
        id: 2,
        name: "Thomas Burleson",
        email:"thomas@gmail.com",
        phone: "3356776332"
   }, {
     id: 3,
     name: "Will Button",
     email:"wil@gmail.com",
     phone: "22421568"
   }, {
     id: 4,
     name: "Ben Clinkinbeard",
     email:"ben@gmail.com",
     phone: "2967845545"
   }, {
     id: 5,
     name: "Kent Dodds",
     email:"kent@gmail.com",
     phone: "22142342"
   }, {
     id: 6,
     name: "Trevor Ewen",
     email:"trevor@gmail.com",
     phone: "22432419"
   }, {
     id: 7,
     name: "Aaron Frost",
     email:"aron@gmail.com",
     phone: "22432341"
   }, {
     id: 8,
     name: "Joel Hooks",
     email:"joel@gmail.com",
     phone: "22432345"
   }, {
     id: 9,
     name: "Jafar Husain",
     email:"jafar@gmail.com",
     phone: "22432340"
   }, {
     id: 10,
     name: "Tim Kindberg",
     email:"tim@gmail.com",
     phone: "245612347"
   }, {
     id: 11,
     name: "John Lindquist",
     email:"john@gmail.com",
     phone: "2456545"
   }, {
     id: 12,
     name: "Joe Maddalone",
     email:"joe@gmail.com",
     phone: "24564566"
   }, {
     id: 13,
     name: "Tyler McGinnis",
     email:"tyler@gmail.com",
     phone: "2567567659"
   }, {
     id: 14,
     name: "Scott Moss",
     email:"scott@gmail.com",
     phone: "2698878"
   }, {
     id: 15,
     name: "Robert Penner",
     email:"robert@gmail.com",
     phone: "2234234322"
   }, {
     id: 16,
     name: "Keith Peters",
     email:"keith@gmail.com",
     phone: "242242348"
   }, {
     id: 17,
     name: "Lukas Ruebbelke",
     email:"lukas@gmail.com",
     phone: "2234433"
   }, {
     id: 18,
     name: "Brett Shollenberger",
     email:"brett@gmail.com",
     phone: "234523422"
   }, {
     id: 19,
     name: "Ethen berger",
     email:"ett@gmail.com",
     phone: "2347953422"
   }, {
     id: 20,
     name: "Laura Iso",
     email:"laura@gmail.com",
     phone: "2352392"
 }]
    }
  }

  render() {

    return (

        <div >
        <div className="header" id="myHeader">
      <div id="companyName"><img className="logo" ></img><span>Nord Software</span></div>
      </div>

        <div id="mylabel"> <h2 id="label"> List of participants</h2></div>
      <App data={this.state.data} />

</div>

      );
  }

}
