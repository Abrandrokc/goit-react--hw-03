import { useState, useEffect } from 'react'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid/non-secure'
import ContactForm from './components/ContactForm/ContactForm';
import { Formik, Form, Field, ErrorMessage } from "formik"
function App() {
   const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState("")
  const filterOn = contact.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
 useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contact));
  }, [contact]);
  const deleteContact = (contactId) => {
    setContact((PrewContact) => {
      return PrewContact.filter((contact) => contact.id !== contactId)
    })
  }
  const handleSubmit = (values, actions) => {
    const id = nanoid(); 
    const newContact = { ...values, id };
    setContact(prevContacts => [...prevContacts, newContact]);
    actions.resetForm();
  };
  return <div>
    <h1>Phonebook</h1>
    <ContactForm handleSubmit={handleSubmit} />
    <SearchBox value={filter} onChange={setFilter}/>
    <ContactList contacts={filterOn} deleteContack={deleteContact} />
  </div>
}

export default App
