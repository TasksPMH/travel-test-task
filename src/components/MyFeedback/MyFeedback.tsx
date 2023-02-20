import React from 'react';
import closeDisable from '../../libs/icons/close_disable.svg';
import closeHover from '../../libs/icons/close_hover.svg';
import { useState } from 'react';
import './MyFeedback.scss';
import MyInput from '../MyInput/MyInput';
import MySelect from '../MySelect/MySelect';
import MyChip from '../MyChip/MyChip';
import Mycheckbox from '../MyCheckbox/Mycheckbox';
import MyButton from '../MyButton/MyButton';

interface MyFeedbackProps {
  onClose: () => void;
  show: boolean;
}

interface FeedbackFormData {
  name: string;
  phone: string;
  email: string;
  tripName: string;
}

const chipOptions = [
  'Reviews and suggestions',
  'Question about content',
  'Complaints',
  'Other',
];
const MyFeedback: React.FC<MyFeedbackProps> = ({ onClose, show }) => {
  const [formData, setFormData] = useState<FeedbackFormData>({
    name: '',
    phone: '',
    email: '',
    tripName: '',
  });
  const [chipSelected, setChipSelected] = useState<string>(chipOptions[0]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(formData);
  };
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {show && (
        <div className="modal-overlay" >
          <div className="modal">
            <div className='modal-close'>
              <img onClick={onClose} src={closeDisable} alt="close" />
              </div>
            <h1>Feedback</h1>
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-form__row">
                <div className="modal-form__col">
                  <label htmlFor="name">Your name:</label>
                  <MyInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-form__col">
                  <label htmlFor="email">Email address:</label>
                  <MyInput
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-form__row">
                <div className="modal-form__col">
                  <label htmlFor="phone">Your phone:</label>
                  <MyInput
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-form__col">
                  <label htmlFor="name">Choose a trip</label>
                  <MySelect />
                </div>
              </div>
              
            </form>
            <div className="modal__chips">
              {chipOptions.map((option, index) => (
                <MyChip
                  key={index}
                  selected={option === chipSelected}
                  onClick={() => setChipSelected(option)}
                >
                  {option}
                </MyChip>
              ))}
            </div>
            <div className="modal__textbox">
              <h2>Describe your question</h2>
              <textarea name="question" id="question" cols={30} rows={10} />
            </div>
            <div className="modal__footer">
              <Mycheckbox text='Даю согласие на обработку' />
              <MyButton>Send</MyButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyFeedback;
