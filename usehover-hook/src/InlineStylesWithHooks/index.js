import React from 'react';
import { white, primary, secondary, success, warning, danger } from '../colors';

export default function InlineStyle(props) {

  const buttonStyles = {
    color: white,
    padding: '7px 14px',
    margin: '0 5px',
    borderRadius: '5px',
    border: '1px solid transparent'
  };

  const primaryStyles = {
    ...buttonStyles,
    backgroundColor: primary 
  };

  const secondaryStyles = {
    ...buttonStyles,
    backgroundColor: secondary 
  };

  const successStyles = {
    ...buttonStyles,
    backgroundColor: success 
  };

  const renderButtons = () => {
   return  ['Primary', 'Secondary', 'Success'].map((d) => {
      let style = `${d.toLowerCase()}Styles`;
      let actualStyles;
      switch(style) {
        case 'primaryStyles' : actualStyles = primaryStyles; break
        case 'secondaryStyles' : actualStyles = secondaryStyles; break
        case 'successStyles' : actualStyles = successStyles; break
        default : ''
      }
      return <button 
        style={actualStyles}>{d}</button>;
    });
  };

  return (
    <div style={{ color: 'red' }}>
      <h2>Inline Styles With Hooks</h2>
      {renderButtons()}
    </div>
  );
}
