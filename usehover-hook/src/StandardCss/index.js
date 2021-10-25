import React from 'react';
import './styles.css'

export default function StandardCss() {
  return (
    <div className='container'>
      <h2>Standard CSS</h2>
      <button className='button primary'>Primary</button>
      <button className='button secondary '>Secondary</button>
      <button className='button success'>Success</button>
    </div>
  );
}
