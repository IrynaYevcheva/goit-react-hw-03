import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import style from './Contact.module.css';

export const Contact = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.info}>
        <div className={style.name}>
          <p>
            <IoPerson />
            {name}
          </p>
        </div>
        <div className={style.number}>
          <p>
            <FaPhoneAlt /> {number}
          </p>
        </div>
      </div>
      <button className={style.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
