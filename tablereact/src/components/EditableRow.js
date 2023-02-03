import React from 'react';
import InputEdit from './InputEdit.js';
const EditableRow=({editFormData,inputs,handleEditFormChange,handleCancelClick})=>{
    console.log(editFormData)
    return (
        <tr>
            {inputs.map((editFormInput,index)=>{
                return ( 
                <td>
                 <InputEdit key={index} {...editFormInput} value={editFormData[editFormInput.name]}  handleEditFormChange={handleEditFormChange}/>
               </td>
                )
            })}
        <td>
        <button type="submit">Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
        </td>
        </tr>
    )
}
export default EditableRow;