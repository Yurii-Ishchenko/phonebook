import { useSelector, useDispatch } from 'react-redux';
import defaultAvatar from './default-avatar.jpg';
import { authSelectors, authOperations } from '../../redux/auth';
import Button from '../Button/Button';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <span className={s.name}>Wellcome, {name}!</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign out
      </Button>
    </div>
  );
}
