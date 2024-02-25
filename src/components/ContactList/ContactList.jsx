import { Contact } from '../Contact/Contact';
import style from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={style.listContact}>
      {contacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
