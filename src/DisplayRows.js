import React from 'react';
import './index.css';


export const PersonRow = (props) => {
  return (
      <tr>
      <td> {props.name }</td>
      <td> {props.email}</td>
      <td> {props.phone}</td>
      <td> <button className="icon-button"  onClick={(event) => {
        event.stopPropagation();

      }}><span className="glyphicon glyphicon-pencil"></span></button> </td>
      <td><button className="icon-button" onClick={(evt) =>{
                evt.stopPropagation();
                props.onDelEvent(props.index)}} >
                <span className="glyphicon glyphicon-trash"></span></button>
      </td></tr>




  );
}
