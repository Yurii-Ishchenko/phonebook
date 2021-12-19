import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSucsess = createAction(
  'contacts/fetchContactsSucsess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSucsess = createAction('contacts/addContactsSucsess');
export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactsRequest = createAction(
  'contacts/deleteContactsRequest',
);
export const deleteContactsSucsess = createAction(
  'contacts/deleteContactsSucsess',
);
export const deleteContactsError = createAction('contacts/deleteContactsError');

export const changeContactRequest = createAction(
  'contacts/changeContactRequest',
);
export const changeContactSuccess = createAction(
  'contacts/changeContactSuccess',
);
export const changeContactError = createAction('contacts/changeContactError');

export const filterContacts = createAction('contacts/changeFilter');
