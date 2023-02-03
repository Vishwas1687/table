import React from 'react';
const ReadOnlyRow = (contact,handleEditClick,handleDeleteClick)=>{
     
     return (
        <tr>
          <td>{contact["full name"]}</td>
          <td>{contact.address}</td>
          <td>{contact["phone number"]}</td>
          <td>{contact.email}</td>
          <td>
            <button onClick={(event)=>handleEditClick(event,contact)}>Edit</button>
            <button onClick={(event)=>handleDeleteClick(event,contact.id)}>Delete</button>
          </td>
         </tr>
     )
}
export default ReadOnlyRow;