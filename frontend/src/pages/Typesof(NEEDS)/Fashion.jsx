import React from 'react';
import Banners from '../../components/Banners';
import banner1 from '../../assets/FashionBanners/fashion1.jpg'
import banner2 from '../../assets/FashionBanners/fashion2.jpg';
import banner3 from '../../assets/FashionBanners/fashion3.jpg';
import banner4 from '../../assets/FashionBanners/fashion4.jpg';
import banner5 from '../../assets/FashionBanners/fashion5.jpg';
import banner6 from '../../assets/FashionBanners/multifashion.jpg';

const Fashion = () => {
  const customBanners =  [banner1, banner2, banner3, banner4, banner5, banner6]; 

  return (
    <div>
      <Banners images={customBanners} />
    </div>
  );
};

export default Fashion;
