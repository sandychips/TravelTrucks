import { Suspense } from 'react';

import Header from '../Header/Header.jsx';

import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
}
