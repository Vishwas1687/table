import React from 'react';
const Input = ({handleFormInput,value,input})=>{
    return(
      <input {...input} value={value} onChange={(event)=>handleFormInput(event)}/>
    );
}

export default Input;