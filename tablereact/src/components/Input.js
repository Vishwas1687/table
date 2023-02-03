import React from 'react';
const Input = (handleFormInput,input)=>{
    return(
      <input {...input} onChange={handleFormInput}></input>
    );
}

export default Input;