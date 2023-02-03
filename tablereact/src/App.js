import React,{useState,Fragment} from 'react';
import EditableRow from './components/EditableRow.js';
import ReadOnlyRow from './components/ReadOnlyRow.js';
import Input from './components/Input.js';
import data from './mock-data.json';
import {nanoid} from 'nanoid';
function App() {
  const [contacts,setContacts]=useState(data)
  const [addFormData,setAddFormData]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  })
  const [editFormData,setEditFormData]=useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:""
  })

  const inputs=[{
     name:"fullName",
     type:"text",
     required:"required",
     placeholder:"Full Name"
  },
  {
     name:"address",
     type:"text",
     required:"required",
     placeholder:"Address"
},
{
     name:"phoneNumber",
     type:"text",
     required:"required",
     placeholder:"Phone Number"
},
{
     name:"email",
     type:"email",
     required:"required",
     placeholder:"Email"
}
  ]
  const [contactEditId,setContactEditId]=useState(null)

  const handleFormInput=(event)=>{
    event.preventDefault()
    const newContacts={...addFormData,[event.target.name]:event.target.value}

    setAddFormData(newContacts)
  }

  const handleAddFormSubmit=(event)=>{
    event.preventDefault()
      const newContact={
        id:nanoid(),
        name:addFormData.fullName,
        address:addFormData.address,
        phoneNumber:addFormData.phoneNumber,
         email:addFormData.email
      }

      const newContacts=[...contacts,newContact]
      setContacts(newContacts)
  }

  const handleEditFormChange=(event)=>{
    event.preventDefault()
    const fieldname=event.target.getAttribute("name")
    const fieldvalue=event.target.value
    const editContact= {...editFormData}
    editContact[fieldname]=fieldvalue
    setEditFormData(editContact)
  }

  const handleEditFormSubmit=(event)=>{
      event.preventDefault()
      const newContact={
        id:contactEditId,
         name:editFormData.fullName,
        address:editFormData.address,
        phoneNumber:editFormData.phoneNumber,
         email:editFormData.email
      }
      const index=contacts.findIndex((contact)=>contact.id===contactEditId)
      const newContacts=[...contacts]
      newContacts[index]=newContact
      setContacts(newContacts)

      setContactEditId(null)
  }

  const handleCancelClick=()=>{
    setContactEditId(null)
  }
  
  const handleDeleteClick=(event,id)=>
  {
    event.preventDefault()
      const newContacts=contacts.filter((contact)=>contact.id!==id)
      setContacts(newContacts)

  }
  const handleEditClick=(event,contact)=>{
      event.preventDefault()
      setContactEditId(contact.id)
      const existingContact={
        fullName:contact.fullName,
        address:contact.address,
        phoneNumber:contact.phoneNumber,
         email:contact.email
      }
      setEditFormData(existingContact)
  }

  return (
    <div className="app-container">
      <form onSubmit={(event)=>handleEditFormSubmit(event)}>
        <table>
          <thead>
          <tr>
            <th>Full name</th>
            <th>address</th>
            <th>phone number</th>
            <th>email</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {contacts.map((contact)=>{
            return(
            <Fragment>
              {contactEditId===contact.id?
              (<EditableRow editFormData={editFormData} inputs={inputs} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>)
              :
              (<ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)
              }
            </Fragment>
          )
          })}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={(event)=>handleAddFormSubmit(event)}>
          {
            inputs.map((input,index)=>{
                return <Input key={index} {...input} value={addFormData[inputs.name]} onChange={handleFormInput}/>
            })
          }
          <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
