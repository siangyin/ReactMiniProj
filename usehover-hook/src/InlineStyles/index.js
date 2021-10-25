import React, { useState } from 'react';
import { white, primary, secondary, success, warning, danger } from '../colors';

export default function InlineStyle(props) {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [hoverSuccess, setHoverSuccess] = useState(false);

  const buttonStyles = {
    color: white,
    padding: '7px 14px',
    margin: '0 5px',
    borderRadius: '5px',
    border: '1px solid transparent'
  };

  const primaryStyles = {
    ...buttonStyles,
    backgroundColor: !hoverPrimary ? primary : danger
  };

  const secondaryStyles = {
    ...buttonStyles,
    backgroundColor: !hoverSecondary ? secondary : danger
  };

  const successStyles = {
    ...buttonStyles,
    backgroundColor: !hoverSuccess ? success : danger
  };

  const handleHover = (event) => {
    switch(event.target.innerHTML) {
      case 'Primary' : setHoverPrimary(!hoverPrimary); break
      case 'Secondary' : setHoverSecondary(!hoverSecondary); break
      case 'Success' : setHoverSuccess(!hoverSuccess); break
      default : ''
    }
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
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        style={actualStyles}>{d}</button>;
    });
  };

  return (
    <div style={{ color: 'red' }}>
      <h2>Inline Styles</h2>
      {renderButtons()}
    </div>
  );
}
