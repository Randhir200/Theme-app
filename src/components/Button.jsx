import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';
import styles from './Ui.module.css';

export default function Button() {
  const { theme, mode, toggledTheme } = useContext(ThemeContext);
  console.log(mode);
  return (
    <button
      className={`${theme ? styles.dark : styles.light} ${styles.mt-20}`}
      onClick={() => {
        toggledTheme();
      }}
    >
      {mode}
    </button>
  );
}
