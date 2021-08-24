import React from 'react';
import './AddButton.scss';

const AddButton = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={ onClick } className="button">{ text }</button>
    </div>
  );
}

export default AddButton;
