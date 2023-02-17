import React, { useState } from 'react';
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai';
import './Input.css'
const MyInput = ({success=false, error=false}:{success?:boolean; error?: boolean}) => {
  
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  let classInput = 'input__field';
  if (success) classInput += "input__field--valid";
  if(error) classInput += "input__field--invalid";
  return (
    <div className="input">
      <input
        type="text"
        className={classInput}
        value={value}
        onChange={handleChange}
      />
      {success && (
        <AiFillCheckCircle className="input__icon input__icon--success" />
      )}
      {(error &&
        <AiFillCloseCircle className="input__icon input__icon--error" />
      )}
    </div>
  );
};

export default MyInput;
