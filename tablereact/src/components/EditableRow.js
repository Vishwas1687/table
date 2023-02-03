import React from 'react';
import Input from './Input.js';
const EditableRow=(editFormData,handleEditFormChange,handleCancelClick)=>{
    return (
        <tr>
            {editFormData.map((editFormInput,index)=>{
                return ( 
                <td>
               <Input key={index} {...editFormInput} handleFormInput={handleEditFormChange}/>
               </td>
                )
            })}
        <td><button type="submit">Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
        </td>
        </tr>
    )
}
export default EditableRow;