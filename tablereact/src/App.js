import React,{useState} from 'react';
import EditableRow from './Components/EditableRow.js';
import ReadOnlyRow from './Components/ReadOnlyRow.js';
import Input from './components/Input.js';
import data from './mock-data.json';
function App() {
  const [contacts,setContacts]=useState(data)
  const [addFormData,setAddFormData]=useState({
    id:"",
    "full name":"",
    address:"",
    "phone number":"",
    email:""
  })
  const [editFormData,setEditFormData]=useState({
    id:"",
    "full name":"",
    address:"",
    "phone number":"",
    email:""
  })

  const inputs=[{
    "name":"full name",
     type:"text",
     required:true,
     placeholder:"Full Name"
  },
  {
     "name":"address",
     type:"text",
     required:false,
     placeholder:"Address"
},
{
     "name":"phone number",
     type:"text",
     required:true,
     placeholder:"Phone Number"
},
{
     "name":"email",
     type:"email",
     required:true,
     placeholder:"Email"
}
  ]
  const [contactEditId,setContactEditId]=useState(null)
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
            <tr>
              {contact.id===contactEditId?
              <EditableRow editFormData={editFormData} handleEditRow={handleEditRow} handelEditCancel={handelEditCancel}/>
              :
              <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDelete={handleDelete}/>
              }
            </tr>
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
