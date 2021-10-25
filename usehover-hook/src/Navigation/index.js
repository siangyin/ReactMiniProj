import React from 'react';
import {Link} from 'react-router-dom'


export default function Navigation() {
  return (
    <div className='container'>
     <button><Link to='/'>All Styles</Link></button>
     <button><Link to='/standard'>Standard CSS</Link></button>
     <button><Link to='/inline'>Inline CSS</Link></button>
     <button><Link to='/inline-with-hooks'>Inline-With-Hooks</Link></button>
     <button><Link to='/scss'>SCSS</Link></button>
     <button><Link to='/module'>Module</Link></button>
     <button><Link to='/styled-components'>Styled Components</Link></button>
    </div>
  );
}


