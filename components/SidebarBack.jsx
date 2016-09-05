import React from 'react';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

export default props => {
  return (
    <div className={ `sidebar-toggle ${props.className || ''}`} onClick={props.onClick}>
      <FaArrowLeft color="#ccc" width="40" heigth="40" size="30" />
    </div>
  );
};
