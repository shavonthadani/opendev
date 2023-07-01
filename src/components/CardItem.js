import React from 'react';
import { Link } from 'react-router-dom';
const handleClick = () => {
  window.location.href = 'https://www.youtube.com/'; // Opens the URL in the current window
  // or
  // window.open(props.path); // Opens the URL in a new window/tab
};
function CardItem(props) {
  return (
    <>
      <li className='cards__item' onClick={handleClick}>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
