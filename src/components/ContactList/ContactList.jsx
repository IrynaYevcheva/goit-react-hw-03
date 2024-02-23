import { Contact } from '../Contact/Contact';
import style from './ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={style.listContact}>
      {contacts.map(contact => (
        <li className={style.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
