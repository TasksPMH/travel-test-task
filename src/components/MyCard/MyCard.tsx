import likeDefault from "../../libs/icons/like_default.svg";
import likeActive from "../../libs/icons/like_active.svg";
import likeHover from "../../libs/icons/like_hover.svg";
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './MyCard.scss';

interface MyCardProps {
  image: string;
  title: string;
  description:string;
}


const MyCard: React.FC<MyCardProps> = ({ image, title, description }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHover, setIsHovered]= useState(false);
  const [isHoverIcon, setIsHoveredIcon]= useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="card-container">
    <div className="tour-card">
      <div className="tour-card__image">

      <img
        src={image}
        alt={title}
        className={isLiked ? 'liked' : ''}
        
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}
      />
      </div>
        {isLiked ? <img src={likeActive} alt="like" className="like-icon" onClick={handleLike}/> 
        : isHover ?  
        <img src={likeDefault} alt="like" className="like-icon" 
        onMouseEnter={()=>setIsHoveredIcon(true)}
        onClick={handleLike}
        />
        : isHoverIcon ? <img src={likeHover} alt="like" className="like-icon"
        onMouseLeave={()=>setIsHoveredIcon(false)}
        onClick={handleLike}/> : null}
      <h2>{title}</h2>
      <div className="tour-card__description">
        {description}
      </div>
    </div>
    </div>
  );
};

export default MyCard;
