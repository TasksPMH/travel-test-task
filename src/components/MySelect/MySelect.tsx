import React, { useState } from 'react';
import arrowDown from '../../libs/icons/arrow_down.svg';
import arrowUp from '../../libs/icons/arrow_up.svg';

import './MySelect.scss';

interface SelectProps {
  options?: string[];
  onSelect?: (value: string) => void;
}
const initOption: string[] = [
  'Walking in Old Tallinn',
  "St. Isaac's Cathedral",
  'The Bridge of Peace',
  'El Caminito del Rey',
];
const MySelect: React.FC<SelectProps> = ({
  options = initOption,
  onSelect,
}) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    setIsOpen(prev=>!prev);
  }

  const handleSelect = (value: string) => {
    setValue(value);
    onSelect ? onSelect(value) : null;
    handleClose();
  };

  return (
    <div className="select">
      <div
        className={`select__field${isOpen ? ' select__field--open' : ''}`}
        onClick={handleClick}
        ref={ref}
      >
        <input
          type="text"
          className="select__input"
          value={value}
          placeholder="Choose"
          readOnly
        />
        {!isOpen ? (
          <img src={arrowDown} className="select__input__icon" />
        ) : (
          <img
            src={arrowUp}
            className="select__input__icon"
          />
        )}
      </div>

      {isOpen && (
        <div className="select__options">
          {options.map((option: string, index) => (
            <div
              key={index}
              className="select__option"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySelect;
