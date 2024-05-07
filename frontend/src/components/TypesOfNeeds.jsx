import React from 'react';
import '../styles/TypesOfNeeds.css';
import Beauty from '../assets/Typesofneeds/beauty.png';
import Electronics from '../assets/Typesofneeds/electronics.png';
import Fashion from '../assets/Typesofneeds/fashion.png';
import Furniture from '../assets/Typesofneeds/furniture.png';
import Grocery from '../assets/Typesofneeds/grocery.png';
import Mobile from '../assets/Typesofneeds/mobile&tabs.png';
import Homekitchen from '../assets/Typesofneeds/home&kitchen.png';
import Top from '../assets/Typesofneeds/topoffer.png';
import Travel from '../assets/Typesofneeds/travel.png';
import Tv from '../assets/Typesofneeds/tv.png';

const TypesOfNeeds = () => {
  // Assuming you have an array of image URLs and their names
  const images = [
    { src: Top, name: 'Top Offers', url: '/top-offers' },
    { src: Mobile, name: 'Mobile & Tabs', url: '/mobile-tabs' },
    { src: Tv, name: 'TV', url: '/tv' },
    { src: Electronics, name: 'Electronics', url: '/electronics' },
    { src: Fashion, name: 'Fashion', url: '/fashion' },
    { src: Beauty, name: 'Beauty', url: '/beauty' },
    { src: Homekitchen, name: 'Home & Kitchen', url: '/home-kitchen' },
    { src: Furniture, name: 'Furniture', url: '/furniture' },
    { src: Travel, name: 'Travel', url: '/travel' },
    { src: Grocery, name: 'Grocery', url: '/grocery' }
  ];

  return (
    <div className="image-container">
      {images.map(({ src, name, url }, index) => (
        <a key={index} href={url} className="image-wrapper">
          <img src={src} className="image" alt={`Image ${index}`} />
          <p className="image-name">{name}</p>
        </a>
      ))}
    </div>
  );
};

export default TypesOfNeeds;
