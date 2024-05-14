import React from 'react';
import banner1 from '../../assets/Electronicbanners/Electronic1.jpg'
import banner2 from '../../assets/Electronicbanners/Electronic2.jpg'
import banner3 from '../../assets/Electronicbanners/Electronic3.jpg'
import Banners from '../../components/Banners';

const Electronics = () => {
  const customBanners = [banner1 , banner2,banner3]
  return (
    <div>
      <Banners images={customBanners}/>
    </div>
  )
}

export default Electronics
