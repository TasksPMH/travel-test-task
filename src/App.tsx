import React from 'react';
import MySelect from './components/MySelect/MySelect';
import MyInput from './components/MyInput/MyInput';

//@ts-ignore
import banner from '../public/images/Banner.png';
import MyButton from './components/MyButton/MyButton';
import MyChip from './components/MyChip/MyChip';
import MySection from './components/MySection/MySection';
import './App.css';
const App: React.FC = () => {
  return (
    <div className='container'>
      <img src={banner} alt="image" />
      <MySection/>
      <MyInput />
      <br />
      <MySelect />
      <br />
      <MyButton>Default</MyButton>
      <br />
      <MyChip label="chip"></MyChip>
    </div>
  );
};

export default App;
