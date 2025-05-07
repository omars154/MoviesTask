import React, { useState } from 'react';

function App() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [contacts, setContacts] = useState([{name: "", email: ""}]);
  

  const formHandler = (e) => {
    e.preventDefault();

    let newPerson = {
      name,
      email
    }

    setContacts([...contacts, newPerson]);
    setEmail("");
    setName("");
  }
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact, index) => {
      return index !== id;
    });
    setContacts(newContacts);
  }
  return (
    <>
      <form onSubmit={formHandler}>
        <input type='text' placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type='submit'>add contact</button>
      </form>

      <ul>
        {contacts.map((contact, index) => (<li key={index}> {contact.email} - {contact.name} <button onClick={() => deleteHandler(index)}>delete</button></li>))}
      </ul>
    </>    
  );
}

export default App;