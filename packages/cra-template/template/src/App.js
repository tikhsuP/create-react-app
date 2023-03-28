import React, { version } from 'react';
import styles from './app.module.scss';

const App = () => {
  console.log(version); // log react version

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <p>
          Welcome to <code>Deepintent.com</code>.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
