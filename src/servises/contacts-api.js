import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

export const addContacts = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteTodo = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
