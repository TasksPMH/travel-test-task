import React from 'react';
import './MyChip.scss';
interface ChipProps {
  onClick?: () => void;
  children: React.ReactNode;
  selected?: boolean;
}

const MyChip: React.FC<ChipProps> = ({ onClick, children,selected }) => {
  return (
    <button className={`chip ${selected? "chip__selected" :""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default MyChip;
