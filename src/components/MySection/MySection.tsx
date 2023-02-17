import React from 'react';
import './MySection.scss';
import MyButton from '../MyButton/MyButton';
function MySection() {
  return (
    <div className="section">
      <div className="section--header">
        <h1 className="section--title">Walking in Old Tallinn</h1>
        <MyButton>Feedback</MyButton>
      </div>

      <div className="section--desc">
        <p>
          Welcome to Old Tallinn, the heart of the Estonian capital! The history
          of the settlement once began from here, and today it is one of the
          best preserved medieval cities in Europe.
        </p>

        <p>
          I will take you through the streets and doorways and show you where
          they traded, what they ate, what they sued about and what our Estonian
          ancestors aspired to.
        </p>

        <p>
          You will visit the oldest pharmacy, get acquainted with the royal
          privileges, see firsthand a real "gingerbread" house, look into an old
          tavern, walk along the widest and longest streets of the city and even
          find out that Tallinn is a lame city!
        </p>
        <p>
          And you will also find beautiful and interesting souvenirs, of course!
        </p>
      </div>
    </div>
  );
}

export default MySection;
