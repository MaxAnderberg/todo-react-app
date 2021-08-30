import React from 'react';
import './Button.scss';

const Button = ({ onClick, text, customClass }) => (
  <button type="button" onClick={onClick} className={`${customClass} btn`}>
    {text}
  </button>
);

export default Button;
