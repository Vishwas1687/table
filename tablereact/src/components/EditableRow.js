import React from 'react';
import Input from './Input.js';
const EditableRow=(editFormData,handleEditFormChange,handleCancelClick)=>{
    return (
        <>
        <td>
            {editFormData.map((editFormInput,index)=>{
               <Input key={index} {...editFormData} handleFormInput={handleEditFormChange}/>
            })}
        </td>
        <button type="submit">Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
        </>
    )
}
export default EditableRow;