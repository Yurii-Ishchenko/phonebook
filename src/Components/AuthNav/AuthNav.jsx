import LinkNav from '../NavLink/LinkNav';

export default function AuthNav() {
  return (
    <nav>
      <LinkNav to="/register" exact>
        Sign up
      </LinkNav>
      <LinkNav to="/login" exact>
        Sign in
      </LinkNav>
    </nav>
  );
}
