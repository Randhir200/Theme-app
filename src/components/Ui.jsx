import { ThemeContext } from '../contexts/ThemeContext';
import styles from './Ui.module.css';
import { useContext } from 'react';
export default function Ui() {
  const modes = {};
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`${styles.card} ${theme?styles.light:styles.dark}`}>
      <h1>Headind</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
        distinctio libero officia excepturi sapiente,
      </p>
      <button>click</button>
    </div>
  );
}
