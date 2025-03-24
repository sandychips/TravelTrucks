import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import Logo from '../Logo/Logo.jsx';

import styles from './Header.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(isActive && styles.active);
};

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <nav className={styles.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
