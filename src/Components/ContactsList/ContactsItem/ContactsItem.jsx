import { useState } from 'react';
import s from './ContactsItem.module.css';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import DeleteContact from '../DeleteContact/DeleteContact';
import ChangeContact from '../ChangeContact/ChangeContact';

export default function ContactsItem({ id, name, number, onDelete }) {
  const [isDeleteContact, setIsDeleteContact] = useState(false);
  const [isChangeContact, setIsChangeContact] = useState(false);

  const toggleDeleteContact = () => {
    setIsDeleteContact(!isDeleteContact);
  };
  const toggleChangeContact = () => {
    setIsChangeContact(!isChangeContact);
  };

  return (
    <>
      <li className={s.item}>
        <span>
          {name}: {number}
        </span>
        <div className={s.buttonContainer}>
          <Button type="button" onClick={toggleDeleteContact}>
            DELETE
          </Button>
          <Button type="button" onClick={toggleChangeContact}>
            CHANGE
          </Button>
        </div>
      </li>
      {isDeleteContact && (
        <Modal onClose={toggleDeleteContact}>
          <DeleteContact
            onDelete={() => {
              toggleDeleteContact();
              onDelete();
            }}
            onCloseModal={toggleDeleteContact}
          />
        </Modal>
      )}
      {isChangeContact && (
        <Modal onClose={toggleChangeContact}>
          <ChangeContact onCloseModal={toggleChangeContact} contactId={id} />
        </Modal>
      )}
    </>
  );
}
