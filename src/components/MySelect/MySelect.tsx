import React, { useState } from 'react';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';
import './MySelect.css';

interface SelectProps {
  options?: string[];
  onSelect?: (value: string) => void;
}
const initOption:string[]=["Walking in Old Tallinn","St. Isaac's Cathedral","The Bridge of Peace","El Caminito del Rey"]
const MySelect: React.FC<SelectProps> = ({ options=initOption, onSelect }) => {
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

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelect = (value: string) => {
    setValue(value);
    onSelect ? onSelect(value) : null;
    handleClose();
  };

  return (
    <div className="select">
      <div
        className={`select__field${isOpen ? ' select__field--open' : ''}`}
        onClick={handleOpen}
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
          <TfiArrowCircleDown color="#EAEAEA" />
        ) : (
          <TfiArrowCircleUp color="#659DBD" />
        )}
      </div>
      {isOpen && (
        <div className="select__options">
          {options.map((option:string,index) => (
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
