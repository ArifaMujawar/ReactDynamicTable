import React from 'react';
import {TextField} from './TextField';
import './index.css';
import {PersonRow} from './DisplayRows';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.handleRowDel=this.handleRowDel.bind(this);
    this.handleRowEdit= this.handleRowEdit.bind(this);
    this.addUser= this.addUser.bind(this);
    this.state= {
     data : props.data,
     name:"",
     email:"",
     phone:"",
     id:""

    }
    }

    handleRowDel(index){
      let data= this.state.data.indexOf(index);
      this.state.data.splice(index,1);
      this.setState(this.state.data);
    }
    handleRowEdit(i){
      //yet to work on this
      let data = this.state.data.map((res,i)=>{
        return res
      })

      this.setState({
        data : this.state.data
      })
      let name = data[i].name;
      let email = data[i].email;
      let phone = data[i].phone;

    }
    addUser(evt){
      evt.preventDefault();
      var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
      var user= this.refs.fname.value;
      var email= this.refs.email.value;
      var phone= this.refs.phone.value;
      var entry ={
        id: id,
        name: user,
        email:email,
        phone:phone
      }

      console.log(user+" "+email);
    var emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
   email = emailValid ? '' : ' is invalid';

        if(typeof user === 'string' && user.length>0 && email===''){
        this.state.data.push(entry);
        this.setState({data:this.state.data,
           isAdd: true,
           name : user,
           email : email,
           phone : phone,
           id : id});
        console.log("Length:"+this.state.data.length);
      }
      else{
        alert("Please enter the correct format");
        console.log("not adding");
      }
      this.refs.fname.value="";
      this.refs.email.value="";
      this.refs.phone.value="";
    }
  render() {
    let rows = this.state.data.map((person,index) => {
          return  (          <PersonRow
                            name = {person.name}
                            email={person.email}
                            phone = {person.phone}
                            id ={person.id}
                            index={index}
                            onEditEvent= {this.handleRowEdit}
                            onDelEvent={this.handleRowDel}
                            />
                          );

          });
    return(
      <div>
      <form className="form-inline" ref="add">
      <table id="upperForm">
      <input id ="fname" type="text" placeholder="Full name"  ref="fname"/>
      <input id ="email" type="email" placeholder="E-mail address" ref="email"/>
      <input id ="phone" type="tel" pattern ="[0-9]*" placeholder="Phone number" ref="phone"/>
      <button className="addUser" ref="addBtn" onClick={(event)=>{this.addUser(event)}}>Add New</button>
      </table>
      </form>
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
export default App;
