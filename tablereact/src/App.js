import React,{useState,Fragment} from 'react';
import EditableRow from './components/EditableRow.js';
import ReadOnlyRow from './components/ReadOnlyRow.js';
import Input from './components/Input.js';
import data from './mock-data.json';
import {nanoid} from 'nanoid';
function App() {
  const [contacts,setContacts]=useState(data)
  const [addFormData,setAddFormData]=useState({
    "full name":"",
    address:"",
    "phone number":"",
    email:""
  })
  const [editFormData,setEditFormData]=useState({
    "full name":"",
    address:"",
    "phone number":"",
    email:""
  })

  const inputs=[{
    "name":"full name",
     type:"text",
     required:"required",
     placeholder:"Full Name"
  },
  {
     "name":"address",
     type:"text",
     required:"required",
     placeholder:"Address"
},
{
     "name":"phone number",
     type:"text",
     required:"required",
     placeholder:"Phone Number"
},
{
     "name":"email",
     type:"email",
     required:"required",
     placeholder:"Email"
}
  ]
  const [contactEditId,setContactEditId]=useState(null)

  const handleFormInput=(event)=>{
    event.preventDefault()
    const fieldname=event.target.getAttribute("name")
    const fieldvalue=event.target.value
    const newContacts={...addFormData}
    newContacts[fieldname]=fieldvalue

    setAddFormData(newContacts)
  }

  const handleAddFormSubmit=(event)=>{
    event.preventDefault()
      const newContact={
        id:nanoid(),
        "full name":addFormData["full name"],
        address:addFormData.address,
        "phone number":addFormData["Phone number"],
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
         "full name":editFormData["full name"],
        address:editFormData.address,
        "phone number":editFormData["Phone number"],
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
         "full name":contact["full name"],
        address:contact.address,
        "phone number":contact["phone number"],
         email:contact.email
      }
      setEditFormData(existingContact)
  }

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
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
            <Fragment>
              {contact.id===contactEditId?
              (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>)
              :
              (<ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDelete={handleDeleteClick}/>)
              }
            </Fragment>
          })}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={handleAddFormSubmit}>
          {
            inputs.map((input,index)=>{
                <Input key={index} {...input} onChange={handleFormInput}/>
            })
          }
          <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
