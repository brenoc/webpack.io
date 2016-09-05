import React from 'react';
import FaBars from 'react-icons/lib/fa/bars';

export default props => {
  return (
    <div className={ `sidebar-toggle ${props.className || ''}`} onClick={props.onClick}>
      <FaBars color="#ccc" width="40" heigth="40" size="30"/>
    </div>
  );
};
