import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ChangeContact.module.css';
import Button from '../../Button/Button';
import { changeContact } from '../../../redux/contacts/contacts-operations';
import { visibleContacts } from '../../../redux/contacts/contacts-selectors';
export default function ChangeContact({ onCloseModal, contactId }) {
  const contacts = useSelector(visibleContacts);
  const contact = contacts.find(contact => contact.id === contactId);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changeContact({ contactId, name, number }));
    onCloseModal();
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          className={s.input}
        />
      </label>

      <label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          className={s.input}
        />
      </label>
      <div className={s.btnContainer}>
        <Button type="submit" width="150px" height="30px">
          CHANGE CONTACT
        </Button>
      </div>
    </form>
  );
}
