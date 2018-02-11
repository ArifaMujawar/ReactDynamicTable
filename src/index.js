import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import {App} from './App';
import {TextInput} from './TextInput';
import {TextField} from './TextField';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state ={ userIsEditing: false,
      favouriteFlavor:'Arifa'
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

  saveInput(input) {
    this.setState({
      favouriteFlavor: input
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
              label={ 'Favorite flavor' }
              text={ this.state.favouriteFlavor }
            />
            <button onClick={ this.toggleEditing }>Edit</button>
          </div>

        )
      }
    }
    }

ReactDOM.render(<Form />, document.getElementById('root'));
