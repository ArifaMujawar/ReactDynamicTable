import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {App} from './App';
import {TextInput} from './TextInput';
import {TextField} from './TextField';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state ={ userIsEditing: false,
      name:'Arifa',
      email:'arifa@gmail.com',
      age:'26',
      gender:'female'
    };
    this.toggleEditing=this.toggleEditing.bind(this);
    this.saveInput=this.saveInput.bind(this);
  }

  toggleEditing() {
    var userIsEditing = !this.state.userIsEditing
    this.setState({
      userIsEditing: userIsEditing
    });

  }
  addUser(){

  }


  saveInput(input,einput,age,gender) {
    this.setState({
      name: input,
      email:einput,
      age:age,
      gender:gender
    });
  }

    render(){

        var userIsEditing = this.state.userIsEditing
        if (userIsEditing) {
            return (
              <div>
                <TextInput
                  label={ 'Favorite flavor' }
                  saveInput={ this.saveInput }
                 />
                <button onClick={ this.toggleEditing }>Done</button>
              </div>
            )
        }else{
        return (
          <div>
            <TextField
              label={ 'List of participants' }
              text={ this.state.name }
              email={ this.state.email}
              age={ this.state.age}
              gender={this.state.gender}
            />
            <button onClick={ this.toggleEditing }>Edit</button>
            <div>
            <button onCLick={this.addUser}>Add New User</button>
            <button onClick={this.deleteUser}>Delete User</button>
            </div>
          </div>


        )
      }
    }
    }

ReactDOM.render(<Form />, document.getElementById('root'));
