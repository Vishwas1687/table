import React from 'react';
const InputEdit = ({handleEditFormChange,value,editFormInput})=>{
    return(
      <input {...editFormInput} value={value} onChange={(event)=>handleEditFormChange(event)}/>
    );
}

export default InputEdit;