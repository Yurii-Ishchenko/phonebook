import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  filterContacts,
} from './contacts-actions';

const items = createReducer([], {
  [fetchContactsSucsess]: (_, { payload }) => payload,
  [addContactsSucsess]: (state, { payload }) => [payload, ...state],
  [deleteContactsSucsess]: (state, { payload }) =>
    state.filter(({ id }) => payload !== id),
  [changeContactSuccess]: (state, { payload }) =>
    state.map(contact =>
      contact.id === payload.id
        ? {
            ...contact,
            name: payload.name,
            number: payload.number,
          }
        : contact,
    ),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSucsess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSucsess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSucsess]: () => false,
  [deleteContactsError]: () => false,
  [changeContactRequest]: () => true,
  [changeContactSuccess]: () => false,
  [changeContactError]: () => false,
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
