import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {TextInput} from './TextInput';
import {TextField} from './TextField';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state ={ userIsEditing: false,
      name:'Arifa',
      email:'arifa@gmail.com',
      phone:'26'

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



  saveInput(input,einput,phone) {
    this.setState({
      name: input,
      email:einput,
      phone:phone

    });
  }

    render(){

        var userIsEditing = this.state.userIsEditing
        if (userIsEditing) {
            return (
              <div>
                <TextInput
                  label={ 'List of participants' }
                  saveInput={ this.saveInput }
                 />
                <button onClick={ this.toggleEditing }>Done</button>
              </div>
            )
        }else{
        return (
          <div>
          <div>
          <App />
          

          </div>
            <TextField
              label={ 'List of participants' }
              text={ this.state.name }
              email={ this.state.email}
              phone={ this.state.phone}

            />
            <button onClick={ this.toggleEditing }>Edit</button>

          </div>


        );
      }
    }
    }

ReactDOM.render(<Form />, document.getElementById('root'));
