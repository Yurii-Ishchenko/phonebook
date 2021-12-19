import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContacts(e.target.value));

  return (
    <label>
      <span className={s.title}>Find contact by name</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
}

export default Filter;
