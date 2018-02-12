import React from 'react';


export const PersonRow = (props) => {
  return (
      <tr>
      <td> {props.name }</td>
      <td> {props.email}</td>
      <td> {props.phone}</td>
      <td><button onClick={(evt) =>{
                evt.stopPropagation();
                props.onDelEvent(props.index)}} >X</button>
      </td></tr>




  );
}
