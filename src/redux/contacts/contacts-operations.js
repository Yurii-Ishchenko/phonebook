import {
  fetchContactsRequest,
  fetchContactsSucsess,
  fetchContactsError,
  addContactsRequest,
  addContactsSucsess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSucsess,
  deleteContactsError,
  changeContactRequest,
  changeContactSuccess,
  changeContactError,
} from './contacts-actions';

import axios from 'axios';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSucsess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = data => dispatch => {
  const contact = {
    name: data.name,
    number: data.number,
  };
  dispatch(addContactsRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSucsess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactsSucsess(contactId)))
    .catch(error => dispatch(deleteContactsError(error)));
};

export const changeContact =
  ({ contactId, name, number }) =>
  dispatch => {
    const update = { name, number };
    dispatch(changeContactRequest());

    axios
      .patch(`/contacts/${contactId}`, update)
      .then(({ data }) => dispatch(changeContactSuccess(data)))
      .catch(error => dispatch(changeContactError(error)));
  };
