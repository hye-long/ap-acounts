import './main2.css';


import React from 'react';


function Main2({ id, name, value, onChange, checked, type}) {
  return (
    <div className="radio-container">
      <input
        id={id}
        type="radio"

        name={type === 'age' ? 'age' : 'product'}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{name}</label>
    </div>
  );
}




export default Main2;


