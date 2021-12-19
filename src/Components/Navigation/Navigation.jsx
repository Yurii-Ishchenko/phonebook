import React from 'react';
import LinkNav from '../NavLink/LinkNav';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {isLoggedIn && (
        <nav>
          <LinkNav to="/contacts" exact>
            Contacts
          </LinkNav>
        </nav>
      )}
    </>
  );
};

export default Navigation;
