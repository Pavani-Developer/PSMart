import React from 'react';
import banner1 from '../../assets/Furniturebanners/Furniture1.jpg'
import banner2 from '../../assets/Furniturebanners/Furniture2.jpg'
import banner3 from '../../assets/Furniturebanners/Furniture3.jpg'
import Banners from '../../components/Banners';

const Furniture = () => {
  const customBanners = [banner1,banner2,banner3]
  return (
    <div>
      <Banners images ={customBanners}/>
    </div>
  )
}

export default Furniture

3