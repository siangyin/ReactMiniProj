import React from 'react';
import styles from './styles.module.scss';
console.log('Modules - styles', styles)

export default function App() {
  return (
    <div className={styles.container}>
      <h2>Modules</h2>
      <button className={styles.primary}>Primary</button>
      <button className={styles.secondary}>Secondary</button>
      <button className={styles.success}>Success</button>
    </div>
  );
}
