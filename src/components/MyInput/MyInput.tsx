import React, { useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import iconError from '../../libs/icons/icon_error.svg';
import iconSuccess from '../../libs/icons/icon_success.svg';
import './Input.scss';
interface MyInputProps {
  success?: boolean;
  error?: boolean;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: React.FC<MyInputProps> = ({
  success = false,
  error = false,
  name,
  type,
  value,
  onChange,
}) => {
  if (value) success = true;
  let classInput = 'input__field';
  if (success) classInput += ' input__field--valid';
  if (error) classInput += ' input__field--invalid';
  return (
    <div className="input">
      <input
        type={type}
        className={classInput}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder='Placeholder'
      />
      {success && (
        <img src={iconSuccess} className='input__icon'/>
      )}
      {error && (
        <img src={iconError} className='input__icon'/>
      )}
    </div>
  );
};

export default MyInput;
