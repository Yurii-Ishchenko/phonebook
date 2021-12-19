import { NavLink } from 'react-router-dom';
import s from './LinkNav.module.css';

export default function LinkNav({ children, ...linkProps }) {
  return (
    <NavLink {...linkProps} className={s.link} activeClassName={s.activeLink}>
      {children}
    </NavLink>
  );
}
