import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {TextField} from './TextField';

class Form extends React.Component{
  constructor(props){
    super(props);

  }

    render(){

        return (

            <TextField    />

        );
      }
    }

ReactDOM.render(<Form />, document.getElementById('root'));
