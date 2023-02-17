import React, { useState } from 'react';
import './MyChip.css';
interface ChipProps {
  label: string;
}

const MyChip: React.FC<ChipProps> = ({ label }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`chip${isActive ? ' chip--active' : ''}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default MyChip;
