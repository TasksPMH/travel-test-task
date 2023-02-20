import React from 'react';
import checkboxDefault from '../../libs/icons/checkbox_default.svg';
import checkboxChecked from '../../libs/icons/checkbox_checked.svg';
import checkboxHover from '../../libs/icons/checkbox_hover.svg';
import './MyCheckbox.scss';
interface MycheckboxProps {
  onChange?: () => void;
  text:string;
}
const Mycheckbox: React.FC<MycheckboxProps> = ({text, onChange}) => {
  const [checked, setChecked] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className='checkbox'>
      <img
        src={
          checked ? checkboxChecked : hover ? checkboxHover : checkboxDefault
        }
        alt="checkbox"
        onClick={handleChange}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <span>{text}</span>
    </div>
  );
};

export default Mycheckbox;
