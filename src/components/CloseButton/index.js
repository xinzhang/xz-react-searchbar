import React from 'react';
import './index.scss';

const CloseButton = (props) => {
  return (
    <div className="rightAlign" {...props}>
      <button className="close-button">
        <div className="in">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
        </div>
        <div className="out">
          <div className="close-button-block"></div>
          <div className="close-button-block"></div>
        </div>
      </button>
    </div>
  );
};

export default CloseButton;
