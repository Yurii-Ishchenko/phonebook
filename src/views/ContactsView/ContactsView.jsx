import { useSelector } from 'react-redux';
import Form from '../../Components/Form/Form';
import ContactList from '../../Components/ContactsList/ContactsList';
import Filter from '../../Components/Filter/Filter';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactsView.module.css';

export default function ContactsView() {
  const contacts = useSelector(getAllContacts);
  return (
    <div className={s.container}>
      <h1>Hi! This is your phonebook. Here you can store your contacts.</h1>
      <Form />
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </div>
  );
}
