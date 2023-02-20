import React from 'react';
import MySelect from './components/MySelect/MySelect';
import MyInput from './components/MyInput/MyInput';

import banner from '../public/images/Banner.png';
import MyButton from './components/MyButton/MyButton';
import MyChip from './components/MyChip/MyChip';
import MySection from './components/MySection/MySection';
import './App.scss';
import MyCarousel from './components/MyCarousel/MyCarousel';
import OtherTours from './components/OtherTours/OtherTours';
const App: React.FC = () => {
  return (
    <div className='app'>
      <img src={banner} alt="image" className='app__banner'/>
      <div className='container'>
      <MySection/>
      </div>
      <MyCarousel/>
      <div className='container'>
      <OtherTours />
      </div>

    </div>
  );
};

export default App;
