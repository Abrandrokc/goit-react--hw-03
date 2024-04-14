import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
export default function ContactList({ contacts, deleteContack }) {
    return (
    <ul className={css.ul}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContack={deleteContack} />
      ))}
    </ul>
  );
   
}