import React from 'react';
import './MyButton.scss';
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const MyButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default MyButton;
